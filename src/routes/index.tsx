import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Wrench,
  Snowflake,
  Settings,
  ShieldCheck,
  Fan,
  Building2,
  PackageCheck,
  Gauge,
  IndianRupee,
  Handshake,
  Timer,
  BadgeCheck,
  HeartHandshake,
  LifeBuoy,
  ChevronDown,
  Navigation,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import heroImg from "@/assets/hero-technician.jpg";
import shopImg from "@/assets/spare-parts-shop.jpg";
import logoImg from "@/assets/logo-ac.png";

const BUSINESS = "AC Spare Parts & Gas Service";
const PHONE_DISPLAY = "+91 98890 66904";
const TEL = "tel:+919889066904";
const WA =
  "https://wa.me/919889066904?text=Hi%2C%20I%20need%20AC%20service%20%2F%20spare%20parts%20in%20Lucknow.";
const ADDRESS =
  "Raghunath Puram Tiraha, near Gita Puri Gramin Bank, Khargapur, Gomti Nagar, Lucknow, Uttar Pradesh 226010";
const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("AC Spare Parts & Gas Service, Khargapur, Gomti Nagar, Lucknow 226010");
const MAP_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(
    "Raghunath Puram Tiraha, Khargapur, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
  ) +
  "&output=embed";

const TITLE = "AC Spare Parts & Gas Service, Lucknow | AC Repair & Gas Filling";
const DESCRIPTION =
  "Trusted AC spare parts shop & AC service centre in Gomti Nagar, Lucknow. AC repair, gas filling, installation & genuine spare parts. Rated 5.0★. Call +91 98890 66904.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "AC Spare Parts Lucknow, AC Repair Lucknow, AC Gas Filling Lucknow, AC Installation Lucknow, air conditioner spare parts shop Lucknow, AC service Gomti Nagar, AC repair near me, best AC spare parts shop in Lucknow, AC technician Lucknow, air conditioning store Lucknow",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: BUSINESS,
          description: DESCRIPTION,
          telephone: "+91-98890-66904",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Raghunath Puram Tiraha, near Gita Puri Gramin Bank, Khargapur",
            addressLocality: "Gomti Nagar, Lucknow",
            addressRegion: "Uttar Pradesh",
            postalCode: "226010",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "City", name: "Lucknow" },
            { "@type": "Place", name: "Gomti Nagar" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "21:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "17",
            bestRating: "5",
          },
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: PackageCheck,
    title: "AC Spare Parts",
    text: "Compressors, PCBs, fan motors, capacitors, remotes, copper coils and more — in stock for all major brands.",
  },
  {
    icon: Gauge,
    title: "AC Gas Filling",
    text: "R22, R32 and R410A gas charging with leak testing and pressure checks for full cooling recovery.",
  },
  {
    icon: Wrench,
    title: "AC Installation",
    text: "Split and window AC installation with correct piping, levelling and drainage done right the first time.",
  },
  {
    icon: Settings,
    title: "AC Repair",
    text: "Not cooling, water leakage, noise, tripping or PCB faults — honest diagnosis before any repair.",
  },
  {
    icon: Fan,
    title: "AC Maintenance",
    text: "Preventive checkups that keep cooling strong, power bills lower and breakdowns away.",
  },
  {
    icon: Snowflake,
    title: "AC Servicing",
    text: "Deep jet cleaning of filters, coils and blowers for fresh air and faster cooling.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Spare Parts",
    text: "Only original and tested parts — no duplicate items, no shortcuts, clear billing.",
  },
  {
    icon: Building2,
    title: "Home & Commercial AC",
    text: "Homes, shops, offices and clinics across Lucknow — single units to multi-AC setups.",
  },
];

const WHY = [
  {
    icon: BadgeCheck,
    title: "Genuine AC Spare Parts",
    text: "Brand-original parts, properly tested before they leave the counter.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    text: "Fair shop rates with no hidden charges added later.",
  },
  {
    icon: Handshake,
    title: "Honest Diagnosis",
    text: "We tell you the real fault — and only what actually needs replacing.",
  },
  {
    icon: Wrench,
    title: "Experienced Technicians",
    text: "Years of hands-on work on every major AC brand and model.",
  },
  {
    icon: Timer,
    title: "Fast Service",
    text: "Quick turnaround so your AC is cooling again the same day where possible.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    text: "Clean, careful fitting and finishing on every installation and repair.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-First Approach",
    text: "Clear explanations, patient guidance and zero pressure to buy.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable After-Service",
    text: "We stay available after the job for follow-up support.",
  },
];

const REVIEWS = [
  {
    name: "Anees Khan",
    when: "2 months ago",
    text: "Always get better experience here. All staff very technically good and knowledgeable, explain only genuine problems and give recommendations. Quick installation and no hidden charges!",
  },
  {
    name: "Ankit Verma",
    when: "5 months ago",
    text: "Excellent AC spare parts shop. All essential AC spare parts are available here with good quality and reasonable prices. The owner is very helpful and provides honest guidance.",
  },
  {
    name: "Farzan Ahmad",
    when: "4 months ago",
    text: "Very good quality AC parts.",
  },
  {
    name: "Haseena Siddique",
    when: "2 months ago",
    text: "Best spare parts shop, everything is available at a very affordable price. Must visit.",
  },
];

