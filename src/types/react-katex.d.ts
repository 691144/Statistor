declare module 'react-katex' {
  import { ReactNode } from 'react';
  import { KatexOptions } from 'katex';

  interface KatexProps {
    children?: ReactNode;
    math: string;
    block?: boolean;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => ReactNode;
    settings?: KatexOptions;
  }

  export const InlineMath: React.FC<KatexProps>;
  export const BlockMath: React.FC<KatexProps>;
}
