import React from 'react';

interface AppendixCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const AppendixCard: React.FC<AppendixCardProps> = ({ title, icon, children, className }) => {
  return (
    <div className={`bg-white border border-[#00b9ff] rounded-xl shadow-sm p-6 ${className}`}>
      <div className="flex items-center mb-4">
        {icon && <div className="text-[#00b9ff] mr-3">{icon}</div>}
        <h4 className="text-lg font-bold text-[#064a70]">{title}</h4>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};