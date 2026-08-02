import React from 'react';

export function NavBar({ name, links = [], activeHref }) {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-subtitle)', color: 'var(--text-primary)' }}>{name}</div>
      <div style={{ display: 'flex', gap: 28 }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{
            fontSize: 'var(--size-small)',
            fontWeight: 500,
            color: l.href === activeHref ? 'var(--text-primary)' : 'var(--text-secondary)',
            textDecoration: 'none',
            borderBottom: l.href === activeHref ? '2px solid var(--accent)' : '2px solid transparent',
            paddingBottom: 4,
          }}>{l.label}</a>
        ))}
      </div>
    </nav>
  );
}
