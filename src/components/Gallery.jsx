import { galleryItems } from '../data/gallery';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-gradient-to-b from-white via-primary-50/30 to-primary-50/40 py-16 sm:py-20"
    >
      <div className="site-container">
        <div className="text-center animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
            Gallery
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Recent Installations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Real mosquito mesh installations across Chennai homes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
          {galleryItems.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              delay={i * 80}
              priority={i === 0}
              className={
                i < 2
                  ? 'lg:col-span-3'
                  : 'lg:col-span-2'
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, className = '', delay = 0, priority = false }) {
  return (
    <figure
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
      className={`group relative overflow-hidden rounded-[20px] bg-slate-100 shadow-card ring-1 ring-slate-900/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-cardHover animate-slide-up ${className}`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={item.src}
          alt={item.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          width="1200"
          height="900"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
    </figure>
  );
}
