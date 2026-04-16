const Banner = () => {
  return (
    <div className="text-center py-20 relative overflow-hidden page-reveal">
      
       
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent -z-10"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight text-white leading-tight">
          Friends to keep <span className="text-green-500">close</span> in your life
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend,
          and nurture the relationships that matter most.
        </p>

        <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-green-800 rounded-2xl hover:bg-green-700 hover:shadow-[0_0_30px_rgba(22,101,52,0.5)] active:scale-95 overflow-hidden">
          
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          
          <span className="relative flex items-center gap-2">
            <span className="text-xl group-hover:rotate-90 transition-transform duration-300">+</span>
            Add a Friend
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;