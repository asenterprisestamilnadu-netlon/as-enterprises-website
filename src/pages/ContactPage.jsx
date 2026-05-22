import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import BookingForm from '../components/BookingForm';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';
import { siteConfig } from '../data/siteConfig';
import { buildPhoneLink, buildWhatsAppLink, buildMailLink } from '../utils/constants';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="AS Enterprises | Contact — Chennai Mosquito Mesh"
        description="Contact AS Enterprises for mosquito mesh installation in Chennai. Call, WhatsApp or email us for a free home inspection."
        canonical="https://asenterprises.in/contact"
        keywords="contact mosquito mesh Chennai, AS Enterprises Kodungaiyur, mosquito mesh phone number Chennai"
      />

      <PageHeader
        title="Contact Us"
        description="Reach out for a free inspection, a quick quote, or any questions. We respond within 30 minutes during working hours."
      />

      <section className="bg-white py-10">
        <div className="site-container grid gap-6 lg:grid-cols-3">
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            title="Call Us"
            href={buildPhoneLink()}
            cta={siteConfig.phoneDisplay}
            sub="Mon – Sun, 8 AM – 8 PM"
          />
          <ContactCard
            icon={<WhatsAppIcon className="h-5 w-5" />}
            title="WhatsApp"
            href={buildWhatsAppLink()}
            external
            cta="Chat on WhatsApp"
            sub="Fastest way to reach us"
          />
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            title="Email"
            href={buildMailLink()}
            cta={siteConfig.email}
            sub="We reply within a few hours"
          />
        </div>
      </section>

      <section className="bg-primary-50/40 py-10 sm:py-14">
        <div className="site-container grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex h-full flex-col rounded-[20px] border border-slate-100 bg-white p-7 shadow-soft sm:p-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-[26px]">
                Visit Our Office
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Drop by — we&apos;re happy to walk you through mesh samples in person.
              </p>
            </div>

            <address className="mt-7 flex-1 space-y-5 not-italic">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <MapPin className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="mt-1 text-slate-600">
                    {siteConfig.address.line1},<br />
                    {siteConfig.address.line2},<br />
                    {siteConfig.address.city} - {siteConfig.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <Clock className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-slate-900">Working Hours</p>
                  <p className="mt-1 text-slate-600">{siteConfig.hours}</p>
                </div>
              </div>
            </address>

            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-800"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>

          <div className="h-full min-h-[360px] overflow-hidden rounded-[20px] border border-slate-100 bg-white shadow-soft">
            <iframe
              title="AS Enterprises – Kodungaiyur, Chennai"
              src={siteConfig.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              style={{ border: 0, minHeight: 360 }}
            />
          </div>
        </div>
      </section>

      <BookingForm />
    </>
  );
}

function ContactCard({ icon, title, href, cta, sub, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-cardHover"
    >
      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
        {icon}
      </span>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-1 text-base font-bold text-slate-900">{cta}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </a>
  );
}
