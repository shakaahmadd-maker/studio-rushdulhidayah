
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

export default function AdminPage() {
  const { user, loading: userLoading } = useUser();
  const firestore = useFirestore();

  const registrationsQuery = firestore ? query(collection(firestore, 'registrations'), orderBy('createdAt', 'desc')) : null;
  const { data: registrations, loading: registrationsLoading } = useCollection(registrationsQuery);

  if (userLoading || registrationsLoading) {
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
          View trial class registrations submitted through the website.
        </p>
      </div>

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
    </div>
  );
}
