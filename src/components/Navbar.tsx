import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container-main flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          WEIYUE <span className="gradient-text">LAB</span>
        </a>

        <nav className="hidden sm:flex items-center gap-8">
          {["Services", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
          {["Services", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
