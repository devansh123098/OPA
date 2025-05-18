
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Header = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isHomePage = pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sidebar-border/40 bg-sidebar text-sidebar-foreground shadow-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop Logo (Left) */}
        <Link href="/" className="hidden md:flex items-center" onClick={() => setIsSheetOpen(false)}>
          <Image
            src="/logo.png" 
            alt="Odisha Pickleball Association Logo"
            width={365}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        {/* Mobile Logo (Left - visible in header bar) */}
        <Link href="/" className="block md:hidden" onClick={() => setIsSheetOpen(false)}>
          <Image
            src="/logo.png" 
            alt="OPA Logo"
            width={200}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation (Right) */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              asChild
              className={cn(
                "text-sm font-medium transition-colors",
                mounted && pathname === link.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation Trigger (Right) */}
         <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-sidebar text-sidebar-foreground p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center" onClick={() => setIsSheetOpen(false)}>
                        <Image
                          src="/logo.png" 
                          alt="OPA Logo"
                          width={365} 
                          height={80}
                          className="object-contain"
                          priority
                        />
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col space-y-3">
                  {NAV_LINKS.map((link) => (
                    <Button
                      key={link.href}
                      variant="ghost"
                      asChild
                      className={cn(
                        "justify-start text-base font-medium transition-colors",
                        mounted && pathname === link.href
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
