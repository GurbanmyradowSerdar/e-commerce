import Link from "next/link";

export default function LastLink({ t }: { t: string }) {
  return (
    <div className="flex items-center gap-3 text-color-text-3">
      <Link href={t} className="capitalize">
        {t}
      </Link>
    </div>
  );
}
