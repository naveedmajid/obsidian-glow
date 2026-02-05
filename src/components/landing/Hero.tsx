 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { ArrowRight, Play } from "lucide-react";
 
 const Hero = () => {
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
       {/* Grid pattern overlay */}
       <div className="absolute inset-0 grid-pattern opacity-30" />
       
       {/* Animated gradient orbs */}
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl float" />
       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl float" style={{ animationDelay: '-3s' }} />
       
       <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto text-center"
         >
           {/* Badge */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
           >
             <span className="w-2 h-2 rounded-full bg-magic animate-pulse" />
             <span className="text-sm text-muted-foreground">AI-Powered Business Automation</span>
           </motion.div>
 
           {/* Main headline */}
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
             <span className="text-foreground">Automate Your Revenue.</span>
             <br />
             <span className="gradient-text">Let AI Handle the Rest.</span>
           </h1>
 
           {/* Subheadline */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
           >
             We build autonomous voice agents and lead generation engines for high-ticket businesses.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4"
           >
             <Button variant="glow" size="lg" className="group">
               Book a Free Audit
               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
             <Button variant="glass" size="lg" className="group">
               <Play className="mr-2 h-4 w-4" />
               Watch Demo
             </Button>
           </motion.div>
 
           {/* Trust indicators */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="mt-16 pt-8 border-t border-border/50"
           >
             <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
             <div className="flex items-center justify-center gap-8 opacity-50">
               <div className="text-xl font-bold tracking-wider">ACME</div>
               <div className="text-xl font-bold tracking-wider">NEXUS</div>
               <div className="text-xl font-bold tracking-wider">APEX</div>
               <div className="text-xl font-bold tracking-wider hidden sm:block">ZENITH</div>
             </div>
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Hero;