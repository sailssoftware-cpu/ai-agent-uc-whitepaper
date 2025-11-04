import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const roiData = [
  { name: 'Yr0', investment: 1.5, returns: 0 },
  { name: 'Yr1', investment: 1.5, returns: 7 },
  { name: 'Yr2', investment: 1.5, returns: 14.5 },
  { name: 'Yr3', investment: 1.5, returns: 22 },
];

const LegendItem = ({ color, text, value, percent }: { color: string, text: string, value: string, percent: string }) => (
    <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
            <div className={`w-3 h-3 rounded-sm mr-2 ${color}`}></div>
            <span className="text-sm text-slate-600">{text}</span>
        </div>
        <div className="text-sm text-right">
             <span className="font-bold text-slate-800">{value}</span>
             <span className="text-slate-500 ml-2">({percent})</span>
        </div>
    </div>
);


export const RoiChart: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-bold text-center text-slate-800 mb-2">
        FIGURE 6: 3-Year ROI Projection
      </h4>
       <p className="text-sm text-center text-slate-500 mb-6">INVESTMENT vs RETURNS (Cumulative)</p>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={roiData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <defs>
                <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00b9ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00b9ff" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#064a70" stopOpacity={0.7}/>
                    <stop offset="95%" stopColor="#064a70" stopOpacity={0}/>
                </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="M" domain={[0, 25]} tickFormatter={(value) => `$${value}M`} />
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}M`} />
          <Legend />
          <Area type="monotone" dataKey="returns" stroke="#00b9ff" fillOpacity={1} fill="url(#colorReturns)" />
          <Area type="monotone" dataKey="investment" stroke="#064a70" fillOpacity={1} fill="url(#colorInvestment)" />
        </AreaChart>
      </ResponsiveContainer>
       <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h5 className="font-bold text-slate-800 text-center mb-2">BREAKDOWN OF 3-YEAR RETURNS:</h5>
            <div className="divide-y divide-slate-200">
                <LegendItem color="bg-[#00b9ff]" text="Operational Savings" value="$5.25M - $5.64M" percent="26%" />
                <LegendItem color="bg-[#064a70]" text="Fraud Loss Avoidance" value="$12.75M" percent="60%" />
                <LegendItem color="bg-slate-400" text="Revenue Growth" value="$3M - $5M" percent="14%" />
            </div>
            <div className="mt-4 pt-3 border-t-2 border-slate-300 text-center">
                <p className="text-sm"><span className="font-bold">TOTAL RETURNS:</span> $21M - $23.4M</p>
                <p className="text-sm"><span className="font-bold">ROI:</span> 1,200-1,400% | <span className="font-bold">Payback Period:</span> 4-6 Months</p>
            </div>
       </div>
    </div>
  );
};