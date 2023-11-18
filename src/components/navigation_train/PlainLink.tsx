import Link from "next/link";

export default function PlainLink({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-color-text-2">
      <Link
        href={text.length === 0 ? "/en" : text}
        className="capitalize duration-300 ease-in-out transition-colors hover:text-color-text-2-hover"
      >
        {text.length === 0 ? "home" : text}
      </Link>
      <span className="italic">/</span>
    </div>
  );
}
