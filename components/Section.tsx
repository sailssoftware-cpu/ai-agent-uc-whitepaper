import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  level: 1 | 2;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, level, children }) => {
  const TitleComponent = level === 1 ? 'h2' : 'h3';
  const titleClasses = level === 1 
    ? "text-3xl font-bold text-slate-800 border-b border-slate-200 pb-4 mt-12 mb-6" 
    : "text-2xl font-bold text-slate-700 mt-10 mb-4";

  return (
    <section id={id} className="mb-8">
      <TitleComponent className={titleClasses}>{title}</TitleComponent>
      <div className={level === 2 ? 'pl-2' : ''}>
         {children}
      </div>
    </section>
  );
};
