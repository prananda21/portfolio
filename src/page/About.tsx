import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";

export function About() {
  return (
    <div className="page page-stack">
      <section className="section">
        <p className="eyebrow">/about</p>
        <h1 className="page-title">About Prananda</h1>
        <p className="lede">{PROFILE.about}</p>
      </section>

      <section className="section">
        <SectionHeader kicker="01 / values" title="How I like to work" />
        <div className="grid">
          {PROFILE.values.map((value) => (
            <article className="panel" key={value}>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader kicker="02 / skills" title="Stack and direction" />
        <div className="grid">
          {SKILLS.map((group) => (
            <SkillGroup group={group} key={group.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
