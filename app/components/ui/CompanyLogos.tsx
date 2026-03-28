const companies = [
  { name: "TCS", logo: "./tcs.svg" },
  { name: "Infosys", logo: "./infosys.svg" },
  { name: "Wipro", logo: "./wipro.svg" },
  { name: "Cognizant", logo: "./cognizant.svg" },
  { name: "Capgemini", logo: "./capgemini.svg" },
  { name: "L&T", logo: "./L&T.svg" },
]

export function CompanyLogos() {
  const repeated = [...companies, ...companies, ...companies, ...companies]

  return (
    <div className="company-logos-wrapper">
      <p className="company-logos-label">
        Trusted by students preparing for
      </p>

      <div className="company-logos-track-outer">
        <div className="company-logos-fade-left" />
        <div className="company-logos-fade-right" />

        <div className="company-logos-track">
          {repeated.map((company, i) => (
            <div key={i} className="company-logo-item">
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}