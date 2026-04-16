import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-4 overflow-hidden relative">
      
      
      <div className="absolute w-[300px] h-[300px] bg-green-900/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative text-center z-10">
         
        <h1 className="text-8xl md:text-[12rem] font-black text-green-500 mb-2 select-none animate-float tracking-tighter drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          404
        </h1>
        
        <div className="animate-reveal-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Lost in <span className="text-green-400">Space?</span>
          </h2>
          
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
            The page you are looking for has vanished into the digital void. 
            Don't worry, we can get you back to safety.
          </p>

          <Link
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-green-700 rounded-2xl hover:bg-green-600 hover:shadow-[0_0_40px_rgba(21,128,61,0.5)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;