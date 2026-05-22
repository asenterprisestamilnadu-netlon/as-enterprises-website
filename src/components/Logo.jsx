import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import companyLogo from '../assets/companyLogo.svg';

export default function Logo({ compact = false }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label={`${siteConfig.name} home`}
    >
      <img
        src={companyLogo}
        alt=""
        aria-hidden="true"
        className="h-10 w-auto shrink-0 object-contain mix-blend-multiply sm:h-11"
      />
      {!compact && (
        <span className="flex flex-col justify-center leading-tight">
          <span className="text-[15px] font-bold tracking-tight text-primary-900 sm:text-base">
            AS ENTERPRISES
          </span>
          <span className="mt-0.5 hidden text-[11px] font-medium leading-tight text-slate-500 sm:block">
            {siteConfig.tagline}
          </span>
        </span>
      )}
    </Link>
  );
}
