import { SkillItem } from "@/lib/skills";

export function SkillBadge({
  name,
  icon: Icon,
  color,
  logoColor = "white",
}: SkillItem) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-bold uppercase tracking-wide"
      style={{
        backgroundColor: color,
        color: logoColor === "white" ? "#fff" : "#000",
      }}
    >
      <Icon size={14} color={logoColor === "white" ? "#fff" : "#000"} />
      {name}
    </span>
  );
}
