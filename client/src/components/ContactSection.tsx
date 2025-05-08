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

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_mh2nlgg"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_d9bcf0b"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "pGHxboZ8DmnGbLVcm"; // Replace with your EmailJS public key
const YOUR_EMAIL = "pathanfaizankhan0123@gmail.com"; // Your email address

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters for EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_email: YOUR_EMAIL,
        subject: data.subject,
        message: data.message,
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("Email sent successfully:", response);
      
      // Show success notification
      toast({
        title: "Message sent!",
        description: "Thank you for your message! I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      
      // Show error notification
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding gradient-bg"
    >
      <div className="mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-3xl font-bold font-poppins text-center mb-16"
        >
          <span className="gradient-text">Get In Touch</span>
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="bg-[#2D2D2D] rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold font-poppins mb-6">
              Send Me a Message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your name" 
                          className="bg-[#1A1A1A] border-none text-white" 
                          {...field} 
                        />
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
                      <FormLabel className="text-gray-300">Your Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your email" 
                          className="bg-[#1A1A1A] border-none text-white" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter subject" 
                          className="bg-[#1A1A1A] border-none text-white" 
                          {...field} 
                        />
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
                      <FormLabel className="text-gray-300">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          className="bg-[#1A1A1A] border-none text-white min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#6366F1] hover:bg-[#6366F1]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="bg-[#2D2D2D] rounded-xl p-8 shadow-lg mb-8"
            >
              <h3 className="text-xl font-bold font-poppins mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">{info.title}</h4>
                      {info.isLink ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6366F1] hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="bg-[#2D2D2D] rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold font-poppins mb-6">Follow Me</h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1A1A1A] rounded-lg flex items-center justify-center hover:bg-[#6366F1] transition duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
