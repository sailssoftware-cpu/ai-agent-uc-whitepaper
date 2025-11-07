import React from 'react';

const Layer = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="border-2 border-[#00b9ff] rounded-lg p-4 bg-white text-center w-full">
    <h5 className="text-base font-bold tracking-wider uppercase text-[#064a70] mb-4">{title}</h5>
    {children}
  </div>
);

const LayerItem = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-100 p-3 rounded text-sm text-slate-700 h-full flex items-center justify-center">
    <div>{children}</div>
  </div>
);

const ArrowDown = () => (
  <div className="flex justify-center items-center my-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 13.5l-5.5 5.5-5.5-5.5" />
    </svg>
  </div>
);


export const Figure3: React.FC = () => {
  return (
    <div className="my-8 p-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-bold text-center text-slate-800 mb-6">
        FIGURE 3: AI Agent Technical Architecture
      </h4>
      <div className="flex flex-col items-center gap-2">
        <Layer title="User Interface Layer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <LayerItem>Dashboard Monitoring</LayerItem>
            <LayerItem>Case Management</LayerItem>
            <LayerItem>Analytics Reporting</LayerItem>
          </div>
        </Layer>
        <ArrowDown />
        <Layer title="Business Logic Layer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <LayerItem>Verification Rules</LayerItem>
            <LayerItem>Risk Scoring Models</LayerItem>
            <LayerItem>Compliance Checking</LayerItem>
          </div>
        </Layer>
        <ArrowDown />
        <Layer title="AI Processing Layer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <LayerItem>Machine Learning<br />Fraud Detection</LayerItem>
            <LayerItem>NLP<br />Document Processing</LayerItem>
            <LayerItem>Pattern Recognition<br />Anomaly Detection</LayerItem>
          </div>
        </Layer>
        <ArrowDown />
        <Layer title="Data Integration Layer">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <LayerItem>State UI Systems<br />(50+ APIs)</LayerItem>
            <LayerItem>Document<br />OCR Scanner</LayerItem>
            <LayerItem>Credit Bureau<br />Database</LayerItem>
          </div>
        </Layer>
        <ArrowDown />
        <Layer title="Security & Compliance Layer">
            <div className="text-sm text-slate-600">
                <span className="inline-block mx-2">• Encryption</span>
                <span className="inline-block mx-2">• Audit Logs</span>
                <span className="inline-block mx-2">• Access Control</span>
                <span className="inline-block mx-2">• Tokenization</span>
                <span className="inline-block mx-2">• Monitoring</span>
                <span className="inline-block mx-2">• Control</span>
            </div>
        </Layer>
      </div>
    </div>
  );
};