'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, orderBy, query } from 'firebase/firestore';
import { useAuth, useFirestore } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Loader2, LogOut, Settings } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export default function AdminPage() {
  const { user, loading: userLoading } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [loggingOut, setLoggingOut] = useState(false);

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

  const registrationsQuery = useMemo(
    () =>
      firestore && user
        ? query(collection(firestore, 'registrations'), orderBy('createdAt', 'desc'))
        : null,
    [firestore, user]
  );
  const { data: registrations, loading: registrationsLoading } = useCollection(registrationsQuery);

  const contactsQuery = useMemo(
    () =>
      firestore && user
        ? query(collection(firestore, 'contacts'), orderBy('createdAt', 'desc'))
        : null,
    [firestore, user]
  );
  const { data: contacts, loading: contactsLoading } = useCollection(contactsQuery);

  if (userLoading || registrationsLoading || contactsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }
  
  const getCourseTitle = (slug: string) => {
    const course = courses.find(c => c.slug === slug);
    return course ? course.title : slug;
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Settings
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
        <Card>
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>
              {registrations ? `Showing ${registrations.length} registrations.` : 'No registrations yet.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {registrations && registrations.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                    {registrations.map((reg: any) => (
                        <AccordionItem value={reg.id} key={reg.id}>
                            <AccordionTrigger>
                                <div className="flex justify-between w-full pr-4">
                                    <div className="text-left">
                                        <p className="font-semibold">{reg.studentName} ({reg.studentAge})</p>
                                        <p className="text-sm text-muted-foreground">{getCourseTitle(reg.course)}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground self-center">
                                        {reg.createdAt ? format(reg.createdAt.toDate(), 'PPP') : 'N/A'}
                                    </p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-secondary/50 rounded-md">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                    <p><span className="font-semibold text-primary">Email:</span> {reg.email}</p>
                                    <p><span className="font-semibold text-primary">Phone:</span> {reg.phone}</p>
                                    <p><span className="font-semibold text-primary">Country:</span> {reg.country}</p>
                                    <p><span className="font-semibold text-primary">Gender:</span> <span className="capitalize">{reg.gender}</span></p>
                                    <p><span className="font-semibold text-primary">Schedule:</span> {reg.classDays}</p>
                                    <p><span className="font-semibold text-primary">Tutor:</span> <span className="capitalize">{reg.tutorPreference}</span></p>
                                    {reg.message && (
                                        <p className="md:col-span-2 pt-2 mt-2 border-t border-border"><span className="font-semibold text-primary">Message:</span> {reg.message}</p>
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

        <Card>
          <CardHeader>
            <CardTitle>Contact Form Messages</CardTitle>
            <CardDescription>
              {contacts ? `Showing ${contacts.length} messages.` : 'No messages yet.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {contacts && contacts.length > 0 ? (
                 <Accordion type="single" collapsible className="w-full">
                    {contacts.map((msg: any) => (
                        <AccordionItem value={msg.id} key={msg.id}>
                            <AccordionTrigger>
                                <div className="flex justify-between w-full pr-4">
                                    <div className="text-left">
                                        <p className="font-semibold">{msg.subject}</p>
                                        <p className="text-sm text-muted-foreground">{msg.name} - {msg.email}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground self-center">
                                         {msg.createdAt ? format(msg.createdAt.toDate(), 'PPP') : 'N/A'}
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
