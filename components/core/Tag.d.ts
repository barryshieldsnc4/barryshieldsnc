import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  /** default = sage accent chip, neutral = outlined, highlight = clay accent for a standout skill */
  tone?: 'default' | 'neutral' | 'highlight';
}
