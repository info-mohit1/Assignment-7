import { NavLink } from "react-router-dom";
import { FaHouse, FaClock, FaChartSimple } from "react-icons/fa6";

const Navbar = () => {
 
  const getNavLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
      isActive
        ? "bg-green-600/10 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
        : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
    }`;

  const navLinks = [
    { path: "/", label: "Home", icon: <FaHouse /> },
    { path: "/timeline", label: "Timeline", icon: <FaClock /> },
    { path: "/stats", label: "Stats", icon: <FaChartSimple /> },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        
        <h1 className="text-2xl font-black tracking-tighter cursor-pointer group">
          <span className="text-purple-500 group-hover:text-purple-400 transition-colors">Keen</span>
          <span className="text-green-500 group-hover:text-green-400 transition-colors ml-1">Keeper</span>
        </h1>

        
        <div className="flex items-center gap-2 md:gap-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={getNavLinkClass}
            >
              <span className="group-hover:scale-110 group-active:scale-90 transition-transform duration-200">
                {link.icon}
              </span>
              <span className="hidden sm:inline">{link.label}</span>
              
               
              <NavLink to={link.path}>
                {({ isActive }) => 
                  isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></span>
                  )
                }
              </NavLink>
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;