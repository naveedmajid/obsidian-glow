 import { Twitter, Linkedin, Github, Mail } from "lucide-react";
 
 const footerLinks = [
   { label: "Case Studies", href: "#" },
   { label: "Privacy Policy", href: "#" },
   { label: "Terms of Service", href: "#" },
 ];
 
 const socialLinks = [
   { icon: Twitter, href: "#", label: "Twitter" },
   { icon: Linkedin, href: "#", label: "LinkedIn" },
   { icon: Github, href: "#", label: "GitHub" },
   { icon: Mail, href: "#", label: "Email" },
 ];
 
 const Footer = () => {
   return (
     <footer className="border-t border-border/50 py-12">
       <div className="container px-4 md:px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           {/* Logo */}
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
               <span className="text-primary-foreground font-bold text-sm">AI</span>
             </div>
             <span className="font-semibold text-lg">[Your Agency Name]</span>
           </div>
 
           {/* Links */}
           <nav className="flex items-center gap-8">
             {footerLinks.map((link) => (
               <a
                 key={link.label}
                 href={link.href}
                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
               >
                 {link.label}
               </a>
             ))}
           </nav>
 
           {/* Social icons */}
           <div className="flex items-center gap-4">
             {socialLinks.map((social) => (
               <a
                 key={social.label}
                 href={social.href}
                 aria-label={social.label}
                 className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
               >
                 <social.icon className="w-5 h-5" />
               </a>
             ))}
           </div>
         </div>
 
         {/* Copyright */}
         <div className="text-center mt-10 pt-8 border-t border-border/50">
           <p className="text-sm text-muted-foreground">
             © {new Date().getFullYear()} [Your Agency Name]. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;