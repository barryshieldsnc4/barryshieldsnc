import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. Primary = filled accent, Secondary = outlined, Ghost = borderless. */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
