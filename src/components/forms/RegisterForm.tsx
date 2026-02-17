'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { courses } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  studentName: z.string().min(2, { message: 'Student name is required.' }),
  studentAge: z.coerce.number().min(4, { message: 'Student must be at least 4 years old.' }),
  gender: z.enum(['male', 'female'], { required_error: 'Please select a gender.' }),
  country: z.string().min(2, { message: 'Country is required.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  phone: z.string().min(5, { message: 'A valid phone number is required.' }),
  course: z.string({ required_error: 'Please select a course.' }),
  classDays: z.string({ required_error: 'Please select a class schedule.' }),
  tutorPreference: z.enum(['male', 'female', 'any'], { required_error: 'Please select a tutor preference.' }),
  message: z.string().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});

export function RegisterForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: '',
      studentAge: undefined,
      email: '',
      phone: '',
      country: '',
      message: '',
      agreeTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Registration Successful!',
      description: "We've received your request for a trial class and will be in touch shortly.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="studentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student&apos;s Full Name</FormLabel>
                <FormControl><Input placeholder="e.g., John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentAge"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student&apos;s Age</FormLabel>
                <FormControl><Input type="number" placeholder="e.g., 10" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Student&apos;s Gender</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="male" /></FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="female" /></FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent&apos;s Email</FormLabel>
                <FormControl><Input type="email" placeholder="parent@example.com" {...field} /></FormControl>
                <FormDescription>We will use this to contact you.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone / WhatsApp</FormLabel>
                <FormControl><Input placeholder="+1 (555) 123-4567" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

         <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl><Input placeholder="e.g., USA, UK, Canada" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Select a Course</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl><SelectTrigger><SelectValue placeholder="Choose a course for trial" /></SelectTrigger></FormControl>
                    <SelectContent>
                    {courses.map(course => (
                        <SelectItem key={course.id} value={course.slug}>{course.title}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="classDays"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Preferred Schedule</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl><SelectTrigger><SelectValue placeholder="Select class days" /></SelectTrigger></FormControl>
                        <SelectContent>
                            <SelectItem value="3-days">3 Days a Week</SelectItem>
                            <SelectItem value="5-days">5 Days a Week</SelectItem>
                            <SelectItem value="custom">Custom (Discuss with us)</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>

        <FormField
          control={form.control}
          name="tutorPreference"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Tutor Preference</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="male" /></FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="female" /></FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                   <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl><RadioGroupItem value="any" /></FormControl>
                    <FormLabel className="font-normal">Any</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message for Teacher (Optional)</FormLabel>
              <FormControl><Textarea placeholder="Any specific goals or questions?" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="agreeTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to the terms and conditions
                </FormLabel>
                <FormDescription>
                  You agree to our Privacy Policy and to be contacted about your trial class.
                </FormDescription>
                 <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">Book My Free Trial</Button>
      </form>
    </Form>
  );
}
