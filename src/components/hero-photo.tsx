import Image from "next/image";
import { Flower2 } from "lucide-react";
import { profile } from "@/lib/data";

// HR taglines that orbit the portrait.
const orbitTags = [
  "Talent Acquisition",
  "Employee Engagement",
  "HR Strategy",
  "People & Culture",
  "Leadership",
  "Onboarding",
];

const SPIN = "34s";

export function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:mx-0 lg:max-w-none">
      {/* Portrait */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-paper">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          sizes="(max-width: 1024px) 340px, 360px"
          className="object-cover"
          priority
        />
      </div>

      {/* Orbiting tagline flowers — desktop only, decorative */}
      <div
        className="pointer-events-none absolute -inset-4 hidden lg:block"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{ animation: `spin ${SPIN} linear infinite` }}
        >
          {orbitTags.map((t, i) => {
            const angle = (360 / orbitTags.length) * i;
            return (
              <div
                key={t}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div style={{ animation: `spin ${SPIN} linear infinite reverse` }}>
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-medium shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
                        <Flower2 className="h-3 w-3 text-[#7c3aed]" />
                        {t}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
