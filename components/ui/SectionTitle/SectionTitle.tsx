type Props = {
  label: string;
  title: string;
};

export default function SectionTitle({ label, title }: Props) {
  return (
    <div className="mb-10">
      <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</span>
      <h2 className="text-3xl font-bold leading-tight">{title}</h2>
    </div>
  );
}
