import { Check } from "lucide-react";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  price: string;
  period?: string;
  subtitle?: string;
  description: string;
  features: string[];
  btnText: string;
  btnHref?: string;
  checkColor?: string;
  cardBgColor?: string;
  cardTextColor?: string;
  buttonBgColor?: string;
  btnTextColor?: string;
  dotted?: boolean;
};

export function PricingCard({
  title,
  price,
  period = "/ month",
  subtitle,
  description,
  features,
  btnText,
  checkColor = "text-blue-500",
  btnHref = "/signup",
  cardBgColor = "bg-white",
  cardTextColor = "text-gray-900",
  buttonBgColor = "bg-white",
  btnTextColor = "text-black",
  dotted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative overflow-hidden w-full rounded-2xl md:rounded-3xl border border-gray-200 p-6 md:p-8 flex flex-col justify-between transition ${cardBgColor}`}
    >
      {/* Radial dot pattern overlay */}
      {dotted && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      )}

      {/* All content sits above the overlay */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top */}
        <div>
          <h3 className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${cardTextColor}`}>
            {title}
          </h3>

          <div className="mt-4 md:mt-6 flex items-end gap-2">
            <span className={`text-3xl md:text-4xl font-bold ${cardTextColor}`}>
              {price}
            </span>
            <span className={`text-lg md:text-xl opacity-70 ${cardTextColor}`}>
              {period}
            </span>
          </div>

          {subtitle && (
            <p className={`text-lg md:text-xl mt-2 md:mt-3 opacity-60 ${cardTextColor}`}>
              {subtitle}
            </p>
          )}

          <p className={`text-xs md:text-sm mt-4 md:mt-6 opacity-70 ${cardTextColor}`}>
            {description}
          </p>

          <div className="my-6 md:my-8 border-t border-gray-300" />

          <p className={`text-xs md:text-sm mb-4 md:mb-5 opacity-60 ${cardTextColor} font-medium`}>
            FEATURES
          </p>

          <ul className="space-y-2 md:space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                <Check className={`${checkColor} shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5`} />
                <span className={cardTextColor}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={btnHref}
          className={`mt-6 md:mt-8 block text-center border border-blue-500 rounded-full px-4 py-2.5 text-sm md:text-base font-semibold transition-all duration-200 hover:opacity-90 ${buttonBgColor} ${btnTextColor}`}
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
}