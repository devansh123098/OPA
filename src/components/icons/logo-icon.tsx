import type { SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    width="36" 
    height="36" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_logo)">
      {/* Paddle */}
      <path d="M24 12C20.6863 12 18 14.6863 18 18C18 21.3137 20.6863 24 24 24C27.3137 24 30 21.3137 30 18C30 14.6863 27.3137 12 24 12Z" fill="hsl(var(--primary))"/>
      <rect x="10" y="22" width="10" height="4" rx="2" transform="rotate(-45 10 22)" fill="hsl(var(--primary))"/>
      {/* Pickleball */}
      <circle cx="15" cy="25" r="6" fill="hsl(var(--accent))" />
      <circle cx="13.5" cy="23.5" r="0.9" fill="hsl(var(--background))" />
      <circle cx="16.5" cy="23.5" r="0.9" fill="hsl(var(--background))" />
      <circle cx="15" cy="22" r="0.9" fill="hsl(var(--background))" />
      <circle cx="12.5" cy="25" r="0.9" fill="hsl(var(--background))" />
      <circle cx="17.5" cy="25" r="0.9" fill="hsl(var(--background))" />
      <circle cx="13.5" cy="26.5" r="0.9" fill="hsl(var(--background))" />
      <circle cx="16.5" cy="26.5" r="0.9" fill="hsl(var(--background))" />
      <circle cx="15" cy="28" r="0.9" fill="hsl(var(--background))" />
    </g>
    <defs>
      <clipPath id="clip0_logo">
        <rect width="40" height="40" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default LogoIcon;
