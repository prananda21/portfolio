type SectionHeaderProps = {
  kicker: string;
  title: string;
};

export function SectionHeader({ kicker, title }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-kicker">{kicker}</p>
    </div>
  );
}
