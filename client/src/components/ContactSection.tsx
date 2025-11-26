import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../lib/motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FloatingShapes from "./effects/FloatingShapes";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/pathan-07" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/pathan-mo-faizan-khan" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/its_khan_070" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding relative overflow-hidden bg-background">
      <FloatingShapes />
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left Column: Info */}
          <motion.div variants={fadeIn("right", "tween", 0.1, 1)} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6">
                Let's work <br />
                <span className="gradient-text">together.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group modern-card p-4 rounded-xl">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email me at</p>
                  <a href="mailto:pathanfaizankhan0123@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    pathanfaizankhan0123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group modern-card p-4 rounded-xl">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="text-lg font-medium">Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 rounded-2xl modern-card">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <Input
                  {...register("name")}
                  placeholder="John Doe"
                  className="bg-background/50 border-border focus:border-primary h-12 rounded-xl"
                />
                {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <Input
                  {...register("email")}
                  placeholder="john@example.com"
                  className="bg-background/50 border-border focus:border-primary h-12 rounded-xl"
                />
                {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  className="bg-background/50 border-border focus:border-primary min-h-[150px] rounded-xl resize-none"
                />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl btn-primary text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
