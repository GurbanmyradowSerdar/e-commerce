import Link from "next/link";

export default function LastLink({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-color-text-3">
      <Link href={text} className="capitalize">
        {text}
      </Link>
    </div>
  );
}
