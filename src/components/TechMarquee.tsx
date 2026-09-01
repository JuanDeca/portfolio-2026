import { TECH_LIST } from "@/lib/content";
import { TECH_ICONS } from "@/lib/tech-icons";

export default function TechMarquee() {
  // 5 copies + -20% translate (1/5 of the track) avoids a gap on wide screens.
  const items = [
    ...TECH_LIST,
    ...TECH_LIST,
    ...TECH_LIST,
    ...TECH_LIST,
    ...TECH_LIST,
  ];

  return (
    <div className="border-b-2 border-white/[0.14] py-4.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-[marquee_22s_linear_infinite]">
        {items.map((item, i) => {
          const Icon = TECH_ICONS[item.name]?.icon;
          const color = TECH_ICONS[item.name]?.color;
          return (
            <span
              key={`${item.name}-${i}`}
              className="flex items-center gap-2.5 font-mono text-[15px] font-medium px-7 text-white/50 border-r border-white/[0.14]"
            >
              {Icon && <Icon size={16} color={color} />}
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
