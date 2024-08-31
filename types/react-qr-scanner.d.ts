declare module 'react-qr-scanner' {
    import { Component } from 'react';
  
    interface QrScannerProps {
      delay?: number;
      onError?: (error: Error) => void;
      onScan: (data: string | null) => void;
      style?: React.CSSProperties;
      className?: string;
      facingMode?: 'user' | 'environment';
    }
  
    export default class QrScanner extends Component<QrScannerProps> {}
  }
  