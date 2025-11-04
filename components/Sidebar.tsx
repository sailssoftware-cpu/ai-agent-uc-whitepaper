import React from 'react';
import type { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // The 'start' block alignment ensures the top of the section aligns with the top of the viewport.
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optionally update the URL hash without causing a page jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="w-full lg:w-1/4 lg:sticky top-16 self-start print:hidden">
      <nav className="bg-white p-6 shadow-md rounded-lg max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Contents</h3>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => handleLinkClick(e, section.id)}
                className={`block text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'text-[#00b9ff] font-bold'
                    : 'text-slate-600 hover:text-[#00b9ff] hover:pl-2'
                }`}
              >
                {section.navTitle}
              </a>
              {section.subsections && (
                 <ul className="mt-2 pl-4 space-y-2 border-l border-slate-200">
                    {section.subsections.map(sub => (
                         <li key={sub.id}>
                         <a
                           href={`#${sub.id}`}
                           onClick={(e) => handleLinkClick(e, sub.id)}
                           className={`block text-xs transition-all duration-200 ${
                             activeSection === sub.id
                               ? 'text-[#00b9ff] font-semibold'
                               : 'text-slate-500 hover:text-[#00b9ff] hover:pl-2'
                           }`}
                         >
                           {sub.navTitle}
                         </a>
                       </li>
                    ))}
                 </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-slate-200">
          <button
            onClick={() => window.print()}
            className="w-full bg-[#064a70] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#00b9ff] transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </button>
        </div>
      </nav>
    </aside>
  );
};