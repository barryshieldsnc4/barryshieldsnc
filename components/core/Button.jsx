import React from 'react';

const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid var(--action-primary)',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent',
  },
};

const SIZES = {
  sm: { padding: '8px 14px', fontSize: 'var(--size-small)' },
  md: { padding: '11px 20px', fontSize: 'var(--size-body)' },
};

export function Button({ children, variant = 'primary', size = 'md', onClick, disabled, style }) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        letterSpacing: 'var(--tracking-normal)',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
        ...v,
        ...s,
        ...style,
      }}
    >
      {children}
    </button>
  );
}
