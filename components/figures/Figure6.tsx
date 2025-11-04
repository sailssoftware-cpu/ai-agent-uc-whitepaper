import React from 'react';

const RiskCell = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={`flex items-center justify-center p-2 text-center text-xs md:text-sm ${className}`}>
        {children}
    </div>
);

export const Figure6: React.FC = () => {
    return (
        <div className="my-8 p-6 bg-white border border-slate-200 rounded-lg shadow-sm">
            <h4 className="text-lg font-bold text-center text-slate-800 mb-6">
                FIGURE 6: Implementation Risk Matrix
            </h4>
            <div className="grid grid-cols-4">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-around text-center font-bold text-sm text-slate-600">
                    <div className="h-1/3 flex items-center justify-center">HIGH<br/>IMPACT</div>
                    <div className="h-1/3 flex items-center justify-center">MEDIUM<br/>IMPACT</div>
                    <div className="h-1/3 flex items-center justify-center">LOW<br/>IMPACT</div>
                </div>

                {/* Matrix Content */}
                <div className="col-span-3 grid grid-cols-3 border-2 border-slate-300 bg-slate-50">
                    {/* Column 1 */}
                    <RiskCell>[Data Quality]</RiskCell>
                    <RiskCell>[Integration Complexity]</RiskCell>
                    <RiskCell className="bg-[#00b9ff]/10 border-2 border-[#00b9ff] rounded font-semibold text-[#064a70]">[Change Resistance]</RiskCell>
                    
                    <RiskCell>[Vendor Lock-in]</RiskCell>
                    <RiskCell>[Regulatory Changes]</RiskCell>
                    <RiskCell>[Fraud Evolution]</RiskCell>

                    <RiskCell>[Staff Turnover]</RiskCell>
                    <RiskCell>[Technology Obsolescence]</RiskCell>
                    <RiskCell>[Cost Overruns]</RiskCell>
                </div>

                 {/* X-axis labels */}
                <div></div> {/* Spacer */}
                 <div className="col-span-3 grid grid-cols-3 text-center font-bold text-sm mt-2 text-slate-600">
                    <div>Low Likelihood</div>
                    <div>Medium Likelihood</div>
                    <div>High Likelihood</div>
                </div>
            </div>
             <div className="mt-6 p-4 bg-[#00b9ff]/10 border-l-4 border-[#00b9ff]">
                <h5 className="font-bold text-[#064a70]">Priority Mitigation Areas</h5>
                <p className="text-sm text-slate-600">(High Impact + High Likelihood)</p>
            </div>
        </div>
    );
}