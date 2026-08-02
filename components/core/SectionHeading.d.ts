import React from 'react';

export interface SectionHeadingProps {
  /** small clay-colored mono label above the title, e.g. "EXPERIENCE" */
  eyebrow?: string;
  title: string;
  align?: 'left' | 'center';
}
