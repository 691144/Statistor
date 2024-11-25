declare module 'react-mathjax2' {
  import { ReactNode } from 'react';

  interface MathJaxProps {
    children: ReactNode;
  }

  interface MathJaxContextProps {
    children: ReactNode;
    input?: 'tex' | 'ascii' | 'mathml';
    options?: any;
    onLoad?: () => void;
    onError?: (error: Error) => void;
  }

  const MathJax: {
    Context: React.FC<MathJaxContextProps>;
    Node: React.FC<MathJaxProps>;
  };

  export default MathJax;
}
