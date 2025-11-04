import type React from 'react';

export interface SectionData {
  id: string;
  title: string;
  navTitle: string;
  content: (string | React.ReactElement)[];
  subsections?: SubsectionData[];
}

export interface SubsectionData {
  id: string;
  title: string;
  navTitle: string;
  content: (string | React.ReactElement)[];
}
