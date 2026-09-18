import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 md:grid-cols-[1.2fr_1fr_auto] md:items-end">
          <div>
            <div className="font-serif text-4xl">Aomori Japanese</div>
            <p className="mt-3 text-sm text-primary-foreground/60">Japanese Restaurant · Buderim, Queensland</p>
          </div>
          <address className="text-sm not-italic leading-7 text-primary-foreground/70">
            Shop 10/29 Main St, Buderim QLD 4556<br />
            <a href="tel:+61492904726" className="transition-colors hover:text-primary-foreground">+61 492 904 726</a>
          </address>
          <a href="#home" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="flex flex-col gap-5 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aomori Japanese. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#home">Home</a><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#location">Location</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
