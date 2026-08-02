import React from 'react';

export function SectionHeading({ eyebrow, title, align = 'left' }) {
  return (
    <div style={{ textAlign: align, marginBottom: 32 }}>
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--size-micro)',
          letterSpacing: 'var(--tracking-widest)',
          textTransform: 'uppercase',
          color: 'var(--highlight)',
          marginBottom: 10,
        }}>{eyebrow}</div>
      )}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--size-display-2)',
        fontWeight: 500,
        color: 'var(--text-primary)',
        letterSpacing: 'var(--tracking-tight)',
      }}>{title}</div>
    </div>
  );
}
