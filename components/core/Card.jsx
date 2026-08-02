import React from 'react';

export function Card({ title, children, style }) {
  return (
    <div style={{
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      ...style,
    }}>
      {title && (
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--size-small)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: 16,
        }}>{title}</div>
      )}
      {children}
    </div>
  );
}
