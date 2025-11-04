import React from 'react';

const MaturityCard = ({ level, title, items, subtitle }: { level: string, title: string, items: string[], subtitle: string }) => (
    <div className="flex-1 flex flex-col items-center">
        <div className="border-2 border-[#064a70] bg-white rounded-lg p-4 w-full max-w-xs text-center shadow">
            <p className="font-bold text-[#00b9ff]">{level}</p>
            <h5 className="text-lg font-bold text-slate-800 mb-2">{title}</h5>
            <ul className="text-sm text-slate-600 list-inside">
                {items.map((item, index) => <li key={index}>• {item}</li>)}
            </ul>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-500">{subtitle}</p>
    </div>
);

const Arrow = () => (
    <div className="flex items-center justify-center mx-4 text-slate-400 font-bold text-2xl hidden md:flex">→</div>
);
const ArrowDown = () => (
    <div className="flex items-center justify-center my-4 text-slate-400 font-bold text-2xl md:hidden">↓</div>
);


export const Figure5: React.FC = () => {
    return (
        <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-center text-slate-800 mb-6">
                FIGURE 5: AI Agent Adoption Maturity Model
            </h4>
            <div className="flex flex-col md:flex-row justify-center items-start mb-8">
                <MaturityCard level="LEVEL 1" title="FOUNDATIONAL" items={["Manual processes", "High error rates", "Reactive fraud"]} subtitle="Current State" />
                <Arrow />
                 <ArrowDown />
                <MaturityCard level="LEVEL 2" title="EMERGING" items={["Pilot programs", "Single use case", "Learning phase"]} subtitle="Initial Deployment" />
            </div>
             <div className="flex justify-center md:hidden my-4">↓</div>
            <div className="flex flex-col md:flex-row justify-center items-start">
                <MaturityCard level="LEVEL 3" title="INTEGRATED" items={["Multi-use cases", "Automated workflows", "Scaled operations"]} subtitle="Production Scale" />
                <Arrow />
                 <ArrowDown />
                <MaturityCard level="LEVEL 4" title="OPTIMIZED" items={["Predictive AI", "Real-time intel", "Self-learning"]} subtitle="Advanced Intelligence" />
            </div>
             <p className="text-center text-sm text-slate-500 mt-6 italic">
              Timeline: 6-18 months depending on organizational complexity
            </p>
        </div>
    );
}