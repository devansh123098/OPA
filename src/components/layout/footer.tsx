const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {currentYear} Arunachal Pradesh Pickleball Association. All rights reserved.
        </p>
        <p className="mt-1">
          Designed with <span className="text-primary">&hearts;</span> for the love of Pickleball.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
