import { useEffect, useState, useMemo } from "react";
import { getTimelineData } from "../utils/localStorage";
import { FaPhone, FaMessage, FaVideo } from "react-icons/fa6";

const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const data = getTimelineData();
    setEntries(data || []);
  }, []);

  
  const icons = {
    Call: <FaPhone className="text-green-400 text-2xl" />,
    Text: <FaMessage className="text-blue-400 text-2xl" />,
    Video: <FaVideo className="text-purple-400 text-2xl" />,
  };

  
  const listToDisplay = useMemo(() => {
    return activeFilter === "All"
      ? entries
      : entries.filter((item) => item.type === activeFilter);
  }, [activeFilter, entries]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
        Activity <span className="text-blue-500">Log</span>
      </h1>

      <div className="mb-10">
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="bg-slate-900 text-white border border-slate-700 rounded-xl px-6 py-3.5 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer shadow-xl"
        >
          <option value="All">All Entries</option>
          <option value="Call">Phone Calls</option>
          <option value="Text">Messages</option>
          <option value="Video">Video Sessions</option>
        </select>
      </div>

      <div className="grid gap-4">
        {listToDisplay.length === 0 ? (
          <div className="bg-slate-800/40 border border-dashed border-slate-700 rounded-3xl p-16 text-center text-slate-500 text-lg">
            No records found.
          </div>
        ) : (
          listToDisplay.map((item, index) => (
            <div
              key={item.id || index}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.4)] animate-slide-up"
            >
              <div className="bg-slate-900/80 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {icons[item.type] || icons.Video}
              </div>

              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  {new Date(item.date).toLocaleDateString('en-US', {
                    day: '2-digit', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>

              <div className="text-slate-600 group-hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;