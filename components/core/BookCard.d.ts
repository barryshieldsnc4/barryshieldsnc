import React from 'react';

export interface BookCardProps {
  status: 'Published' | 'In Progress' | 'Draft';
  title: string;
  subtitle?: string;
  description?: string;
  /** Link label; omit to hide the CTA (e.g. for an unpublished draft) */
  cta?: string;
  /** Cover art element — an <img> or an <image-slot> placeholder */
  cover: React.ReactNode;
}
