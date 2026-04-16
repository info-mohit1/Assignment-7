import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

   const statusConfig = {
    overdue: "bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]",
    "almost due": "bg-yellow-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.3)]",
    onTrack: "bg-green-700 text-white shadow-[0_0_15px_rgba(21,128,61,0.3)]",
  };

  const currentStatusStyle = statusConfig[status] || statusConfig.onTrack;

  return (
    <Link to={`/friend/${id}`} className="block group">
      <div className="relative bg-[#1e293b] rounded-3xl p-6 text-center transition-all duration-500 border border-slate-700/50 group-hover:border-green-500/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] group-hover:-translate-y-2 overflow-hidden">
        
   
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="relative inline-block mb-4">
            <img
              src={picture}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-slate-800 shadow-xl group-hover:scale-110 group-hover:border-green-500/50 transition-all duration-500"
            />
           
            <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-slate-900 ${currentStatusStyle.split(' ')[0]} animate-pulse`}></span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">
            {name}
          </h3>

          <p className="text-slate-400 mb-4 font-medium text-sm">
            {days_since_contact} days ago
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className={`inline-block px-6 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 group-hover:tracking-[0.3em] ${currentStatusStyle}`}>
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;