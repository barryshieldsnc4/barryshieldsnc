import React from 'react';

export function StatCallout({ value, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-display-2)',
        fontWeight: 500,
        color: 'var(--accent)',
        lineHeight: 'var(--leading-tight)',
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--size-micro)',
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
      }}>{label}</div>
    </div>
  );
}
