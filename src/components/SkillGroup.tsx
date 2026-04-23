import type { SkillGroup } from "@/types/skills";

type SkillGroupProps = {
  group: SkillGroup;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="skill-group">
      <div>
        <h3>{group.title}</h3>
        <p>{group.detail}</p>
      </div>
      <ul className="tag-list">
        {group.items.map((item) => (
          <li className="tag" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
