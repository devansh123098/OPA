import type { SVGProps } from 'react';

const PaddleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 10c-2.28 0-4.78.79-7.14 2.37-2.36 1.58-3.36 3.8-.36 5.81s4.23 1.01 6.59-.57c2.36-1.58 3.91-4.1 3.91-6.61Z" />
    <path d="m5.5 16.5 6-6" />
  </svg>
);

export default PaddleIcon;
