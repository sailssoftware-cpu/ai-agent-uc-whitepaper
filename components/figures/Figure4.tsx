import React from 'react';

const TableRow = ({ useCase, time, fraud, savings }: { useCase: string[], time: string[], fraud: string[], savings: string[] }) => (
    <div className="grid grid-cols-4 gap-4 py-4 items-center">
        <div className="font-semibold text-slate-700">
            {useCase.map((line, i) => <p key={i}>{line}</p>)}
        </div>
        <div className="text-slate-600">
             {time.map((line, i) => <p key={i}>{line}</p>)}
        </div>
        <div className="text-slate-600">
             {fraud.map((line, i) => <p key={i}>{line}</p>)}
        </div>
        <div className="text-slate-600 font-medium">
             {savings.map((line, i) => <p key={i}>{line}</p>)}
        </div>
    </div>
);

export const Figure4: React.FC = () => {
    return (
        <div className="my-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm overflow-x-auto">
            <h4 className="text-xl font-bold text-center text-slate-800 mb-8">
                FIGURE 4: AI Agent Impact Across Credit Bureau Operations
            </h4>
            <div className="min-w-[700px]">
                <div className="grid grid-cols-4 gap-4 pb-4 border-b-2 border-slate-300 text-base font-bold text-slate-800 uppercase tracking-wider">
                    <div>USE CASE</div>
                    <div>TIME REDUCTION</div>
                    <div>FRAUD DETECTION</div>
                    <div>COST SAVINGS</div>
                </div>
                <div className="divide-y divide-slate-200 text-base">
                    <TableRow useCase={["Application", "Verification"]} time={["95% faster", "(5 days→5 min)"]} fraud={["+60%", "detection"]} savings={["$1.2M/yr"]} />
                    <TableRow useCase={["Fraud", "Prevention"]} time={["85% faster", "(2 days→20 min)"]} fraud={["+125%", "detection"]} savings={["$4.2M/yr"]} />
                    <TableRow useCase={["Collections Strategy", "Optimization"]} time={["90% faster", "(3 days→4 hrs)"]} fraud={["+45%", "accuracy"]} savings={["$850K/yr"]} />
                    <TableRow useCase={["Portfolio Risk", "Assessment"]} time={["80% faster", "(weekly→daily)"]} fraud={["Real-time", "monitoring"]} savings={["$650K/yr"]} />
                    <TableRow useCase={["Regulatory Compliance", "Reporting"]} time={["92% reduction", "in manual work"]} fraud={["N/A", "100% audit trail"]} savings={["$500K/yr"]} />
                </div>
                 <div className="mt-8 pt-6 border-t-2 border-[#064a70] text-center">
                    <p className="font-bold text-slate-800 text-base">Total Annual Impact: $7.4M cost savings + $12M+ fraud prevention</p>
                </div>
            </div>
        </div>
    );
}