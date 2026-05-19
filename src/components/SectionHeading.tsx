import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, intro, align = 'left', variant = 'light' }: Props) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-brand-ink';
  const introColor = variant === 'dark' ? 'text-white/70' : 'text-brand-slate';
  const eyebrowClass = variant === 'dark' ? 'eyebrow eyebrow-light' : 'eyebrow';

  return (
    <div className={`${alignmentClasses} max-w-3xl`}>
      {eyebrow && <p className={eyebrowClass}>{eyebrow}</p>}
      <h2
        className={`mt-3 font-display font-semibold tracking-tightest text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.12] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 text-base sm:text-lg leading-relaxed ${introColor}`}>{intro}</p>}
    </div>
  );
}
