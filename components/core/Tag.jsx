import React from 'react';

export function Tag({ children, tone = 'default' }) {
  const tones = {
    default: { background: 'var(--surface-accent)', color: 'var(--accent-strong)' },
    neutral: { background: 'var(--surface-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' },
    highlight: { background: 'var(--surface-highlight)', color: 'var(--clay)' },
  };
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--size-small)',
        fontWeight: 500,
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        ...tones[tone],
      }}
    >
      {children}
    </span>
  );
}
