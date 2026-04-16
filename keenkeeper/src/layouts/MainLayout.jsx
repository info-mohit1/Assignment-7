import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col relative overflow-hidden">
      
       
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

       
      <header className="relative z-50">
        <Navbar />
      </header>

       
      <main className="flex-1 relative z-10 animate-page-entry">
        <Outlet />
      </main>

      
      <footer className="relative z-10 border-t border-slate-900/50">
        <Footer />
      </footer>

    </div>
  );
};

export default MainLayout;