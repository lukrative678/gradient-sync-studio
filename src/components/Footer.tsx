const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WEIYUE LAB. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a
            href="#services"
            className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Process
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
