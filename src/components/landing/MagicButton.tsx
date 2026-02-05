 import { motion } from "framer-motion";
 import { MessageCircle, Sparkles } from "lucide-react";
 
 const MagicButton = () => {
   return (
     <section className="relative py-24 md:py-32 overflow-hidden">
       {/* Background glow */}
       <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[500px] h-[500px] bg-magic/10 rounded-full blur-3xl" />
       </div>
 
       <div className="container relative z-10 px-4 md:px-6">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           {/* Section header */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
             <Sparkles className="w-4 h-4 text-magic" />
             <span className="text-sm text-muted-foreground">Experience the Future</span>
           </div>
 
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
             See AI Automation <span className="text-magic">in Action</span>
           </h2>
           <p className="text-muted-foreground max-w-xl mx-auto mb-12">
             Talk to our AI agent right now and experience what autonomous voice technology can do for your business.
           </p>
 
           {/* Magic button */}
           <motion.button
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-magic text-magic-foreground font-semibold text-lg pulse-glow transition-all hover:brightness-110"
           >
             <MessageCircle className="w-6 h-6" />
             Talk to our AI Agent now
             
             {/* Animated ring */}
             <span className="absolute inset-0 rounded-full border-2 border-magic animate-ping opacity-30" />
           </motion.button>
 
           {/* Disclaimer */}
           <p className="text-xs text-muted-foreground mt-6">
             No signup required • Available 24/7
           </p>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default MagicButton;