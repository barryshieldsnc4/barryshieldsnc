import React from 'react';

export interface CardProps {
  /** Optional bold heading, e.g. an expertise-group name like "Learning Design & Craft" */
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
