
'use client';

import { useUser } from '@/firebase/auth/use-user';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, orderBy, query } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';
import { useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function AdminPage() {
  const { user, loading: userLoading } = useUser();
  const firestore = useFirestore();

  const registrationsQuery = useMemo(
    () =>
      firestore
        ? query(collection(firestore, 'registrations'), orderBy('createdAt', 'desc'))
        : null,
    [firestore]
  );
  const { data: registrations, loading: registrationsLoading } = useCollection(registrationsQuery);

  const contactsQuery = useMemo(
    () =>
      firestore
        ? query(collection(firestore, 'contacts'), orderBy('createdAt', 'desc'))
        : null,
    [firestore]
  );
  const { data: contacts, loading: contactsLoading } = useCollection(contactsQuery);

  if (userLoading || registrationsLoading || contactsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Admin Dashboard
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          View trial class registrations and contact messages submitted through the website.
        </p>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Contact Email</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Submitted On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrations && registrations.map((reg: any) => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium">{reg.studentName} ({reg.studentAge})</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{reg.course.replace(/-/g, ' ')}</Badge>
                    </TableCell>
                    <TableCell>{reg.email}</TableCell>
                    <TableCell>{reg.country}</TableCell>
                    <TableCell>
                      {reg.createdAt ? format(reg.createdAt.toDate(), 'PPP') : 'N/A'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
              {registrations && registrations.length === 0 && (
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
