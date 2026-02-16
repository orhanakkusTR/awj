function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none hidden md:block">
        <img
          src="/awj-logo.svg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 relative z-10">
        <div className="space-y-2 px-4 sm:px-8">
          <p className="text-[#7a7a7a] text-xs uppercase tracking-[0.2em] font-medium">
            COMING SOON
          </p>
        </div>

        <div className="space-y-6 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-[#2d2d2d] tracking-tight max-w-4xl">
            Something Powerful<br /> Is Taking Shape
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#4a4a4a] font-light max-w-3xl leading-relaxed">
            AWJ is a global digital agency delivering<br className="hidden sm:inline" /> AI-enabled <strong className="font-semibold">software</strong>, <strong className="font-semibold">marketing</strong>, and <strong className="font-semibold">growth</strong><br className="hidden sm:inline" /> solutions for ambitious brands.
          </p>
        </div>

        <div className="py-2 px-4 sm:px-8">
          <img
            src="/awj-logo.svg"
            alt="AWJ Logo"
            className="h-20 sm:h-24 md:h-28 w-auto"
          />
        </div>

        <div className="space-y-6 text-[#5a5a5a] px-4 sm:px-8 max-w-3xl">
          <p className="text-base sm:text-lg leading-relaxed">
            We are currently working behind the scenes to refine<br className="hidden sm:inline" /> our digital presence and showcase how we help<br className="hidden sm:inline" /> businesses grow through strategy, technology, and execution.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Built on over 20 years of hands-on digital experience,<br className="hidden sm:inline" /> AWJ brings together AI, software development, media,<br className="hidden sm:inline" /> and marketing to support companies across Europe<br className="hidden sm:inline" /> and the US.
          </p>
        </div>

        <div className="pt-8 space-y-4 border-t border-[#ddd] px-4 sm:px-8 max-w-4xl">
          <p className="text-[#999] text-sm leading-relaxed text-right sm:text-left">
            Stay tuned. Clarity, growth, and execution are coming together.
          </p>

          <div className="space-y-3 text-right sm:text-left">
            <div className="text-[#666] hover:text-[#2d2d2d] transition-colors">
              <a href="mailto:hi@awj.ai" className="text-sm font-medium">
                hi@awj.ai
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 text-[#666] text-sm items-end sm:items-start">
              <a href="tel:+12022000122" className="hover:text-[#2d2d2d] transition-colors">
                <span className="font-medium">US:</span> +1 (202) 200 0122
              </a>
              <span className="hidden sm:inline text-[#ccc] mx-3">|</span>
              <a href="tel:+46723735555" className="hover:text-[#2d2d2d] transition-colors">
                <span className="font-medium">SV:</span> +46 (0) 72 373 55 55
              </a>
              <span className="hidden sm:inline text-[#ccc] mx-3">|</span>
              <a href="tel:+905512999999" className="hover:text-[#2d2d2d] transition-colors">
                <span className="font-medium">TR:</span> +90 551 299 99 99
              </a>
            </div>

            <p className="text-[#bbb] text-xs">
              www.awj.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
