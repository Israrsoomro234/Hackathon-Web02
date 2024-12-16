import AnimatedCounter from "@/components/ui/AnimatedCounter"; // Animated counter component
import { Separator } from "@/components/ui/separator"; // Separator line
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { integralCF } from "@/styles/fonts"; // Custom font styles
import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js Link for navigation
import React from "react"; // React core library

// Header Component
const Header = () => {
  return (
    <header className="overflow-hidden pt-10 md:pt-24 bg-[#F2F0F1]">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:max-w-frame mx-auto">
        {/* Left Section: Content */}
        <section className="px-4 max-w-frame">
          {/* Heading */}
          <h2
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8",
            ])}
          >
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>

          {/* Paragraph */}
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          {/* Shop Now Button */}
          <div>
            <Link
              className="w-full md:w-52 inline-block text-center px-14 py-4 rounded-full bg-black text-white hover:bg-black/80 transition-all hover:animate-pulse mb-5 md:mb-12"
              href="/shop"
            >
              Shop Now
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap md:space-x-3 lg:space-x-6 xl:space-x-8 sm:flex-nowrap justify-center md:justify-start md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center md:mb-[116px]">
            {/* International Brands */}
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={200} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>

            {/* Separator */}
            <Separator
              className="ml-6 md:ml-0 h-12 md:h-full bg-black/10"
              orientation="vertical"
            />

            {/* High-Quality Products */}
            <div className="ml-6 md:ml-0 flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={2000} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>

            {/* Separator */}
            <Separator
              className="hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"
              orientation="vertical"
            />

            {/* Happy Customers */}
            <div className="flex flex-col w-full text-center sm:text-left mt-3 sm:mt-0 sm:w-auto sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                <AnimatedCounter from={0} to={3000} />+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </section>

        {/* Right Section: Image */}
        <section className="relative min-h-[448px] md:min-h-[428px] md:px-4 bg-no-repeat bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          {/* Big Star */}
          <Image
            className="absolute right-7 xl:right-0 top-12 animate-[spin_4s_infinite] max-w-[76px] max-h-[76px] lg:max-w-24 xl:max-w-[104px]"
            src="/icons/big-star.svg"
            width={104}
            height={104}
            alt="big star"
            priority
          />

          {/* Small Star */}
          <Image
            className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 animate-[spin_3s_infinite] max-w-11 md:max-w-14"
            src="/icons/small-star.svg"
            width={56}
            height={56}
            alt="small star"
            priority
          />
        </section>
      </div>
    </header>
  );
};

export default Header;
