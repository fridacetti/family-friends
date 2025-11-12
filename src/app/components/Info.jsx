// components/InfoButton.jsx
export default function InfoButton({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3 pt-4">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-button/50 shrink-0 items-center justify-center rounded-2xl p-1 px-3 text-sm text-white"
        >
          {tag}
        </div>
      ))}
    </div>
  );
}
