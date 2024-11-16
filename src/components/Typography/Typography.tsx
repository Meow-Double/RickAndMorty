import { ReactNode } from 'react';

type Variant = 'title-1' | 'title-2' | 'body-1' | 'body-2' | 'label';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';

interface TypographyProps {
  tag?: Tag;
  variant: Variant;
  children: string;
}

export const Typography = ({ tag = 'div', variant, children }: TypographyProps) => {
  const Component = tag;

  return <Component className={variant}>{children}</Component>;
};
