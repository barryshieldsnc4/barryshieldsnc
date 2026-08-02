import React from 'react';

export function TimelineItem({ org, location, dates, role, summary, highlights = [], stats = [] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: 24,
      padding: '32px 0',
      borderTop: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--size-micro)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-tertiary)', paddingTop: 4 }}>
        {dates}
        <div style={{ marginTop: 6, color: 'var(--text-tertiary)' }}>{location}</div>
      </div>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-title)', color: 'var(--text-primary)' }}>{role}</div>
        <div style={{ fontSize: 'var(--size-small)', color: 'var(--accent)', fontWeight: 600, marginTop: 2 }}>{org}</div>
        {summary && <p style={{ fontSize: 'var(--size-body)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: 12, maxWidth: 640 }}>{summary}</p>}
        {highlights.length > 0 && (
          <ul style={{ margin: '14px 0 0', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {highlights.map((h, i) => (
              <li key={i} style={{ fontSize: 'var(--size-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{h}</li>
            ))}
          </ul>
        )}
        {stats.length > 0 && (
          <div style={{ display: 'flex', gap: 32, marginTop: 20 }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-subtitle)', color: 'var(--accent)' }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
