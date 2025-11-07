import React from 'react';
import { AppendixCard } from './AppendixCard';

const ApiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 a 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PerformanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);


export const AppendixA: React.FC = () => {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <AppendixCard title="API Standards" icon={<ApiIcon />}>
        <ul className="space-y-2 text-base text-slate-600">
          <li>RESTful APIs with OAuth 2.0 authentication</li>
          <li>JSON standard data format</li>
          <li>Sub-2 second API response times</li>
          <li>Sub-5 minute complete verification</li>
        </ul>
      </AppendixCard>
      <AppendixCard title="Performance Metrics" icon={<PerformanceIcon />}>
        <ul className="space-y-2 text-base text-slate-600">
          <li>99.9% system uptime guarantee</li>
          <li>Fraud detection accuracy &gt;95%</li>
          <li>False positive rate &lt;5%</li>
          <li>24/7 monitoring and support</li>
        </ul>
      </AppendixCard>
    </div>
  );
};