import React from 'react';

export function BookCard({ status, title, subtitle, description, cta = 'Read excerpt', cover }) {
  const statusTone = status === 'Published' ? { background: 'var(--surface-accent)', color: 'var(--accent-strong)' }
    : status === 'In Progress' ? { background: 'var(--surface-highlight)', color: 'var(--clay)' }
    : { background: 'var(--surface-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ width: '100%', aspectRatio: '3 / 4', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-default)', background: 'var(--surface-card)', position: 'relative' }}>
        {React.cloneElement(cover, { style: { width: '100%', height: '100%', position: 'absolute', inset: 0 } })}
      </div>
      <div>
        <span style={{ display: 'inline-flex', fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-pill)', ...statusTone }}>{status}</span>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-title)', color: 'var(--text-primary)', marginTop: 12 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 'var(--size-small)', color: 'var(--text-secondary)', marginTop: 2 }}>{subtitle}</div>}
        {description && <p style={{ fontSize: 'var(--size-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: 10 }}>{description}</p>}
        {cta && <a href="#" style={{ display: 'inline-block', marginTop: 12, fontSize: 'var(--size-small)', fontWeight: 600, color: 'var(--link)' }}>{cta} →</a>}
      </div>
    </div>
  );
}
