import { useMemo } from "react";

const SummaryCards = ({ friends = [] }) => {
 
  const stats = useMemo(() => {
    const total = friends.length;
    const onTrack = friends.filter((f) => f.status === "on-track").length;
    const needAttention = friends.filter((f) => f.status === "overdue").length;
    
    return [
      { label: "Total Friends", value: total, color: "text-blue-400" },
      { label: "On Track", value: onTrack, color: "text-green-400" },
      { label: "Need Attention", value: needAttention, color: "text-red-400" },
      { label: "Interactions This Month", value: 12, color: "text-purple-400" },
    ];
  }, [friends]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="group relative bg-[#121A2B] border border-slate-800 p-8 rounded-2xl text-center transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2 animate-reveal-up"
        >
         
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

          <h2 className={`text-4xl font-black mb-2 transition-transform duration-300 group-hover:scale-110 ${stat.color}`}>
            {stat.value}
          </h2>
          <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;