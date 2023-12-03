import ServiceCard from "@/components/cards/service_card";
import { getDict } from "@/dictionaries/dictionaries";
import { getLocaleInServer } from "@/shared/utils";
import { headers } from "next/headers";

export default async function ServicesSection() {
  const locale = getLocaleInServer(headers);
  const dict = await getDict(locale);
  return (
    <section className="flex items-center justify-evenly">
      {dict.pages.index.services.map((item, i) => (
        <ServiceCard key={i} {...item} />
      ))}
    </section>
  );
}
