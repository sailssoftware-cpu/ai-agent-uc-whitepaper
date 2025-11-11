import React, { useState, useEffect, useRef } from 'react';
import { sections } from './constants';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { Figure1 } from './components/figures/Figure1';
import { Figure2 } from './components/figures/Figure2';
import { Figure3 } from './components/figures/Figure3';
import { Figure4 } from './components/figures/Figure4';
import { Figure5 } from './components/figures/Figure5';
import { Figure6 } from './components/figures/Figure6';
import { Figure7 } from './components/figures/Figure7';
import { RoiChart } from './components/charts/RoiChart';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('executive-summary');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    const refsToObserve = Object.values(sectionRefs.current);
    refsToObserve.forEach((ref) => {
      if (ref) observer.observe(ref as Element);
    });

    return () => {
      const refsToUnobserve = Object.values(sectionRefs.current);
      refsToUnobserve.forEach((ref) => {
        if (ref) observer.unobserve(ref as Element);
      });
    };
  }, []);

  const renderContent = (content: (string | React.ReactElement)[]) => {
    return content.map((item, index) => {
      if (typeof item === 'string') {
        const parts = item.split(/(\[FIGURE \d+:[^\]]+\])/);
        return parts.map((part, partIndex) => {
          if (part.startsWith('[FIGURE 1')) return <Figure1 key={`fig1-${partIndex}`} />;
          if (part.startsWith('[FIGURE 2')) return <Figure2 key={`fig2-${partIndex}`} />;
          if (part.startsWith('[FIGURE 3')) return <Figure3 key={`fig3-${partIndex}`} />;
          if (part.startsWith('[FIGURE 4')) return <Figure4 key={`fig4-${partIndex}`} />;
          if (part.startsWith('[FIGURE 5')) return <Figure5 key={`fig5-${partIndex}`} />;
          if (part.startsWith('[FIGURE 6: Implementation')) return <Figure6 key={`fig6-risk-${partIndex}`} />;
          if (part.startsWith('[FIGURE 6: 3-Year')) return <RoiChart key={`fig6-roi-${partIndex}`} />;
          if (part.startsWith('[FIGURE 7')) return <Figure7 key={`fig7-${partIndex}`} />;

          const trimmedPart = part.trim();
          if (trimmedPart === 'AI Agent Solution:' || trimmedPart === 'Business Impact:' || trimmedPart === 'Partner with Us:' || trimmedPart === 'Investment:' || trimmedPart === 'Returns:') {
            return <h4 key={`subheading-${index}-${partIndex}`} className="text-md font-bold text-slate-700 mt-6 mb-2">{trimmedPart}</h4>
          }

          const listItems = part.split('\n').filter(li => li.trim() !== '');

          // Logic for "Recommended Next Steps"
          if (listItems.some(li => li.trim().startsWith('For '))) {
            const groupedItems: { heading: string, items: string[] }[] = [];
            let currentGroup: { heading: string, items: string[] } | null = null;

            listItems.forEach(li => {
              const trimmedLi = li.trim();
              if (trimmedLi.startsWith('For ')) {
                currentGroup = { heading: trimmedLi, items: [] };
                groupedItems.push(currentGroup);
              } else if (currentGroup && /^[1-4]\./.test(trimmedLi)) {
                currentGroup.items.push(trimmedLi);
              }
            });
            
            return (
              <div key={`next-steps-${index}-${partIndex}`} className="my-6">
                {groupedItems.map((group) => (
                  <div key={group.heading} className="mb-4">
                    <h4 className="text-md font-semibold text-[#064a70] mb-3">{group.heading}</h4>
                    <ul className="space-y-2">
                      {group.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-slate-600 leading-relaxed">
                          <span className="text-[#00b9ff] font-medium w-8 text-left">{listItem.substring(0, 2)}</span>
                          <span className="flex-1">{listItem.substring(2).trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          }

          if (listItems.every(li => /^\s*•|Reduce|Decrease|Lower|Improve|Enhance|Challenge:|A\)|B\)|C\)/.test(li.trim()))) {
             return (
              <ul key={`list-${index}-${partIndex}`} className="space-y-3 my-4">
                {listItems.map((li, liIndex) => (
                   <li key={liIndex} className="flex items-start">
                    <span className="text-[#00b9ff] font-bold mr-3 mt-1">&#8226;</span>
                    <span>{li.replace(/^\s*•/, '').trim()}</span>
                  </li>
                ))}
              </ul>
            );
          }
          
           if (part.trim() === 'Recommended Next Steps') {
            return <h3 key={`p-${index}-${partIndex}`} className="text-2xl font-bold text-slate-700 mt-10 mb-0">{part}</h3>
          }
          
          return <p key={`p-${index}-${partIndex}`} className="text-slate-600 leading-relaxed my-4">{part}</p>;
        })
      }
      if (React.isValidElement(item)) {
        // Clone the element to attach a key, which is necessary for lists.
        return React.cloneElement(item, { key: index });
      }
      return null;
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen print:bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-12 print:block">
          <Sidebar sections={sections} activeSection={activeSection} />
          <main className="flex-1">
            <div className="bg-white p-8 sm:p-12 shadow-lg rounded-lg print:shadow-none print:p-0">
              <Header />
              {sections.map(section => (
                <div key={section.id} ref={el => { sectionRefs.current[section.id] = el; }}>
                  <Section id={section.id} title={section.title} level={1}>
                    {renderContent(section.content)}
                  </Section>
                  {section.subsections?.map(subsection => (
                     <div key={subsection.id} ref={el => { sectionRefs.current[subsection.id] = el; }}>
                      <Section id={subsection.id} title={subsection.title} level={2}>
                         {renderContent(subsection.content)}
                      </Section>
                     </div>
                  ))}
                </div>
              ))}
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;