import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaFacebookF />, href: "#", label: "Facebook" },
    { icon: <FaXTwitter />, href: "#", label: "X" },
  ];

  return (
    <footer className="bg-[#052e16] text-white mt-16 relative overflow-hidden">
     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-5xl font-black mb-4 tracking-tighter hover:scale-105 transition-transform duration-500 cursor-default">
          Keen<span className="text-green-400">Keeper</span>
        </h2>
        
        <p className="text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed italic">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-green-500/80 mb-6">
            Social Connections
          </h3>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="group relative bg-white text-slate-950 p-4 rounded-full transition-all duration-300 hover:-translate-y-2 hover:bg-green-400 hover:shadow-[0_10px_25px_rgba(74,222,128,0.3)] active:scale-90"
              >
                <span className="text-2xl block transition-transform duration-300 group-hover:rotate-[12deg]">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-green-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400 font-medium">
          <p className="hover:text-slate-200 transition-colors">
            © 2026 <span className="text-green-500">KeenKeeper</span>. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative group transition-colors hover:text-white"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;