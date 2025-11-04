import React from 'react';
import { AppendixCard } from './AppendixCard';

const Term = ({ term, definition }: { term: string, definition: string }) => (
    <li>
        <strong className="text-slate-700">{term}:</strong> {definition}
    </li>
);

export const AppendixC: React.FC = () => {
  return (
    <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <AppendixCard title="Key Terms & Definitions">
        <ul className="space-y-3 text-sm text-slate-600">
          <Term term="AI Agent" definition="Autonomous software system capable of making decisions and taking actions without human intervention" />
          <Term term="FCRA" definition="Fair Credit Reporting Act – Federal law regulating credit reporting and consumer rights" />
          <Term term="Synthetic Identity" definition="Fraudulent identity created using combination of real and fabricated personal details" />
          <Term term="OCR" definition="Optical Character Recognition – Technology for converting images to machine-readable text" />
        </ul>
      </AppendixCard>
      <AppendixCard title="Technical Acronyms">
        <ul className="space-y-3 text-sm text-slate-600">
            <Term term="NLP" definition="Natural Language Processing – AI technology for understanding human language" />
            <Term term="API" definition="Application Programming Interface – Software interface for system communication" />
            <Term term="KYC" definition="Know Your Customer – Identity verification and due diligence processes" />
            <Term term="ECOA" definition="Equal Credit Opportunity Act – Federal law prohibiting credit discrimination" />
        </ul>
      </AppendixCard>
    </div>
  );
};