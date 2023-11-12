import Link from "next/link";

export default function PlainLink({ t }: { t: string }) {
  return (
    <div className="flex items-center gap-3 text-color-text-2">
      <Link
        href={t.length === 0 ? "/en" : t}
        className="capitalize duration-300 transition-colors hover:text-color-text-2-hover"
      >
        {t.length === 0 ? "home" : t}
      </Link>
      <span className="italic">/</span>
    </div>
  );
}
