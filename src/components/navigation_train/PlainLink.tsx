import Link from "next/link";

export default function PlainLink({ t }: { t: string }) {
  return (
    <div className="flex items-center gap-3 text-color-text-2">
      <Link href={t} className="capitalize">
        {t.length === 0 ? "home" : t}
      </Link>
      <span className="italic">/</span>
    </div>
  );
}
