const companies = [
  { name: "TCS", logo: "./tcs.svg" },
  { name: "Infosys", logo: "./infosys.svg" },
  { name: "Wipro", logo: "./wipro.svg" },
  { name: "Cognizant", logo: "./cognizant.svg" },
  { name: "Capgemini", logo: "./capgemini.svg" },
  { name: "L&T", logo: "./L&T.svg" },
]

export function CompanyLogos() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-center text-xs md:text-sm text-black uppercase tracking-wide font-medium">
        Trusted by students preparing for
      </p>

      <div className="relative overflow-hidden py-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-10 animate-marquee whitespace-nowrap will-change-transform">
          {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <div key={i} className="inline-flex items-center cursor-default shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}