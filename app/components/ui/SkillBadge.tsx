export function SkillBadge({name} : {name : string}) {
  return (
    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
      {name}
    </span>
  );
}
