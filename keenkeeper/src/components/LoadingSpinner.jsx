const LoadingSpinner = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-transparent">
      <div className="relative flex items-center justify-center">
        
       
        <div className="absolute w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>

       
        <div className="relative">
          <div className="w-16 h-16 border-[3px] border-slate-800 border-t-green-500 rounded-full animate-spin-slow"></div>
          
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>

      
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-lg font-medium tracking-widest uppercase animate-pulse">
          Loading <span className="text-green-500">Connections</span>
        </p>
        <div className="flex justify-center gap-1 mt-2">
          <span className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-slate-700 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;