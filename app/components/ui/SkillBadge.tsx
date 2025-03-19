export function SkillBadge({name} : {name : string}) {
  return (
    <span className="px-3 py-1 rounded-full text-sm font-medium">
      {name}
    </span>
  );
}
