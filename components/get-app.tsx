import Image from "next/image";
import Button from "./ui/button";

export default function GetApp() {
  return (
    <section className="py-12 flex flex-col lg:flex-row lg:items-center gap-10 get-app">
      <div className="flex flex-col gap-12">
        <h1 className="capitalize text-4xl lg:text-6xl lg:max-w-[320px] font-bold">
          get for free now
        </h1>
        <p className="font-medium">
          Available on iOS and Android, download now!
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* <button className="bg-white text-green-50 px-6 py-3 rounded-full flex items-center gap-2">
            <Image src='/apple.svg' alt='logo' width={32} height={32} />
            <span className="font-bold">Download Now</span>
          </button> */}
          <Button
            type="button"
            icon="/apple.svg"
            variant="bg-white text-green-50"
          >
            Download Now
          </Button>
          <Button
            type="button"
            icon="/android.svg"
            variant="btn_dark_green border border-white"
          >
            Download Now
          </Button>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <Image
          src="/phones.png"
          alt="phones"
          width={550}
          height={840}
          className="rotate-12"
        />
      </div>
    </section>
  );
}
