import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FaBoxArchive, FaTrash } from "react-icons/fa6";
import { LuAlarmClockCheck } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { getTimelineData, saveTimelineData } from "../utils/localStorage";

// Icons
import callIcon from "../assets/icons/call.png";
import textIcon from "../assets/icons/text.png";
import videoIcon from "../assets/icons/video.png";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("/friends.json");
        const data = await res.json();
        const foundFriend = data.find((item) => item.id === Number(id));
        setFriend(foundFriend);
      } catch (error) {
        console.error("Load failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  const statusStyles = useMemo(() => ({
    overdue: "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]",
    "almost due": "bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]",
    default: "bg-green-600 shadow-[0_0_15px_rgba(22,163,74,0.4)]"
  }), []);

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
    };

    const updatedTimeline = [newEntry, ...getTimelineData()];
    saveTimelineData(updatedTimeline);
    
    toast.success(`${type} recorded!`, {
      icon: '✅',
      style: { borderRadius: '10px', background: '#1E293B', color: '#fff' }
    });
  };

  if (loading) return (
    <div className="min-h-[60vh] flex items-center justify-center animate-pulse text-slate-400 text-xl">
      Retrieving friendship data...
    </div>
  );

  if (!friend) return (
    <div className="min-h-[60vh] flex items-center justify-center text-red-400 text-xl font-bold">
      404: Friend Not Found
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 page-reveal">
      
       
      <div className="space-y-4">
        <div className="bg-[#121A2B]/80 backdrop-blur-xl border border-[#25324A] rounded-3xl p-8 text-center transition-all hover:border-blue-500/30">
          <div className="relative inline-block group">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-[#1E293B] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping-slow"></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">{friend.name}</h2>

          <div className="mb-6">
            <span className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${statusStyles[friend.status] || statusStyles.default}`}>
              {friend.status}
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {friend.tags.map((tag, index) => (
              <span key={index} className="bg-[#1E293B] text-[#7CFFB2] px-3 py-1 rounded-lg text-xs font-medium border border-[#25324A]">
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-slate-400 italic mb-4 leading-relaxed">"{friend.bio}"</p>
          <p className="text-blue-400 text-sm font-medium">{friend.email}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {[
            { icon: <LuAlarmClockCheck />, text: "Snooze 2 Weeks", color: "hover:bg-blue-500" },
            { icon: <FaBoxArchive />, text: "Archive", color: "hover:bg-slate-700" }
          ].map((btn, i) => (
            <button key={i} className={`w-full bg-[#1E293B] border border-[#25324A] text-white rounded-2xl py-4 flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 ${btn.color}`}>
              {btn.icon} {btn.text}
            </button>
          ))}
          
          <button className="w-full bg-transparent border border-red-500/50 text-red-400 rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95">
            <FaTrash /> Delete Friend
          </button>
        </div>
      </div>

      {/* RIGHT SIDE: Stats & Check-In */}
      <div className="lg:col-span-2 space-y-6">
        
        {/* STATS TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Days Since Contact", val: friend.days_since_contact, highlight: "text-emerald-400" },
            { label: "Goal (Days)", val: friend.goal, highlight: "text-blue-400" },
            { label: "Next Due", val: friend.next_due_date, highlight: "text-purple-400" }
          ].map((stat, i) => (
            <div key={i} className="bg-[#121A2B] border border-[#25324A] rounded-2xl p-6 text-center hover:translate-y-[-4px] transition-transform">
              <h3 className={`text-4xl font-black mb-1 ${stat.highlight}`}>{stat.val}</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* RELATIONSHIP GOAL */}
        <div className="bg-gradient-to-r from-[#121A2B] to-[#1E293B] border border-[#25324A] rounded-3xl p-8 flex items-center justify-between shadow-xl">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Relationship Goal</h3>
            <p className="text-slate-400">
              Target: <span className="text-[#7CFFB2] font-bold">Every {friend.goal} days</span>
            </p>
          </div>
          <button className="px-6 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
            Edit Goal
          </button>
        </div>

        {/* QUICK CHECK-IN */}
        <div className="bg-[#121A2B] border border-[#25324A] rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Quick Check-In
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: "Call", icon: callIcon, shadow: "hover:shadow-green-500/20" },
              { type: "Text", icon: textIcon, shadow: "hover:shadow-blue-500/20" },
              { type: "Video", icon: videoIcon, shadow: "hover:shadow-purple-500/20" }
            ].map((action) => (
              <button
                key={action.type}
                onClick={() => handleCheckIn(action.type)}
                className={`group bg-[#0F1B2D] border border-[#25324A] rounded-2xl py-10 flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:bg-[#1E293B] ${action.shadow} hover:border-blue-500/40`}
              >
                <div className="relative">
                  <img src={action.icon} alt={action.type} className="w-14 h-14 object-contain group-hover:scale-125 transition-transform duration-500 ease-out" />
                  <div className="absolute -inset-2 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-lg font-bold text-slate-300 group-hover:text-white">{action.type}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;