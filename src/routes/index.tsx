import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bus,
  CalendarDays,
  ChevronDown,
  Headphones,
  Instagram,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import lalitHero from "@/assets/lalit-hero.jpg";
import lalitFleet1 from "@/assets/lalit-fleet-1.jpg";
import lalitFleet2 from "@/assets/lalit-fleet-2.jpg";
import lalitClassic1 from "@/assets/lalit-classic-1.jpg";
import lalitDepot from "@/assets/lalit-depot.jpg";
import lalitSnow1 from "@/assets/lalit-snow-1.jpg";
import lalitSnow2 from "@/assets/lalit-snow-2.jpg";
import lalitRed from "@/assets/lalit-red.jpg";
import lalitNight from "@/assets/lalit-night.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Lalit Bus Service Shimla | Luxury Bus Rental | Tempo Traveller | Tour Packages",
      },
      {
        name: "description",
        content:
          "Lalit Bus Service Shimla offers luxury bus rental, tempo traveller booking, corporate transport, wedding buses, Char Dham tours, family trips, and customized travel services across Himachal Pradesh and North India.",
      },
      {
        name: "keywords",
        content:
          "Lalit Bus Service Shimla, Bus Rental Shimla, Luxury Bus Shimla, Tempo Traveller Shimla, Wedding Bus Service, Corporate Bus Rental, Char Dham Tour, Tour Operator Shimla, Luxury Coach Rental, Bus Booking Shimla, North India Tour Packages, Group Transport Himachal, Private Bus Rental, Tour Bus Shimla, Fleet Rental Shimla",
      },
      {
        property: "og:title",
        content:
          "Lalit Bus Service Shimla | Luxury Bus Rental | Tempo Traveller | Tour Packages",
      },
      {
        property: "og:description",
        content:
          "Luxury buses, tempo travellers, wedding transport, corporate trips, Char Dham journeys, and custom North India tours from Shimla.",
      },
      { property: "og:url", content: "/" },
      { property: "twitter:title", content: "Lalit Bus Service Shimla" },
      {
        property: "twitter:description",
        content:
          "Premium bus rental and curated tour packages across Himachal Pradesh and North India.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Lalit Bus Service Shimla",
          description:
            "Luxury bus rental, group transport, wedding travel, and customized tour services across North India.",
          telephone: ["+91 82194 00001", "+91 92150 00001"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near ISBT Tutikandi",
            addressLocality: "Shimla",
            addressRegion: "Himachal Pradesh",
            postalCode: "171001",
            addressCountry: "IN",
          },
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    let current = 0;
    const totalFrames = 48;
    const tick = () => {
      frame += 1;
      current = Math.round((target * frame) / totalFrames);
      setValue(current);
      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [start, target]);

  return value;
}

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counterVisible, setCounterVisible] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(current > 40);
      setProgress(max > 0 ? (current / max) * 100 : 0);

      const statsSection = document.getElementById("stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setCounterVisible(true);
      }
    };

    const onMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % 3);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const experienceCount = useCountUp(10, counterVisible);
  const customersCount = useCountUp(5000, counterVisible);
  const vehiclesCount = useCountUp(100, counterVisible);
  const tripsCount = useCountUp(10000, counterVisible);

  const activeTestimonialCopy = useMemo(
    () =>
      [
        {
          name: "Amit Sharma",
          title: "Corporate Travel Coordinator",
          quote:
            "Lalit Bus Service handled our executive group movement with clean coaches, punctual reporting, and a very premium onboard experience.",
        },
        {
          name: "Neha Thakur",
          title: "Wedding Planner, Shimla",
          quote:
            "From guest pickups to wedding day transfers, the service felt polished, reliable, and genuinely luxurious for our families.",
        },
        {
          name: "Rohit Verma",
          title: "Family Tour Guest",
          quote:
            "Our Himachal trip was seamless. Comfortable seating, helpful staff, and a bus that looked every bit like a premium tour vehicle.",
        },
      ][activeTestimonial],
    [activeTestimonial],
  );

  return (
    <>
      {loading ? (
        <div className="page-loader" aria-label="Loading website">
          <div className="loader-ring" />
          <p className="loader-text">Lalit Bus Service</p>
        </div>
      ) : null}

      <div className="pointer-glow" style={{ left: pointer.x, top: pointer.y }} aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <a
        href="https://wa.me/918219400001"
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-action-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <Instagram className="size-5" />
      </a>
      <a href="tel:+918219400001" className="floating-action floating-action-call" aria-label="Call now">
        <Phone className="size-5" />
      </a>

      <div className="min-h-screen bg-background text-foreground">
        <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
          <div className="site-shell header-row">
            <a href="#home" className="brand-mark" aria-label="Lalit Bus Service home">
              <span className="brand-kicker">Shimla</span>
              <span className="brand-title">Lalit Bus Service</span>
            </a>
            <nav className="desktop-nav" aria-label="Primary">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#fleet" className="nav-link">Fleet</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#packages" className="nav-link">Packages</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>
            <Button asChild variant="hero" size="hero">
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </header>

        <main>
          <section id="home" className="hero-section section-spacing">
            <div className="hero-backdrop">
              <img src={lalitHero} alt="Luxury Lalit Bus Service coaches on a mountain road near Shimla" className="hero-image" />
              <div className="hero-overlay" />
            </div>
            <div className="hero-mesh hero-mesh-a" aria-hidden="true" />
            <div className="hero-mesh hero-mesh-b" aria-hidden="true" />
            <div className="site-shell hero-layout">
              <div className="hero-copy reveal-up">
                <div className="eyebrow-pill">
                  <Sparkles className="size-4" />
                  Luxury transport & curated tours
                </div>
                <h1 className="hero-title">Premium Bus Rental & Tour Services Across North India</h1>
                <p className="hero-subtitle">
                  Luxury Coaches • Tempo Travellers • Group Tours • Wedding Transport • Corporate Trips
                </p>
                <div className="hero-actions">
                  <Button asChild variant="hero" size="hero">
                    <a href="#contact">
                      Book Your Trip
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="glass" size="hero">
                    <a href="#fleet">Explore Fleet</a>
                  </Button>
                </div>
                <div className="hero-meta">
                  <div className="hero-meta-card glass-panel">
                    <Bus className="size-5 text-primary" />
                    <div>
                      <strong>Luxury fleet</strong>
                      <span>Coaches, mini buses & travellers</span>
                    </div>
                  </div>
                  <div className="hero-meta-card glass-panel floating-card-delayed">
                    <Waves className="size-5 text-primary" />
                    <div>
                      <strong>Curated journeys</strong>
                      <span>Himachal to pan-India road trips</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-spotlight reveal-right">
                <div className="hero-vehicle-card glass-panel tilt-card">
                  <img
                    src={lalitNight}
                    alt="Premium Lalit coach with vibrant interior lighting"
                    className="hero-vehicle-image"
                    loading="eager"
                  />
                  <div className="hero-vehicle-content">
                    <span className="luxury-badge">Signature Coach</span>
                    <h2>Executive comfort with standout road presence</h2>
                    <p>Designed for destination weddings, corporate tours, pilgrim journeys, and premium family travel.</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
              <span>Scroll</span>
              <ChevronDown className="size-4" />
            </a>
          </section>

          <section id="about" className="section-spacing section-light">
            <div className="site-shell about-grid">
              <div className="section-copy reveal-left">
                <span className="section-label">About Lalit Bus Service</span>
                <h2 className="section-title">Trusted premium road travel from Shimla, crafted for comfort and confidence.</h2>
                <p className="section-description">
                  Lalit Bus Service is one of Shimla&apos;s trusted private bus rental and tour operators providing luxury transport solutions for group travel, corporate events, weddings, pilgrimages and customized tours across North India.
                </p>
                <div className="about-points">
                  <div className="info-chip">
                    <ShieldCheck className="size-4" />
                    Professional operations
                  </div>
                  <div className="info-chip">
                    <CalendarDays className="size-4" />
                    Flexible trip planning
                  </div>
                  <div className="info-chip">
                    <Headphones className="size-4" />
                    24x7 guest support
                  </div>
                </div>
              </div>
              <div className="about-media reveal-right">
                <div className="image-frame image-frame-large">
                  <img src={lalitFleet2} alt="Luxury Lalit bus parked for premium tour service" loading="lazy" />
                </div>
                <div className="glass-stat-card floating-card">
                  <span>North India Specialist</span>
                  <strong>Luxury transport for every group journey</strong>
                </div>
              </div>
            </div>
          </section>

          <section id="fleet" className="section-spacing">
            <div className="site-shell">
              <div className="section-head reveal-up">
                <span className="section-label">Fleet</span>
                <h2 className="section-title">A versatile fleet built for premium group movement.</h2>
              </div>
              <div className="fleet-grid">
                <article className="fleet-card premium-card reveal-up tilt-card">
                  <div className="fleet-media">
                    <img src={lalitFleet1} alt="Mini bus and luxury coach from Lalit Bus Service" loading="lazy" />
                    <span className="luxury-badge">Mini Bus</span>
                  </div>
                  <div className="fleet-body">
                    <h3>Mini Bus</h3>
                    <p>Smart, agile and comfortable for city transfers, hill routes and compact group tours.</p>
                    <ul className="feature-list">
                      <li>Ideal for smaller groups</li>
                      <li>Comfortable seating</li>
                      <li>Local and intercity routes</li>
                    </ul>
                    <div className="fleet-meta-row">
                      <span>Capacity</span>
                      <strong>15–25 Guests</strong>
                    </div>
                    <Button asChild variant="outlineLuxury">
                      <a href="#contact">Enquire Now</a>
                    </Button>
                  </div>
                </article>

                <article className="fleet-card premium-card reveal-up tilt-card">
                  <div className="fleet-media">
                    <img src={lalitNight} alt="Luxury night-lit coach bus by Lalit Bus Service" loading="lazy" />
                    <span className="luxury-badge">Luxury Coach</span>
                  </div>
                  <div className="fleet-body">
                    <h3>Luxury Coach</h3>
                    <p>Elevated interiors and a commanding exterior presence for premium experiences and large groups.</p>
                    <ul className="feature-list">
                      <li>Executive road-trip comfort</li>
                      <li>Premium ambience</li>
                      <li>Ideal for weddings and corporate travel</li>
                    </ul>
                    <div className="fleet-meta-row">
                      <span>Capacity</span>
                      <strong>30–45 Guests</strong>
                    </div>
                    <Button asChild variant="outlineLuxury">
                      <a href="#contact">View Availability</a>
                    </Button>
                  </div>
                </article>

                <article className="fleet-card premium-card reveal-up tilt-card">
                  <div className="fleet-media">
                    <img src={lalitRed} alt="Tempo traveller style premium vehicle from Lalit Bus Service" loading="lazy" />
                    <span className="luxury-badge">Tempo Traveller</span>
                  </div>
                  <div className="fleet-body">
                    <h3>Tempo Traveller</h3>
                    <p>Flexible premium mobility for families, airport transfers, pilgrimages and custom circuits.</p>
                    <ul className="feature-list">
                      <li>Tour-ready interiors</li>
                      <li>Best for flexible itineraries</li>
                      <li>Comfortable regional travel</li>
                    </ul>
                    <div className="fleet-meta-row">
                      <span>Capacity</span>
                      <strong>9–17 Guests</strong>
                    </div>
                    <Button asChild variant="outlineLuxury">
                      <a href="#contact">Book This Vehicle</a>
                    </Button>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="section-spacing section-light">
            <div className="site-shell">
              <div className="section-head reveal-up">
                <span className="section-label">Why Choose Us</span>
                <h2 className="section-title">Operationally reliable, visually premium, and built for guest comfort.</h2>
              </div>
              <div className="benefit-grid">
                <div className="benefit-card premium-card reveal-up"><ShieldCheck className="size-6" /><h3>Experienced Drivers</h3></div>
                <div className="benefit-card premium-card reveal-up"><Bus className="size-6" /><h3>Well Maintained Fleet</h3></div>
                <div className="benefit-card premium-card reveal-up"><Star className="size-6" /><h3>Luxury Seating</h3></div>
                <div className="benefit-card premium-card reveal-up"><Sparkles className="size-6" /><h3>Affordable Pricing</h3></div>
                <div className="benefit-card premium-card reveal-up"><MapPin className="size-6" /><h3>GPS Enabled</h3></div>
                <div className="benefit-card premium-card reveal-up"><Waves className="size-6" /><h3>All India Permit</h3></div>
                <div className="benefit-card premium-card reveal-up"><Headphones className="size-6" /><h3>24x7 Support</h3></div>
                <div className="benefit-card premium-card reveal-up"><Users className="size-6" /><h3>Safe & Comfortable Travel</h3></div>
              </div>
            </div>
          </section>

          <section id="services" className="section-spacing">
            <div className="site-shell">
              <div className="section-head reveal-up">
                <span className="section-label">Services</span>
                <h2 className="section-title">Purpose-built transport services for every travel occasion.</h2>
              </div>
              <div className="service-stack">
                <article className="service-row reveal-left">
                  <div className="service-media image-frame"><img src={lalitDepot} alt="Lalit buses parked and ready for service" loading="lazy" /></div>
                  <div className="service-copy"><h3>Corporate Tours</h3><p>Professional group transportation for corporate events, retreats, conferences, and executive movement.</p></div>
                </article>
                <article className="service-row service-row-reverse reveal-right">
                  <div className="service-media image-frame"><img src={lalitRed} alt="Premium Lalit vehicle suitable for wedding transport" loading="lazy" /></div>
                  <div className="service-copy"><h3>Wedding Transportation</h3><p>Elegant guest transfers and event-day movement planned with punctuality and polished hospitality.</p></div>
                </article>
                <article className="service-row reveal-left">
                  <div className="service-media image-frame"><img src={lalitSnow1} alt="Lalit bus operating in winter weather" loading="lazy" /></div>
                  <div className="service-copy"><h3>Char Dham Yatra</h3><p>Reliable, comfortable pilgrim transport with route readiness for long-distance religious journeys.</p></div>
                </article>
                <article className="service-row service-row-reverse reveal-right">
                  <div className="service-media image-frame"><img src={lalitFleet2} alt="Family tour ready luxury bus by Lalit Bus Service" loading="lazy" /></div>
                  <div className="service-copy"><h3>Family Tours</h3><p>Comfort-first travel for holidays, reunions, and custom itineraries through Himachal and North India.</p></div>
                </article>
                <article className="service-row reveal-left">
                  <div className="service-media image-frame"><img src={lalitClassic1} alt="School and excursion friendly Lalit bus" loading="lazy" /></div>
                  <div className="service-copy"><h3>School Trips & College Excursions</h3><p>Safe, coordinated group movement for institutions, educational travel, and long-distance excursions.</p></div>
                </article>
                <article className="service-row service-row-reverse reveal-right">
                  <div className="service-media image-frame"><img src={lalitSnow2} alt="Bus suitable for industrial visits and seasonal travel" loading="lazy" /></div>
                  <div className="service-copy"><h3>Industrial Visits, Airport Transfers & Customized Group Tours</h3><p>Flexible vehicle deployment for logistics-heavy movement, airport pickups, and personalized travel plans.</p></div>
                </article>
              </div>
            </div>
          </section>

          <section id="packages" className="section-spacing section-light">
            <div className="site-shell">
              <div className="section-head reveal-up">
                <span className="section-label">Tour Packages</span>
                <h2 className="section-title">Signature journeys designed around North India&apos;s most-loved destinations.</h2>
              </div>
              <div className="package-grid">
                <article className="package-card premium-card reveal-up"><span className="price-badge">Popular</span><h3>Shimla Tour</h3><p>Hill town exploration with flexible local movement.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Scenic</span><h3>Manali Tour</h3><p>Comfort travel for mountain holidays and family groups.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Leisure</span><h3>Kullu</h3><p>Relaxed valley travel with custom stop planning.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Youth Pick</span><h3>Kasol</h3><p>Flexible transport for adventure and leisure itineraries.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Expedition</span><h3>Spiti Valley</h3><p>Road-trip ready journeys through dramatic Himalayan routes.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Pilgrimage</span><h3>Char Dham</h3><p>Comfortable long-route religious travel for group pilgrims.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Classic</span><h3>Golden Triangle</h3><p>Premium group movement across India&apos;s iconic circuit.</p></article>
                <article className="package-card premium-card reveal-up"><span className="price-badge">Tailored</span><h3>Custom Tour</h3><p>Fully personalized routes, stops, schedules and vehicle planning.</p></article>
              </div>
            </div>
          </section>

          <section id="gallery" className="section-spacing">
            <div className="site-shell">
              <div className="section-head reveal-up">
                <span className="section-label">Gallery</span>
                <h2 className="section-title">Moments from the road, the hills, the city, and premium guest journeys.</h2>
              </div>
              <div className="gallery-masonry">
                <figure className="gallery-item gallery-tall reveal-up"><img src={lalitHero} alt="Three Lalit buses lined up on a sunny mountain road" loading="lazy" /><figcaption>Mountain road presence</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitFleet1} alt="Two Lalit luxury buses parked near trees" loading="lazy" /><figcaption>Fleet showcase</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitFleet2} alt="Side profile of a premium Lalit coach" loading="lazy" /><figcaption>Luxury exterior design</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitClassic1} alt="Classic Lalit bus in Shimla city" loading="lazy" /><figcaption>City route readiness</figcaption></figure>
                <figure className="gallery-item gallery-wide reveal-up"><img src={lalitDepot} alt="Multiple Lalit buses in a depot setting" loading="lazy" /><figcaption>Ready-to-deploy operations</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitSnow1} alt="Lalit bus in snowfall conditions" loading="lazy" /><figcaption>Winter travel capability</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitSnow2} alt="Green and white Lalit bus on a snowy evening" loading="lazy" /><figcaption>Seasonal route service</figcaption></figure>
                <figure className="gallery-item reveal-up"><img src={lalitRed} alt="Red-accented Lalit premium vehicle" loading="lazy" /><figcaption>Custom styled traveller</figcaption></figure>
                <figure className="gallery-item gallery-wide reveal-up"><img src={lalitNight} alt="Night-lit Lalit luxury coach with vibrant lighting" loading="lazy" /><figcaption>Signature luxury coach</figcaption></figure>
              </div>
            </div>
          </section>

          <section id="testimonials" className="section-spacing section-light">
            <div className="site-shell testimonials-grid">
              <div className="section-copy reveal-left">
                <span className="section-label">Testimonials</span>
                <h2 className="section-title">Guests remember the comfort. Organizers remember the reliability.</h2>
              </div>
              <div className="testimonial-card premium-card glass-panel reveal-right">
                <Quote className="quote-icon" />
                <p className="testimonial-quote">“{activeTestimonialCopy.quote}”</p>
                <div className="testimonial-author">
                  <strong>{activeTestimonialCopy.name}</strong>
                  <span>{activeTestimonialCopy.title}</span>
                </div>
                <div className="testimonial-dots" aria-label="Testimonial slider indicators">
                  <button className={activeTestimonial === 0 ? "dot active" : "dot"} onClick={() => setActiveTestimonial(0)} aria-label="Show first review" />
                  <button className={activeTestimonial === 1 ? "dot active" : "dot"} onClick={() => setActiveTestimonial(1)} aria-label="Show second review" />
                  <button className={activeTestimonial === 2 ? "dot active" : "dot"} onClick={() => setActiveTestimonial(2)} aria-label="Show third review" />
                </div>
              </div>
            </div>
          </section>

          <section id="stats" className="section-spacing stats-band">
            <div className="site-shell stats-grid">
              <div className="stat-card premium-card reveal-up"><strong>{experienceCount}+</strong><span>Years Experience</span></div>
              <div className="stat-card premium-card reveal-up"><strong>{customersCount}+</strong><span>Happy Customers</span></div>
              <div className="stat-card premium-card reveal-up"><strong>{vehiclesCount}+</strong><span>Luxury Vehicles</span></div>
              <div className="stat-card premium-card reveal-up"><strong>{tripsCount}+</strong><span>Successful Trips</span></div>
            </div>
          </section>

          <section className="section-spacing cta-band">
            <div className="site-shell cta-panel glass-panel reveal-up">
              <div>
                <span className="section-label">Booking CTA</span>
                <h2 className="section-title">Ready to move your guests in comfort, style, and confidence?</h2>
              </div>
              <div className="cta-actions">
                <Button asChild variant="hero" size="hero"><a href="tel:+918219400001">Call Now</a></Button>
                <Button asChild variant="glass" size="hero"><a href="https://wa.me/918219400001" target="_blank" rel="noreferrer">WhatsApp</a></Button>
                <Button asChild variant="outlineLuxury" size="hero"><a href="#contact">Book Your Bus</a></Button>
              </div>
            </div>
          </section>

          <section id="contact" className="section-spacing section-light">
            <div className="site-shell contact-grid">
              <div className="contact-copy reveal-left">
                <span className="section-label">Contact</span>
                <h2 className="section-title">Talk to Lalit Bus Service about your next group journey.</h2>
                <div className="contact-list">
                  <a href="tel:+918219400001" className="contact-item premium-card"><Phone className="size-5" /><span>+91 82194 00001</span></a>
                  <a href="tel:+919215000001" className="contact-item premium-card"><Phone className="size-5" /><span>+91 92150 00001</span></a>
                  <div className="contact-item premium-card"><MapPin className="size-5" /><span>Near ISBT Tutikandi, Shimla, Himachal Pradesh – 171001</span></div>
                  <a href="https://www.instagram.com/_lalit_bus_service_shimla/" target="_blank" rel="noreferrer" className="contact-item premium-card"><Instagram className="size-5" /><span>@_lalit_bus_service_shimla</span></a>
                </div>
              </div>
              <form className="contact-form premium-card reveal-right">
                <div className="form-grid">
                  <label><span>Name</span><input type="text" name="name" placeholder="Your full name" /></label>
                  <label><span>Phone</span><input type="tel" name="phone" placeholder="Phone number" /></label>
                  <label><span>Email</span><input type="email" name="email" placeholder="Email address" /></label>
                  <label><span>Travel Date</span><input type="date" name="date" /></label>
                  <label><span>Passengers</span><input type="number" name="passengers" placeholder="Number of guests" /></label>
                  <label><span>Pickup</span><input type="text" name="pickup" placeholder="Pickup location" /></label>
                  <label><span>Destination</span><input type="text" name="destination" placeholder="Destination" /></label>
                  <label className="form-span-2"><span>Message</span><textarea name="message" rows={5} placeholder="Tell us about your route, timing and vehicle preference" /></label>
                </div>
                <Button type="submit" variant="hero" size="hero" className="submit-button">
                  Send Booking Request
                  <ArrowRight className="size-4" />
                </Button>
              </form>
            </div>
          </section>

          <section className="section-spacing map-section">
            <div className="site-shell">
              <div className="map-frame premium-card reveal-up">
                <iframe
                  title="Lalit Bus Service Shimla location"
                  src="https://www.google.com/maps?q=ISBT%20Tutikandi%20Shimla&z=14&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>

          <section className="section-spacing instagram-section">
            <div className="site-shell instagram-panel premium-card reveal-up">
              <div>
                <span className="section-label">Instagram</span>
                <h2 className="section-title">Follow the road stories, new fleet moments, and travel highlights.</h2>
              </div>
              <Button asChild variant="hero" size="hero">
                <a href="https://www.instagram.com/_lalit_bus_service_shimla/" target="_blank" rel="noreferrer">
                  Follow Us
                  <Instagram className="size-4" />
                </a>
              </Button>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="site-shell footer-grid">
            <div>
              <a href="#home" className="brand-mark footer-brand">
                <span className="brand-kicker">Luxury Road Travel</span>
                <span className="brand-title">Lalit Bus Service</span>
              </a>
              <p className="footer-copy">Premium bus rental, group transport, and curated tours from Shimla to destinations across North India.</p>
            </div>
            <div>
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="#services">Services</a>
                <a href="#fleet">Fleet</a>
                <a href="#contact">Contact</a>
                <a href="#gallery">Gallery</a>
              </div>
            </div>
            <div>
              <h3>Contact</h3>
              <div className="footer-links">
                <a href="tel:+918219400001">+91 82194 00001</a>
                <a href="tel:+919215000001">+91 92150 00001</a>
                <a href="https://www.instagram.com/_lalit_bus_service_shimla/" target="_blank" rel="noreferrer">Instagram</a>
                <span>Near ISBT Tutikandi, Shimla</span>
              </div>
            </div>
          </div>
          <a href="#home" className="back-to-top" aria-label="Back to top">↑</a>
          <div className="site-shell footer-bottom">
            <p>© 2026 Lalit Bus Service Shimla. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
