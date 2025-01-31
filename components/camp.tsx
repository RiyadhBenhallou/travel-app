import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

export default function Camp() {
  return (
    <section className="container mx-auto relative px-6 lg:px-20 py-10 lg:py-20 lg:mb-10 flex flex-col">
      <div className="hide-scrollbar flex justify-start items-start h-[340px] lg:h-[400px] gap-8 overflow-x-auto">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Pegan, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View"
          subtitle="Somewhere in the wild"
          peopleJoined="1000+ Joined"
        />
      </div>
      <div className="p-4 py-8 rounded-3xl w-full lg:max-w-[460px] bg-green-50 self-end mt-4 lg:-mt-20 lg:mr-6 flex flex-col">
        <h2 className="capitalize text-white font-medium text-xl lg:text-4xl">
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </h2>
        <p className="font-medium mt-5 text-sm text-white">
          Starting from the anxiety of the climbers when visiting a new climbing
          location, the possibility of getting lost is very large. That's why we
          are here for those of you who want to start an adventure
        </p>
      </div>
    </section>
  );
}

function CampSite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}) {
  return (
    <div
      className={`h-full min-w-[900px] ${backgroundImage} bg-cover bg-no-repeat rounded-r-3xl lg:rounded-3xl`}
    >
      <div className="w-full h-full flex flex-col items-start justify-between p-6 lg:px-10">
        <div className="flex items-center justify-start gap-6">
          <div className="p-4 rounded-full bg-green-50 z-10">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-white text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3">
          <div className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt="people"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
          <p className="text-white text-sm font-bold">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}
