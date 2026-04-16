import { useEffect, useState, useMemo } from "react";
import { getTimelineData } from "../utils/localStorage";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const timeline = getTimelineData() || [];

   
    const counts = {
      Call: timeline.filter((i) => i.type === "Call").length,
      Text: timeline.filter((i) => i.type === "Text").length,
      Video: timeline.filter((i) => i.type === "Video").length,
    };

    const formattedData = Object.entries(counts).map(([name, value]) => ({
      name,
      value,
    }));

    setChartData(formattedData);
  }, []);

  const COLORS = ["#10b981", "#3b82f6", "#8b5cf6"];  

 
  const hasData = useMemo(() => chartData.some((item) => item.value > 0), [chartData]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 page-reveal">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight">
        Friendship <span className="text-blue-500">Analytics</span>
      </h1>

      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Interaction <span className="text-emerald-400">Overview</span>
          </h2>
          {hasData && (
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm border border-emerald-500/20">Live Stats</span>
            </div>
          )}
        </div>

        {!hasData ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-500">
             <div className="w-16 h-16 bg-slate-800 rounded-full mb-4 flex items-center justify-center text-2xl">📊</div>
             <p className="text-lg italic">No interaction data available yet.</p>
          </div>
        ) : (
          <div className="w-full h-[450px] animate-chart-entry">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}  
                  outerRadius={140}
                  paddingAngle={8}
                  stroke="none"
                  animationBegin={200}
                  animationDuration={1500}
                  labelLine={false}
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #334155', 
                    borderRadius: '12px',
                    color: '#fff' 
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-slate-300 font-medium ml-2">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;