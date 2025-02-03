import Image from "next/image";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="container mx-auto lg:py-10 pb-32 mt-16 lg:mt-20 mb-24 lg:mb-20 flex flex-col gap-20 lg:flex-row">
      <div className="hero-map mt-28 lg:mt-0" />
      <div className="relative z-20 flex flex-col lg:w-1/2">
        <Image
          src="/camp.svg"
          alt="Camp icon"
          width={50}
          height={50}
          className="absolute -top-12 -left-2"
        />
        <h1 className="text-5xl font-bold">Putuk Trunu Camp Area</h1>
        <p className="mt-6 text-sm text-gray-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere sequi
          id doloremque quae earum rerum atque nam nemo debitis animi, quo enim
          consequatur nisi quaerat quibusdam, voluptas cupiditate dignissimos
          dolorum.
        </p>
        <div className="flex flex-wrap items-center gap-6 my-6">
          <StarRating rating={5} />
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
        <LocationCard />
      </div>
    </section>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-3">
      {Array(rating)
        .fill(1)
        .map((_, i) => (
          <Image
            key={i}
            src="/star.svg"
            alt="Star rating"
            width={24}
            height={24}
          />
        ))}
    </div>
  );
}

function LocationCard() {
  return (
    <div className="relative lg:absolute -right-12 top-12 lg:-right-4 lg:top-0">
      <div className="absolute z-10 top-4 left-4 rounded-xl bg-gray-90 flex flex-col text-white p-3 w-[180px]">
        <div className="mb-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-light">Location</span>
            <Image src="/close.svg" alt="Close" width={20} height={20} />
          </div>
          <span className="text-md font-bold">Aero Buenos</span>
        </div>
        <div className="flex flex-nowrap w-full justify-between">
          <CheckInOut label="Check In" time="12:00 PM" />
          <CheckInOut label="Check Out" time="12:00 PM" />
        </div>
      </div>
    </div>
  );
}

function CheckInOut({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-light">{label}</span>
      <span className="text-sm font-bold">{time}</span>
    </div>
  );
}
