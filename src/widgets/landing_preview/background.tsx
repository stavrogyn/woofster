export const LandingPreviewBackdround = () => {
  return (
    <div className="flex justify-center items-center w-full h-50 overflow-hidden isolate">
        <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-black/10 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
          <defs>
            <pattern id="background-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-theme-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0"></path>
          </svg>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#background-pattern)"></rect>
        </svg>
    </div>
  );
}