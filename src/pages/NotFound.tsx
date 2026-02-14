import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-structural flex items-center justify-center relative overflow-hidden">
      {/* Background motion (reused from Hero) */}
      <div
        className="hero-bg-motion absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="120%" height="120%" fill="url(#hero-grid)" x="-10%" y="-10%" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-md">
        <h1 className="text-[120px] font-bold leading-none tracking-tighter text-foreground/10 select-none">
          404
        </h1>
        <div className="space-y-6 -mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Oops! Page not found
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
