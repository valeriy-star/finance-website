import { ReactNode, createElement } from 'react';

type ContainerTag = 'div' | 'section' | 'header' | 'footer' | 'main' | 'article' | 'aside';

export function Container({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: ContainerTag;
}) {
  return createElement(
    as,
    { className: `mx-auto w-full max-w-container px-6 sm:px-8 lg:px-10 ${className}` },
    children,
  );
}
