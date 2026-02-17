import { RegisterForm } from '@/components/forms/RegisterForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader className="text-center p-8">
              <h1 className="text-4xl font-headline font-bold text-primary">
                Register for a Free Trial
              </h1>
              <CardDescription className="text-lg pt-2">
                Take the first step on your Quranic journey. Fill out the form below to book your free trial class.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