const FAQS = [
  {
    q: "Where is your AC spare parts shop in Lucknow located?",
    a: "We are at Raghunath Puram Tiraha, near Gita Puri Gramin Bank, Khargapur, Gomti Nagar, Lucknow, Uttar Pradesh 226010 — easy to reach from all of Gomti Nagar.",
  },
  {
    q: "Do you provide AC gas filling in Lucknow?",
    a: "Yes. We do AC gas filling and top-up for split and window ACs including R22, R32 and R410A, along with leak testing so the gas does not drain again.",
  },
  {
    q: "Are your AC spare parts genuine?",
    a: "We supply genuine, tested AC spare parts for all major brands — compressors, PCBs, fan motors, capacitors, remotes and copper coils — with clear billing.",
  },
  {
    q: "Do you offer AC repair near me at home?",
    a: "Yes, our technicians handle on-site AC repair, servicing and installation for homes and commercial spaces across Lucknow. Call us to book a visit.",
  },
  {
    q: "What are your business hours?",
    a: "We are open daily from 9:00 AM to 9:00 PM, including weekends.",
  },
  {
    q: "How do I get a price estimate?",
    a: "Call or WhatsApp us with your AC brand, model and the problem. We share an honest estimate before starting any work.",
  },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={TEL}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[var(--shadow-cta)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <Phone className="size-5" aria-hidden="true" />
      Call Now: {PHONE_DISPLAY}
    </a>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-[var(--shadow-float)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      WhatsApp Us
    </a>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-star text-star" />
      ))}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p> : null}
    </Reveal>
  );
}

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt={`${BUSINESS} logo`}
              width={40}
              height={40}
              className="size-9 rounded-lg"
            />
            <span className="text-sm font-bold leading-tight sm:text-base">
              AC Spare Parts
              <span className="block text-xs font-medium text-muted-foreground">
                &amp; Gas Service, Lucknow
              </span>
            </span>
          </a>
          <nav aria-label="Main" className="ml-auto hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={TEL}
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-cta)] lg:ml-4"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call Now</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-surface relative overflow-hidden text-primary-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold ring-1 ring-primary-foreground/20">
                <MapPin className="size-3.5" aria-hidden="true" />
                Gomti Nagar, Lucknow · Open Daily 9 AM – 9 PM
              </p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
                AC Spare Parts, Repair &amp; Gas Filling in Lucknow
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Your trusted neighbourhood air conditioning store and AC service centre in
                Khargapur, Gomti Nagar. Genuine parts, honest diagnosis and experienced AC
                technicians — for homes and businesses across Lucknow.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CallButton />
                <WhatsAppButton />
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Stars />
                  <strong>5.0</strong>
                  <span className="text-primary-foreground/75">on 17 Google reviews</span>
                </span>
                <span className="inline-flex items-center gap-2 text-primary-foreground/85">
                  <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                  Genuine parts only
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImg}
                alt="AC technician servicing a split air conditioner in Lucknow"
                width={1280}
                height={960}
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-float)]"
              />
            </div>
          </div>
        </section>

        {/* Quick action strip */}
        <section aria-label="Quick actions" className="mx-auto mt-6 max-w-6xl px-4">
          <div className="card-surface grid gap-3 p-4 sm:grid-cols-3">
            <a
              href={TEL}
              className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 transition-colors hover:bg-muted"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Call {PHONE_DISPLAY}</span>
            </a>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 transition-colors hover:bg-muted"
            >
              <Navigation className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Get Directions</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 transition-colors hover:bg-muted"
            >
              <Wrench className="size-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold">Request Service</span>
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <Reveal>
              <img
                src={shopImg}
                alt="Shelves of genuine AC spare parts at our Lucknow shop"
                width={1280}
                height={864}
                loading="lazy"
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                A local AC shop Lucknow customers keep coming back to
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                AC Spare Parts &amp; Gas Service is an air conditioning store and AC service centre
                in Khargapur, Gomti Nagar. We keep a wide stock of genuine air conditioner spare
                parts and handle AC repair, gas filling, installation, servicing and maintenance
                ourselves.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Customers trust us because we explain the actual fault, recommend only what is
                needed and charge fairly. That is how we earned a 5.0-star Google rating from our
                neighbours in Lucknow.
              </p>
              <dl className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { k: "5.0★", v: "Google rating" },
                  { k: "17+", v: "Verified reviews" },
                  { k: "9–9", v: "Open daily" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl bg-secondary px-3 py-4 text-center">
                    <dt className="text-xl font-bold text-primary-deep">{s.k}</dt>
                    <dd className="mt-1 text-xs font-medium text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-secondary/60 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading
              eyebrow="Our Services"
              title="AC repair, gas filling & spare parts under one roof"
              text="From a single capacitor to a full AC installation — everything you need for cooling that works, all year."
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 60}>
                  <article className="card-surface h-full p-6">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-10 text-center" delay={80}>
              <CallButton />
            </Reveal>
          </div>
        </section>

        {/* Why choose us */}
        <section id="why-us" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeading eyebrow="Why Choose Us" title="Honest work, genuine parts, fair prices" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent-foreground">
                    <w.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-base font-bold">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-secondary/60 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeading
              eyebrow="Customer Reviews"
              title="Rated 5.0 out of 5 by our customers"
              text="Real feedback from Google reviews of our Lucknow shop."
            />
            <Reveal className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-4 rounded-2xl bg-card px-6 py-4 shadow-[var(--shadow-card)]">
              <p className="text-4xl font-extrabold text-primary-deep">5.0</p>
              <div>
                <Stars />
                <p className="text-sm text-muted-foreground">17 Google reviews</p>
              </div>
            </Reveal>
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {REVIEWS.map((r, i) => (
                <Reveal as="li" key={r.name} delay={i * 70}>
                  <figure className="card-surface h-full p-6">
                    <Stars />
                    <blockquote className="mt-3 text-base leading-relaxed">“{r.text}”</blockquote>
                    <figcaption className="mt-4 text-sm font-semibold">
                      {r.name}
                      <span className="ml-2 font-normal text-muted-foreground">{r.when}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Hours + Map + Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Visit or Contact Us"
            title="Find us in Khargapur, Gomti Nagar"
            text="Walk in for spare parts or call us to book AC repair, gas filling and installation anywhere in Lucknow."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="card-surface h-full space-y-6 p-6">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                    Address
                  </h3>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
                    {ADDRESS}
                  </address>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <Clock className="size-5 text-primary" aria-hidden="true" />
                    Business Hours
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {[
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                      "Sunday",
                    ].map((d) => (
                      <li
                        key={d}
                        className="flex justify-between gap-4 border-b border-border/70 pb-1.5"
                      >
                        <span className="text-muted-foreground">{d}</span>
                        <span className="font-semibold">9:00 AM – 9:00 PM</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                    Open all 7 days, including holidays
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                    Phone &amp; WhatsApp
                  </h3>
                  <a href={TEL} className="mt-2 block text-lg font-bold text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex flex-wrap gap-3">
                  <CallButton />
                  <WhatsAppButton />
                  <a
                    href={DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    <Navigation className="size-5" aria-hidden="true" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-3" delay={80}>
              <div className="card-surface h-full overflow-hidden p-0">
                <iframe
                  title={`Google Map location of ${BUSINESS} in Gomti Nagar, Lucknow`}
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* WhatsApp CTA band */}
        <section aria-label="WhatsApp enquiry" className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
          <Reveal>
            <div className="hero-surface rounded-3xl px-6 py-12 text-center text-primary-foreground">
              <h2 className="text-3xl font-bold sm:text-4xl">AC not cooling? Message us now.</h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/85">
                Send your AC brand, model and the issue on WhatsApp — we reply with an honest
                estimate and part availability.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <WhatsAppButton />
                <a
                  href={TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground/10 px-6 py-3.5 text-base font-semibold ring-1 ring-primary-foreground/25 transition-colors hover:bg-primary-foreground/20"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-secondary/60 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4">
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
            <ul className="mt-10 space-y-3">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q} className="card-surface overflow-hidden">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(open ? null : i)}
                        aria-expanded={open}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold"
                      >
                        {f.q}
                        <ChevronDown
                          className={`size-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div id={`faq-panel-${i}`} hidden={!open} className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-deep py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt=""
                width={36}
                height={36}
                loading="lazy"
                className="size-9 rounded-lg"
              />
              <span className="text-base font-bold">{BUSINESS}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              AC spare parts shop and AC service centre in Gomti Nagar, Lucknow. AC repair, gas
              filling, installation and genuine spare parts for homes and businesses.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
              <Stars /> 5.0 · 17 reviews
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Areas We Serve
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>Gomti Nagar</li>
              <li>Khargapur</li>
              <li>Vibhuti Khand</li>
              <li>Indira Nagar</li>
              <li>Chinhat &amp; nearby Lucknow</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-primary-foreground/80">
              <p>{ADDRESS}</p>
              <p>
                <a href={TEL} className="font-semibold text-primary-foreground">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>Open daily · 9:00 AM – 9:00 PM</p>
            </address>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/15 px-4 pt-6 text-xs text-primary-foreground/65">
          © {new Date().getFullYear()} {BUSINESS}, Lucknow. All rights reserved.
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={TEL}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
        >
          <Phone className="size-4" aria-hidden="true" /> Call Now
        </a>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-bold text-whatsapp-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
