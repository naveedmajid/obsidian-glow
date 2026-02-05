 import { motion } from "framer-motion";
 import { Phone, Users, Workflow } from "lucide-react";
 
 const services = [
   {
     icon: Phone,
     title: "AI Voice Assistants",
     description: "Deploy intelligent voice agents powered by Retell AI that handle calls, qualify leads, and book appointments 24/7.",
     tech: "Retell AI Integration",
     glowClass: "glow-cyan",
     iconColor: "text-primary",
   },
   {
     icon: Users,
     title: "Autonomous Lead Gen",
     description: "Automated prospecting engines using Clay & Apollo that find, enrich, and engage your ideal customers at scale.",
     tech: "Clay & Apollo",
     glowClass: "glow-purple",
     iconColor: "text-secondary",
   },
   {
     icon: Workflow,
     title: "Workflow Automation",
     description: "Custom n8n automations that connect your tools, eliminate manual tasks, and streamline your entire operation.",
     tech: "n8n Workflows",
     glowClass: "glow-cyan",
     iconColor: "text-primary",
   },
 ];
 
 const ServiceGrid = () => {
   return (
     <section className="relative py-24 md:py-32">
       <div className="container px-4 md:px-6">
         {/* Section header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
             Our <span className="gradient-text">Services</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             End-to-end AI automation solutions designed to scale your revenue engine
           </p>
         </motion.div>
 
         {/* Service cards grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               whileHover={{ y: -8, transition: { duration: 0.3 } }}
               className="group"
             >
               <div className={`glass-card p-8 h-full transition-all duration-300 hover:${service.glowClass}`}>
                 {/* Icon */}
                 <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 ${service.iconColor} group-hover:scale-110 transition-transform`}>
                   <service.icon className="w-7 h-7" />
                 </div>
 
                 {/* Content */}
                 <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                 <p className="text-muted-foreground mb-4 leading-relaxed">
                   {service.description}
                 </p>
 
                 {/* Tech tag */}
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card text-sm">
                   <span className={`w-1.5 h-1.5 rounded-full ${service.iconColor === 'text-primary' ? 'bg-primary' : 'bg-secondary'}`} />
                   {service.tech}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ServiceGrid;