const SiteFooter = () => {
  return (
    <footer className="section-divider">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
              Dropwing Groups
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Execution-first. Outcome-owned.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dropwing Groups. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
