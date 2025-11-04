import React from 'react';

const ProcessStep = ({ title, detail, subDetails }: { title: string; detail: string; subDetails?: string[] }) => (
  <div className="text-center">
    <p className="font-semibold text-slate-800 text-base">{title}</p>
    {detail && <p className="text-sm text-slate-500 mt-1">{detail}</p>}
    {subDetails && (
      <div className="mt-2 text-xs text-slate-600 leading-snug">
        {subDetails.map((line, i) => <div key={i}>{line}</div>)}
      </div>
    )}
  </div>
);

// New component for AI Process with larger fonts and spacing
const AIProcessStep = ({ title, detail, subDetails }: { title: string; detail: string; subDetails?: string[] }) => (
    <div className="text-center">
      <p className="font-semibold text-slate-800 text-lg">{title}</p>
      {detail && <p className="text-base text-slate-500 mt-2">{detail}</p>}
      {subDetails && (
        <div className="mt-3 text-sm text-slate-600 leading-relaxed">
          {subDetails.map((line, i) => <div key={i}>{line}</div>)}
        </div>
      )}
    </div>
);


const ArrowDown = () => (
  <div className="flex justify-center items-center my-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
    </svg>
  </div>
);

// New arrow for AI process with more vertical margin
const AIArrowDown = () => (
    <div className="flex justify-center items-center my-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
      </svg>
    </div>
);


const StatCard = ({ title, value, large }: { title: string; value: string; large?: boolean }) => (
    <div className={`text-center p-4 bg-white rounded-lg shadow-sm border border-slate-200 ${large ? 'col-span-2' : ''}`}>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-2xl font-bold text-slate-800 mt-1">{value}</p>
    </div>
);

const manualSteps = [
    { title: "Application Received", detail: "" },
    { title: "Queue for Review", detail: "(2-3 days)" },
    { title: "Manual Data Entry", detail: "(30 min)" },
    { title: "Call State Agency", detail: "(1-2 days)" },
    { title: "Document Review", detail: "(45 min)" },
    { title: "Supervisor Approval", detail: "(1 day)" },
    { title: "Final Decision", detail: "(5-10 days)" },
];

const aiSteps = [
    { title: "Application Received", detail: "" },
    { title: "Instant AI Analysis", detail: "(<30 sec)", subDetails: ["Automated Data Extraction", "API Query to State Systems", "Cross-Reference Validation", "Fraud Pattern Detection"] },
    { title: "Decision Ready", detail: "(<5 min)" },
];


export const Figure1: React.FC = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-lg rounded-lg">
        {/* Manual Process Column */}
        <div className="p-8 flex flex-col bg-slate-50 rounded-l-lg border border-r-0 border-slate-200">
            <h5 className="text-lg font-bold text-center text-slate-700 tracking-wide mb-8">MANUAL PROCESS</h5>
            <div className="flex-grow">
                 {manualSteps.map((step, index) => (
                    <React.Fragment key={index}>
                        <ProcessStep title={step.title} detail={step.detail} />
                        {index < manualSteps.length - 1 && <ArrowDown />}
                    </React.Fragment>
                ))}
            </div>
          <div className="mt-auto pt-8 grid grid-cols-2 gap-4">
              <StatCard title="Cost/Verification" value="$18.75" />
              <StatCard title="Error Rate" value="15-20%" />
              <StatCard title="Fraud Detection" value="35%" large />
          </div>
        </div>
        
        {/* AI Agent Process Column */}
        <div className="p-8 flex flex-col rounded-r-lg border" style={{ backgroundColor: 'rgba(0, 185, 255, 0.05)', borderColor: '#00b9ff' }}>
          <h5 className="text-lg font-bold text-center text-[#064a70] tracking-wide mb-8">AI AGENT PROCESS</h5>
           <div className="flex-grow flex flex-col justify-center"> {/* Vertically center the content */}
                <div> {/* Wrapper div */}
                    {aiSteps.map((step, index) => (
                        <React.Fragment key={index}>
                            <AIProcessStep title={step.title} detail={step.detail} subDetails={step.subDetails} />
                            {index < aiSteps.length - 1 && <AIArrowDown />}
                        </React.Fragment>
                    ))}
                </div>
           </div>
            <div className="mt-auto pt-8 grid grid-cols-2 gap-4">
              <StatCard title="Cost/Verification" value="$2.50" />
              <StatCard title="Error Rate" value="<2%" />
              <StatCard title="Fraud Detection" value="95%" large />
          </div>
        </div>
      </div>
    </div>
  );
};