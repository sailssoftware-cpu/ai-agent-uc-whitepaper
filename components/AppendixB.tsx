import React from 'react';
import { AppendixCard } from './AppendixCard';

export const AppendixB: React.FC = () => {
  return (
    <div className="my-6">
      <AppendixCard title="53 US Unemployment Systems">
        <div className="text-sm text-slate-600 space-y-3">
            <p>Each state and territory operates unique unemployment systems with varying:</p>
            <ul className="space-y-1 pl-2">
                <li><strong className="text-slate-700">Data formats:</strong> XML, JSON, CSV, proprietary formats</li>
                <li><strong className="text-slate-700">Eligibility criteria:</strong> State-specific requirements and calculations</li>
                <li><strong className="text-slate-700">Technology standards:</strong> Legacy mainframes to modern cloud systems</li>
                <li><strong className="text-slate-700">Access protocols:</strong> SOAP, REST, FTP, batch processing</li>
            </ul>
             <p>AI agents normalize and seamlessly connect all systems through intelligent data mapping and protocol translation.</p>
        </div>
      </AppendixCard>
    </div>
  );
};