import Image from "next/image";

export default function Guide() {
  return (
    <section className="container mx-auto px-6 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 space-y-4">
          <Image
            src="/camp.svg"
            alt="map"
            height={54}
            width={54}
            className="mb-2"
          />
          <p className="uppercase text-green-500 text-sm font-semibold tracking-wide">
            we are here for you
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Guide you to the easy path
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            aliquid nemo cumque nesciunt enim numquam, quam quaerat, cum iusto
            eos nobis nam iste ut, optio pariatur ea soluta excepturi ipsa.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Image
            src="/boat.png"
            alt="boat"
            width={680}
            height={510}
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="bg-white shadow-md p-3 rounded-xl absolute top-[5%] left-[25%] lg:left-[5%] flex gap-3  w-[200px]">
            <Image src="/meter.svg" alt="meter" width={24} height={158} className="h-full" />
            <div className="w-full flex flex-col justify-between min-h-full">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-30">Destination</p>
                  <p className="text-green-500 text-xs font-semibold">480 Km</p>
                </div>
                <p className="font-bold text-sm">Aguas Caliente</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-30">Duration</p>
                  <p className="text-green-500 text-xs font-semibold">4 Days</p>
                </div>
                <p className="font-bold text-sm">Aero Buenos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
