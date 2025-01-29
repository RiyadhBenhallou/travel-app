import Image from "next/image";
import Button from "./ui/button";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-10 pb-32 flex flex-col gap-20 lg:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-col flex-0 lg:w-1/2 border-2 border-red-500">
        <Image
          src={"/camp.svg"}
          alt="camp"
          width={50}
          height={50}
          className="absolute -top-12 -left-2"
        />
        <h1 className="text-5xl font-bold text-wrap">Putuk Trunu Camp Area</h1>
        <p className="font-normal text-sm mt-6 text-gray-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sequi
          id doloremque quae earum rerum atque nam nemo debitis animi, quo enim
          consequatur nisi quaerat quibusdam, voluptas cupiditate dignissimos
          dolorum.
        </p>
        <div className="flex flex-wrap items-center gap-6 my-6">
          <div className="flex items-center gap-3">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src={"/star.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="font-bold">
            198k <span className="font-normal">Excellent Reviews</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button type="button" variant="btn_green">
            Book Now
          </Button>
          <Button type="button" variant="btn_white" icon="/play.svg">
            How We Work
          </Button>
        </div>
        <div className="relative lg:absolute lg:right-0 lg:top-0">
          <div className="absolute z-10 top-4 left-4 rounded-xl bg-gray-90 flex flex-col text-white p-3 w-[180px]">
            <div className="mb-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-light">Location</span>
                <Image src={"/close.svg"} alt="close" width={20} height={20} />
              </div>
              <span className="text-md font-bold">Aero Buenos</span>
            </div>
            <div className="flex flex-nowrap w-full justify-between">
              <div className="flex flex-col">
                <span className="text-xs font-light">Check In</span>
                <span className="text-sm font-bold">12:00 PM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light">Check Out</span>
                <span className="text-sm font-bold">12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
