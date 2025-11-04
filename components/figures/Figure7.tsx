import React from 'react';

const comparisonData = [
  {
    name: 'MANUAL',
    cost: '$18.75',
    time: '5-10 days',
    errors: '15-20%',
    fraud: '35%',
    score: 20,
    color: 'bg-slate-400'
  },
  {
    name: 'HYBRID',
    cost: '$12.50',
    time: '2-3 days',
    errors: '8-10%',
    fraud: '55%',
    score: 55,
    color: 'bg-[#00b9ff99]' // #00b9ff with ~60% opacity
  },
  {
    name: 'AI AGENT',
    cost: '$2.50',
    time: '5 minutes',
    errors: '<2%',
    fraud: '95%',
    score: 98,
    color: 'bg-[#00b9ff]'
  }
];

const ComparisonColumn = ({ data }: { data: typeof comparisonData[0] }) => {
    return (
        <div className="flex flex-col items-center p-4 border border-slate-200 rounded-lg bg-white shadow-sm h-full">
            <h5 className="text-lg font-bold text-slate-800 mb-4">{data.name}</h5>
            <div className="w-full space-y-3 text-center">
                <p><span className="font-semibold">Cost:</span> {data.cost}</p>
                <p><span className="font-semibold">Time:</span> {data.time}</p>
                <p><span className="font-semibold">Errors:</span> {data.errors}</p>
                <p><span className="font-semibold">Fraud Detection:</span> {data.fraud}</p>
            </div>
            <div className="mt-auto pt-4 w-full">
                 <p className="text-center font-bold text-sm text-slate-500 mb-2">Efficiency Score: {data.score}/100</p>
                <div className="w-full bg-slate-200 rounded-full h-4">
                    <div
                        className={`${data.color} h-4 rounded-full transition-all duration-500`}
                        style={{ width: `${data.score}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export const Figure7: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-bold text-center text-slate-800 mb-6">
        FIGURE 7: Cost Per Verification Comparison
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {comparisonData.map(item => (
            <div key={item.name}>
              <ComparisonColumn data={item} />
            </div>
        ))}
      </div>
       <div className="mt-6 p-4 bg-[#00b9ff]/10 rounded-lg border border-[#00b9ff]/20 text-center">
            <h5 className="font-bold text-[#064a70] text-md mb-2">Annual Cost (100K verifications):</h5>
            <div className="text-sm text-slate-700 space-y-1">
                <p>Manual: <span className="font-semibold">$1,875,000</span></p>
                <p>Hybrid: <span className="font-semibold">$1,250,000</span> (33% savings)</p>
                <p>AI Agent: <span className="font-semibold">$250,000</span> (87% savings)</p>
            </div>
       </div>
    </div>
  );
};