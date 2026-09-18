import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-hero-foreground/15">
      <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 sm:px-8 lg:flex lg:h-24 lg:px-12">
        <a href="#home" aria-label="Aomori Japanese home" className="flex min-w-0 items-center gap-3 text-hero-foreground">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/70 font-serif text-lg">青</span>
          <span className="min-w-0">
            <span className="block truncate font-serif text-xl leading-none">Aomori</span>
            <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.28em] text-hero-foreground/65">Japanese</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:ml-auto lg:flex">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} className="text-xs uppercase tracking-[0.14em] text-hero-foreground/75 transition-colors hover:text-hero-foreground">
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 shrink-0 place-items-center border border-hero-foreground/30 text-hero-foreground transition-colors hover:bg-hero-foreground/10 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <span aria-disabled="true" title="Online ordering link is not yet available" className="hidden cursor-not-allowed border border-gold bg-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors lg:block">
          Order Online
        </span>
      </div>

      {open && (
        <div className="border-t border-hero-foreground/15 bg-primary px-5 py-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-hero-foreground/10 py-4 font-serif text-2xl text-hero-foreground">
                {label}
              </a>
            ))}
          </nav>
          <span aria-disabled="true" className="mt-6 flex cursor-not-allowed items-center justify-center bg-gold px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-primary">
            Order Online
          </span>
        </div>
      )}
    </header>
  );
}
