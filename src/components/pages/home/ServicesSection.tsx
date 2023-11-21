import ServiceCard from "@/components/cards/service_card";
import { aboutServicesCards } from "@/data";

export default function ServicesSection() {
  return (
    <section className="flex items-center justify-evenly">
      {aboutServicesCards.map((item, i) => (
        <ServiceCard key={i} {...item} />
      ))}
    </section>
  );
}
