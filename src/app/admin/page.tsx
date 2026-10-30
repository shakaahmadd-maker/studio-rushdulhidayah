'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useAuth } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Loader2, LogOut, Settings, RefreshCw, AlertCircle } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { BackButton } from '@/components/BackButton';
import { fetchRegistrations, fetchContacts } from '@/lib/api-client';

export default function AdminPage() {
  const { user, loading: userLoading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [loggingOut, setLoggingOut] = useState(false);

  const [registrations, setRegistrations] = useState<any[]>([]);
  const [registrationsLoading, setRegistrationsLoading] = useState(true);
  const [registrationsError, setRegistrationsError] = useState<string | null>(null);

  const [contacts, setContacts] = useState<any[]>([]);
  const [contactsLoading, setContactsLoading] = useState(true);
  const [contactsError, setContactsError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setRegistrationsLoading(true);
    setRegistrationsError(null);
    setContactsLoading(true);
    setContactsError(null);

    try {
      const regData = await fetchRegistrations();
      setRegistrations(regData);
    } catch (err: any) {
      console.error('Failed to load registrations:', err);
      setRegistrationsError(err.message || 'Failed to load registrations');
    } finally {
      setRegistrationsLoading(false);
    }

    try {
      const contactData = await fetchContacts();
      setContacts(contactData);
    } catch (err: any) {
      console.error('Failed to load contacts:', err);
      setContactsError(err.message || 'Failed to load contact messages');
    } finally {
      setContactsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user, loadData]);

  const handleLogout = async () => {
    if (!auth) return;
    setLoggingOut(true);
    try {
      await signOut(auth);
      toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
      router.push('/login');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Logout Failed', description: 'An error occurred while logging out.' });
      setLoggingOut(false);
    }
  };

  if (userLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const getCourseTitle = (slug: string) => {
    const course = courses.find((c) => c.slug === slug);
    return course ? course.title : slug;
  };

  const formatDate = (dateVal: any) => {
    if (!dateVal) return 'N/A';
    try {
      const d = typeof dateVal?.toDate === 'function' ? dateVal.toDate() : new Date(dateVal);
      return isNaN(d.getTime()) ? 'N/A' : format(d, 'PPP');
    } catch {
      return 'N/A';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <BackButton />
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-12">
        <div>
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl">
            Admin Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
            {user ? `Welcome, ${user.email}.` : 'Manage registrations and messages.'}
          </p>
        </div>
        <div className="flex gap-2 self-start md:self-center">
          <Button variant="outline" onClick={loadData} disabled={registrationsLoading || contactsLoading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${registrationsLoading || contactsLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button variant="destructive" onClick={handleLogout} disabled={loggingOut}>
            {loggingOut ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <LogOut className="mr-2 h-4 w-4" />
            )}
            Logout
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Registrations Card */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>
              {registrationsLoading
                ? 'Loading registrations...'
                : registrationsError
                ? 'Unable to load registrations from the database.'
                : registrations.length > 0
                ? `Showing ${registrations.length} registrations.`
                : 'No registrations yet.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrationsLoading ? (
              <div className="flex items-center justify-center py-12 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mr-3 text-primary" />
                <span>Fetching registrations from database...</span>
              </div>
            ) : registrationsError ? (
              <div className="p-6 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3">
                <AlertCircle className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Error Loading Registrations</p>
                  <p className="text-sm">{registrationsError}</p>
                </div>
              </div>
            ) : registrations.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {registrations.map((reg: any) => (
                  <AccordionItem value={String(reg.id)} key={reg.id}>
                    <AccordionTrigger>
                      <div className="flex justify-between w-full pr-4">
                        <div className="text-left">
                          <p className="font-semibold">
                            {reg.studentName} ({reg.studentAge})
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {getCourseTitle(reg.course)}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground self-center">
                          {formatDate(reg.createdAt)}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-secondary/50 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                        <p>
                          <span className="font-semibold text-primary">Email:</span> {reg.email}
                        </p>
                        <p>
                          <span className="font-semibold text-primary">Phone:</span> {reg.phone}
                        </p>
                        <p>
                          <span className="font-semibold text-primary">Country:</span> {reg.country}
                        </p>
                        <p>
                          <span className="font-semibold text-primary">Gender:</span>{' '}
                          <span className="capitalize">{reg.gender}</span>
                        </p>
                        <p>
                          <span className="font-semibold text-primary">Schedule:</span>{' '}
                          {reg.classDays}
                        </p>
                        <p>
                          <span className="font-semibold text-primary">Tutor:</span>{' '}
                          <span className="capitalize">{reg.tutorPreference}</span>
                        </p>
                        {reg.message && (
                          <p className="md:col-span-2 pt-2 mt-2 border-t border-border">
                            <span className="font-semibold text-primary">Message:</span>{' '}
                            {reg.message}
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>No registrations have been submitted yet.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Form Messages Card */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Messages</CardTitle>
            <CardDescription>
              {contactsLoading
                ? 'Loading contact messages...'
                : contactsError
                ? 'Unable to load messages from the database.'
                : contacts.length > 0
                ? `Showing ${contacts.length} messages.`
                : 'No messages yet.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {contactsLoading ? (
              <div className="flex items-center justify-center py-12 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mr-3 text-primary" />
                <span>Fetching contact messages from database...</span>
              </div>
            ) : contactsError ? (
              <div className="p-6 bg-destructive/10 text-destructive rounded-xl flex items-center gap-3">
                <AlertCircle className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Error Loading Messages</p>
                  <p className="text-sm">{contactsError}</p>
                </div>
              </div>
            ) : contacts.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {contacts.map((msg: any) => (
                  <AccordionItem value={String(msg.id)} key={msg.id}>
                    <AccordionTrigger>
                      <div className="flex justify-between w-full pr-4">
                        <div className="text-left">
                          <p className="font-semibold">{msg.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            {msg.name} - {msg.email}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground self-center">
                          {formatDate(msg.createdAt)}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 bg-secondary/50 rounded-md">
                      {msg.message}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>No contact messages have been submitted yet.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
