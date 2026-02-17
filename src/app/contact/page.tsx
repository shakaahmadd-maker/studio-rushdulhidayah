import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            We&apos;re here to help. Contact us with any questions or for more information about our courses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">Email</CardTitle>
                  <CardDescription>For general inquiries</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:quraneinstitute@gmail.com" className="text-primary hover:underline">
                  quraneinstitute@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">Phone / WhatsApp</CardTitle>
                  <CardDescription>Mon-Sun, 8am-10pm</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+92 339 2008404</p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">Skype</CardTitle>
                  <CardDescription>For live conversations</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                 <p className="text-muted-foreground">quran.e.institute</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card p-4 sm:p-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
                    <CardDescription>We will get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
