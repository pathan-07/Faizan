import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { contactInfo, socialLinks } from "../lib/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Send } from "lucide-react";
import FloatingShapes from "./effects/FloatingShapes";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          to_name: "Faizan Khan", // Your Name
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="section-padding gradient-bg relative">
      <FloatingShapes />
      <div className="section-container relative z-10">
        <motion.div variants={staggerContainer(0.1, 0.2)} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <motion.h2 variants={fadeIn("up", "tween", 0.1, 1)} className="text-responsive-xl font-bold font-poppins text-center mb-16">
            <span className="gradient-text">Get In Touch</span>
          </motion.h2>

          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="modern-card lg:p-12 p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side: Contact Info */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4">Let's build something great.</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance projects and open to discussing new opportunities. Feel free to reach out.
              </p>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center gap-4 group">
                    <div className="bg-muted p-3 rounded-lg transition-colors duration-300 group-hover:bg-primary/20">
                      {React.isValidElement(info.icon) 
                        ? React.cloneElement(info.icon as React.ReactElement, { className: "w-5 h-5 text-primary" })
                        : info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.isLink ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto">
                 <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                 <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted rounded-lg text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl><Input type="email" placeholder="john.doe@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl><Input placeholder="Project Inquiry" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl><Textarea placeholder="Hi Faizan, I'd like to discuss..." className="min-h-[120px]" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
