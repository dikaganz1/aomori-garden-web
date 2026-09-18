import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock3, MapPin, Phone, Star } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroImage from "@/assets/aomori-hero.jpg";
import takoyakiImage from "@/assets/aomori-takoyaki.jpg";
import sushiImage from "@/assets/aomori-sushi.jpg";
import friedImage from "@/assets/aomori-fried.jpg";
import interiorImage from "@/assets/aomori-interior.jpg";
import riceImage from "@/assets/aomori-rice.jpg";
import drinksImage from "@/assets/aomori-drinks.jpg";

const description = "Discover Japanese flavours at Aomori Japanese in Buderim, Queensland. View our menu, explore our dishes, order online, and find us on Main Street.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aomori Japanese | Japanese Restaurant in Buderim" },
      { name: "description", content: description },
      { property: "og:title", content: "Aomori Japanese | Japanese Restaurant in Buderim" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Aomori Japanese",
        servesCuisine: "Japanese",
        priceRange: "$1–20",
        telephone: "+61 492 904 726",
        address: { "@type": "PostalAddress", streetAddress: "Shop 10/29 Main St", addressLocality: "Buderim", addressRegion: "QLD", postalCode: "4556", addressCountry: "AU" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "93" },
      }),
    }],
  }),
  component: Index,
});

const features = [
  { image: takoyakiImage, name: "Takoyaki", detail: "A Japanese favourite, presented with care." },
  { image: sushiImage, name: "Sushi", detail: "Beautifully presented Japanese favourites." },
  { image: friedImage, name: "Korean Fried", detail: "Crisp, comforting and made to be shared." },
  { image: riceImage, name: "Japanese Dishes", detail: "A varied selection for every appetite." },
];

const menuGroups = [
  { number: "01", title: "Sushi", text: "Browse the restaurant’s selection of sushi." },
  { number: "02", title: "Japanese Favourites", text: "Familiar Japanese dishes for dine-in or takeaway." },
  { number: "03", title: "Takoyaki", text: "A popular Japanese favourite." },
  { number: "04", title: "Fried Dishes", text: "Including the restaurant’s Korean Fried offering." },
  { number: "05", title: "Rice / Noodles", text: "Comforting choices for a complete meal." },
  { number: "06", title: "Drinks", text: "Ask the restaurant for today’s available drinks." },
];

