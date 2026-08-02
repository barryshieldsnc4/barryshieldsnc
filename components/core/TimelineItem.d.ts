import React from 'react';

export interface TimelineItemProps {
  org: string;
  location?: string;
  /** e.g. "2021 – 2024" */
  dates: string;
  role: string;
  summary?: string;
  highlights?: string[];
  /** small inline metric row under highlights, e.g. [{value:"72%", label:"Win Rate"}] */
  stats?: { value: string; label: string }[];
}
