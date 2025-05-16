import type { SVGProps } from 'react';

const PickleballIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
    <circle cx="10" cy="9.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="9.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="7.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="8.5" cy="12" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="10" cy="14.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="14.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

export default PickleballIcon;