function Index() {
  return (
    <main className="overflow-x-clip">
      <section id="home" className="relative flex min-h-[min(900px,92svh)] items-end overflow-hidden text-hero-foreground">
        <img src={heroImage} alt="Japanese sushi presented on dark ceramic at a warm timber counter" width={1920} height={1088} fetchPriority="high" className="hero-image absolute inset-0 size-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <SiteHeader />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold"><span className="h-px w-10 bg-gold" /> Japanese Restaurant · Buderim</p>
            <h1 className="font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-[6.3rem]">A Taste of Japan,<br /><em className="font-normal text-gold-light">Naturally Refined.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/78 sm:text-lg">Experience Japanese-inspired dishes prepared with care at Aomori Japanese in Buderim.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <span aria-disabled="true" title="Official ordering link is not yet available" className="inline-flex cursor-not-allowed items-center gap-3 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-primary">Order Online <ArrowRight size={16} /></span>
              <a href="#menu" className="inline-flex items-center gap-3 border border-hero-foreground/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.13em] text-hero-foreground transition-colors hover:bg-hero-foreground/10">View Menu <ArrowRight size={16} /></a>
            </div>
            <p className="mt-9 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-hero-foreground/65"><MapPin size={15} className="text-gold" /> Buderim, Queensland</p>
          </div>
        </div>
      </section>

      <section aria-label="Restaurant details" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            ["4.8 / 5", "93 Google Reviews"], ["$1–20", "Average price"], ["Buderim", "Queensland"], ["Dine-in · Delivery", "Also drive-through"],
          ].map(([value, label], index) => (
            <div key={value} className={`py-7 ${index % 2 === 0 ? "pr-4" : "border-l border-primary-foreground/15 pl-4"} lg:border-l lg:border-primary-foreground/15 lg:px-8 lg:first:border-l-0 lg:first:pl-0`}>
              <div className="font-serif text-xl text-gold-light sm:text-2xl">{value}</div><div className="mt-1 text-[0.64rem] uppercase tracking-[0.16em] text-primary-foreground/50">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div><p className="eyebrow">Selected dishes</p><h2 className="section-title">A Taste of Aomori</h2><p className="section-copy">A selection of Japanese favourites prepared with thoughtful presentation.</p></div>
            <a href="#menu" className="text-link">View Full Menu <ArrowRight size={16} /></a>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <article key={item.name} className="group">
                <div className={`overflow-hidden ${index % 2 ? "aspect-[4/5] lg:mt-12" : "aspect-[4/5]"}`}><img src={item.image} alt={item.name} width={index === 3 ? 912 : 1200} height={index === 3 ? 1200 : 912} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div>
                <div className="border-b border-border py-5"><div className="flex items-baseline justify-between gap-4"><h3 className="font-serif text-2xl">{item.name}</h3><span className="text-xs text-muted-foreground">0{index + 1}</span></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-surface-alt">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <div className="min-h-[440px] lg:min-h-[700px]"><img src={interiorImage} alt="Refined Japanese restaurant interior with timber and forest green details" width={1408} height={1056} loading="lazy" className="size-full object-cover" /></div>
          <div className="flex items-center px-5 py-16 sm:px-12 lg:px-20">
            <div className="max-w-lg"><p className="eyebrow">About Aomori</p><h2 className="section-title">Simple Ingredients.<br />Beautiful Japanese Flavours.</h2><div className="mt-8 h-px w-16 bg-gold" /><p className="mt-8 text-base leading-8 text-muted-foreground">Aomori Japanese brings Japanese-inspired food and a welcoming dining experience to Buderim.</p><p className="mt-5 text-base leading-8 text-muted-foreground">The restaurant focuses on enjoyable Japanese dishes, thoughtful presentation, and a relaxed atmosphere where customers can dine in, order takeaway, or enjoy delivery.</p><a href="#location" className="text-link mt-9">Plan your visit <ArrowRight size={16} /></a></div>
          </div>
        </div>
      </section>

      <section className="nature-panel relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="relative z-10 max-w-2xl"><p className="eyebrow text-gold">Buderim · Queensland</p><h2 className="font-serif text-5xl leading-tight sm:text-7xl">A Moment of Japan<br /><em className="font-normal text-gold-light">in Buderim</em></h2><p className="mt-7 max-w-lg text-base leading-8 text-primary-foreground/68">A relaxed place to enjoy Japanese flavours, whether you’re dining in or ordering from home.</p></div>
          <div aria-hidden="true" className="botanical-mark">青森</div>
        </div>
      </section>

      <section id="gallery" className="section-pad bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-xl"><p className="eyebrow">Gallery</p><h2 className="section-title">Made to be Savoured</h2></div>
          <div className="mt-12 grid auto-rows-[210px] grid-cols-2 gap-3 md:auto-rows-[280px] md:grid-cols-4">
            <figure className="group col-span-2 row-span-2 overflow-hidden"><img src={sushiImage} alt="Assorted sushi" width={1200} height={912} loading="lazy" className="gallery-image" /></figure>
            <figure className="group row-span-2 overflow-hidden"><img src={riceImage} alt="Japanese rice dish" width={912} height={1200} loading="lazy" className="gallery-image" /></figure>
            <figure className="group overflow-hidden"><img src={takoyakiImage} alt="Takoyaki" width={1200} height={912} loading="lazy" className="gallery-image" /></figure>
            <figure className="group overflow-hidden"><img src={friedImage} alt="Korean fried dish" width={1200} height={912} loading="lazy" className="gallery-image" /></figure>
            <figure className="group col-span-2 overflow-hidden"><img src={interiorImage} alt="Japanese restaurant interior" width={1408} height={1056} loading="lazy" className="gallery-image" /></figure>
            <figure className="group col-span-2 overflow-hidden"><img src={drinksImage} alt="Tea and chilled drink" width={912} height={1200} loading="lazy" className="gallery-image object-[center_60%]" /></figure>
          </div>
        </div>
      </section>

      <section id="menu" className="section-pad bg-surface-alt">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
          <div className="text-center"><p className="eyebrow justify-center">Our menu</p><h2 className="section-title">Japanese Favourites</h2><p className="section-copy mx-auto">Explore the available menu categories. Please contact the restaurant for current dishes and pricing.</p></div>
          <div className="mt-14 grid border-t border-border md:grid-cols-2">
            {menuGroups.map((group, index) => (
              <article key={group.title} className={`grid grid-cols-[auto_1fr] gap-5 border-b border-border py-7 md:px-8 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                <span className="pt-1 text-xs text-gold-dark">{group.number}</span><div><h3 className="font-serif text-2xl">{group.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{group.text}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-6 text-muted-foreground">Menu items, availability and prices may change. Call the restaurant for the latest information.</p>
        </div>
      </section>

      <section className="bg-gold text-primary">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-7 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div><p className="text-[0.65rem] font-bold uppercase tracking-[0.2em]">Dine at home</p><h2 className="mt-2 font-serif text-4xl sm:text-5xl">Hungry? Order Your Favourites.</h2><p className="mt-3 text-sm text-primary/70">Enjoy Aomori Japanese at home or on the go.</p></div>
          <span aria-disabled="true" title="Official ordering link is not yet available" className="inline-flex w-fit cursor-not-allowed items-center gap-3 bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-primary-foreground">Order Online <ArrowRight size={16} /></span>
        </div>
      </section>

      <section id="location" className="section-pad bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
          <div><p className="eyebrow">Visit us</p><h2 className="section-title">Find Aomori Japanese</h2><address className="mt-8 font-serif text-2xl not-italic leading-relaxed">Shop 10/29 Main St<br />Buderim QLD 4556<br />Australia</address><a href="tel:+61492904726" className="mt-5 inline-flex items-center gap-3 text-base text-muted-foreground hover:text-foreground"><Phone size={17} className="text-gold-dark" /> +61 492 904 726</a><div className="mt-8 flex flex-wrap gap-3"><a href="https://www.google.com/maps/search/?api=1&query=Shop%2010%2F29%20Main%20St%2C%20Buderim%20QLD%204556%2C%20Australia" target="_blank" rel="noreferrer" className="button-primary"><MapPin size={16} /> Get Directions</a><a href="tel:+61492904726" className="button-secondary"><Phone size={16} /> Call Us</a></div><div className="mt-10 border-t border-border pt-8"><div className="flex items-center gap-3"><Clock3 size={18} className="text-gold-dark" /><h3 className="font-serif text-xl">Opening Hours</h3></div><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">Monday opens from 10:30. Opening hours may vary. Please check Google Maps or contact us before visiting.</p></div><div className="mt-8 flex items-center gap-4 border-t border-border pt-8"><div className="font-serif text-4xl">4.8</div><div><div className="flex gap-1 text-gold-dark" aria-label="4.8 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} fill="currentColor" />)}</div><p className="mt-1 text-xs text-muted-foreground">93 Google Reviews</p></div></div>
          </div>
          <div className="min-h-[460px] overflow-hidden border border-border bg-muted"><iframe title="Map showing Aomori Japanese in Buderim" src="https://www.google.com/maps?q=Shop%2010%2F29%20Main%20St%2C%20Buderim%20QLD%204556%2C%20Australia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[460px] border-0" /></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
