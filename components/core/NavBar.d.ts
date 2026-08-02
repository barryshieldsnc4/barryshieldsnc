import React from 'react';

export interface NavBarProps {
  /** Person or site name, set in the display serif. */
  name: string;
  links: { href: string; label: string }[];
  activeHref?: string;
}
