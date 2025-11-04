import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
      <p>&copy; {currentYear} Sails Software Inc. All Rights Reserved.</p>
    </footer>
  );
};