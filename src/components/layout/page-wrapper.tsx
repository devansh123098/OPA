'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Delay mounting slightly to ensure CSS is loaded for transition
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-0 transition-opacity duration-700 ease-in-out',
        mounted && 'opacity-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
