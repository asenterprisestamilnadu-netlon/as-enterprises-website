import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="AS Enterprises | Page Not Found"
        description="The page you are looking for does not exist."
        canonical="https://asenterprises.in/404"
      />
      <section className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-primary-700">404</p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-slate-600">
            The page you are looking for does not exist or has moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl bg-primary-700 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
