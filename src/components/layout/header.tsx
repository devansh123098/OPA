
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
    <header className="sticky top-0 z-50 w-full border-b border-sidebar-border/40 bg-sidebar text-sidebar-foreground shadow-md"> {/* Removed rounded-lg */}
      <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6 lg:px-8">
        {isHomePage ? (
          <>
            {/* Desktop Navigation (Left on Homepage) */}
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

            {/* Logo (Right on Homepage) */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Odisha Pickleball Association Logo" 
                width={365} 
                height={80} 
                className="object-contain" 
                priority 
              />
            </Link>
          </>
        ) : (
          <>
            {/* Logo (Left on Other Pages) */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
              <Image 
                src="/logo.png" 
                alt="Odisha Pickleball Association Logo" 
                width={365} 
                height={80} 
                className="object-contain" 
                priority 
              />
            </Link>

            {/* Desktop Navigation (Right on Other Pages) */}
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
          </>
        )}

        {/* Mobile Navigation Trigger (Always on the far right for mobile) */}
        {/* For mobile, the above conditional rendering for desktop nav doesn't apply due to "hidden md:flex" */}
        {/* So, for mobile, the Logo Link (if rendered first in non-homepage or by the structure below) and this trigger will be spaced by justify-between */}
        {/* To ensure mobile always has Logo on left and Burger on right, we might need to ensure the logo is *always* rendered outside the conditional for desktop nav logic if `md:hidden` is the only thing separating them */}
        
        {/* Simplified structure for mobile: Logo on left, Burger on right */}
        {/* The conditional re-ordering is primarily for desktop view. Mobile view implicitly handles this by hiding desktop nav. */}
        {/* Let's ensure the logo for mobile context (when nav is hidden) is consistent */}
         <div className="md:hidden"> {/* This div itself pushes to the right due to justify-between with the logo on non-homepages or nav on homepages */}
           {/* Mobile Logo - Rendered inside the sheet, but the trigger needs to be positioned */}
           {/* The first Link component outside this "md:hidden" div serves as the mobile logo */}
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
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
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
