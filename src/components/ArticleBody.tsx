import type { Block } from '@/data/articles';

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-editorial">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i}>{b.text}</h2>;
          case 'h3':
            return <h3 key={i}>{b.text}</h3>;
          case 'p':
            return <p key={i}>{b.text}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case 'code':
            return (
              <pre key={i}>
                <code>{b.text}</code>
              </pre>
            );
          case 'quote':
            return <blockquote key={i}>{b.text}</blockquote>;
          case 'takeaway':
            return (
              <aside
                key={i}
                className="mt-10 rounded-2xl border border-brand/10 bg-brand-mist/60 p-6"
              >
                <p className="eyebrow text-brand">Key takeaway</p>
                <p className="mt-2 text-brand-ink leading-relaxed">{b.text}</p>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
