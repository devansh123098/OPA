
'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import AnimatedSection from '@/components/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage, type SendContactMessageResponse } from './actions';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name must not exceed 50 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsLoading(true);
    try {
      const response: SendContactMessageResponse = await sendContactMessage(data);
      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: response.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
        if (response.errors) {
          response.errors.forEach(err => {
            form.setError(err.path as keyof ContactFormValues, { message: err.message });
          });
        }
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section className="relative py-16 md:py-20 overflow-hidden bg-black">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center">
            <div className="md:col-span-12 text-center md:text-left">
              <AnimatedSection animationClass="animate-fadeInUp">
                <h1 className="text-4xl font-bold tracking-tight text-white">
                  Contact Us
                </h1>
                <p className="mt-4 text-xl text-gray-100 max-w-2xl mx-auto md:mx-0">
                  Get in touch with the Odisha Pickleball Association. We&apos;d love to hear from you!
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <PageWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={100} animationClass="animate-slideInFromLeft">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
                  <p className="text-muted-foreground">
                    Plot # 2602, Biswanath Nagar,<br />
                    BJB Nagar S.O, BJB Nagar Khordha,<br />
                    Bhubaneswar - 751014, ODISHA
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <a href="mailto:associationodishapickleball@gmail.com" className="text-accent hover:underline">
                    associationodishapickleball@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">+91-700-818-9107</p>
                </div>
                <div className="mt-6 h-80 bg-secondary/30 rounded-md overflow-hidden">
                   <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.486700516498!2d85.84453197590234!3d20.255573381223826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7ceb11a18e3%3A0x4c109fe7278045a2!2sBISWANATH%20NAGAR!5e0!3m2!1sen!2sin!4v1716114278011!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-downgrade"
                      title="Odisha Pickleball Association Office Location"
                    ></iframe>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200} animationClass="animate-slideInFromRight">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message..." rows={4} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </PageWrapper>
    </>
  );
}
