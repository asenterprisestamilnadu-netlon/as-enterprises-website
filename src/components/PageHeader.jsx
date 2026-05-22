export default function PageHeader({ title, description }) {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{description}</p>
        )}
      </div>
    </section>
  );
}
