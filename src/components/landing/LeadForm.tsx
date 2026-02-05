 import { motion } from "framer-motion";
 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { ArrowRight, Loader2 } from "lucide-react";
 import { toast } from "sonner";
 
 const LeadForm = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     bottleneck: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1500));
     
     toast.success("Thanks! We'll be in touch within 24 hours.");
     setFormData({ name: "", email: "", bottleneck: "" });
     setIsSubmitting(false);
   };
 
   return (
     <section className="relative py-24 md:py-32" id="contact">
       <div className="container px-4 md:px-6">
         <div className="max-w-2xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-center mb-12"
           >
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
               Ready to <span className="gradient-text">Scale?</span>
             </h2>
             <p className="text-muted-foreground">
               Tell us about your business and we'll show you what's possible.
             </p>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10">
               <div className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium mb-2">
                     Name
                   </label>
                   <Input
                     id="name"
                     placeholder="John Smith"
                     value={formData.name}
                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                     required
                     className="bg-card border-glass-border focus:border-primary"
                   />
                 </div>
 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium mb-2">
                     Work Email
                   </label>
                   <Input
                     id="email"
                     type="email"
                     placeholder="john@company.com"
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     required
                     className="bg-card border-glass-border focus:border-primary"
                   />
                 </div>
 
                 <div>
                   <label htmlFor="bottleneck" className="block text-sm font-medium mb-2">
                     What is your biggest business bottleneck?
                   </label>
                   <Textarea
                     id="bottleneck"
                     placeholder="Tell us about the manual processes slowing down your growth..."
                     value={formData.bottleneck}
                     onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                     required
                     rows={4}
                     className="bg-card border-glass-border focus:border-primary resize-none"
                   />
                 </div>
 
                 <Button
                   type="submit"
                   variant="glow"
                   size="lg"
                   className="w-full group"
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                       Sending...
                     </>
                   ) : (
                     <>
                       Get Your Free Audit
                       <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                     </>
                   )}
                 </Button>
               </div>
 
               <p className="text-xs text-center text-muted-foreground mt-6">
                 By submitting, you agree to our privacy policy. No spam, ever.
               </p>
             </form>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default LeadForm;