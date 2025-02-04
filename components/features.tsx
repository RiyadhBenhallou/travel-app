import { FEATURES } from "@/constants";
import Image from "next/image";

export default function Features() {
  return (
    <section className="py-24 bg-feature-bg bg-center gb-cover bg-no-repeat justify-end overflow-hidden">
      <div className="container mx-auto relative w-full flex">
        <div className="md:flex flex-1 min-h-[700px] hidden">
          <Image
            src="/phone.png"
            alt="phone"
            width={390}
            height={800}
            className="feature-phone"
          />
        </div>
        <div className="flex flex-col gap-1 lg:w-[60%] relative">
          <div>
            <Image
              src="/camp.svg"
              alt="camp"
              height={50}
              width={50}
              className="absolute -top-12 -left-2"
            />
            <h2 className="text-4xl font-bold">Our Features</h2>
          </div>
          <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((f, i) => (
              <FeatureItem
                key={i}
                title={f.title}
                description={f.description}
                icon={f.icon}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <li className="flex flex-col gap-4 felx-1 w-full items-start">
      <div className="rounded-full p-3 bg-green-500 flex justify-center items-center">
        <Image src={icon} alt={title} width={34} height={34} />
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="font-light text-gray-600">{description}</p>
    </li>
  );
};
