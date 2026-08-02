import React from 'react';

export interface StatCalloutProps {
  /** The headline figure, e.g. "$493.9M" or "-66%". Pass as a pre-formatted string. */
  value: string;
  /** Short uppercase label describing the metric. */
  label: string;
}
