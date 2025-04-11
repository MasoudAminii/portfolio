import localFont from "next/font/local";

import {
  HeroProjectAnimation,
  AnimateText,
} from "@/Components/Animations/MainAnimations";
import ScrollVelocity from "@/Components/ui/ScrollVelocity";
import CircularText from "@/Components/ui/CircularText";

const getFarsiFont = localFont({
  src: "../../public/fonts/Farsi-Inspired.ttf",
});

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--gradiant-from)] to-[--gradiant-to] px-4 py-50">
      <div className="wrapper container mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[var(--accent-color)] blur-3xl"></div>
          <div className="absolute right-10 bottom-20 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        {/* Floating Website Mockups */}
        <HeroProjectAnimation />
        {/* Circular Text */}
        <div className="absolute top-1/6 right-1/6 flex items-center justify-center">
          <CircularText
            text="Avalable*Avalable*Avalable*"
            onHover="speedUp"
            spinDuration={20}
            className="text-[var(--primary-color)]"
          />
          <div className="absolute flex items-center justify-center text-center text-[var(--accent-color)]">
            <span
              className={`${getFarsiFont.className} text-9xl leading-10 font-semibold`}
            >
              14 April
            </span>
          </div>
        </div>
        {/* Main Content */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6">
          {/* Announcement Badge */}
          <AnimateText>
            <div className="mx-auto flex max-w-max items-center rounded-full bg-[var(--bg-light)] px-4 py-2 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-[var(--accent-color)]"></span>
              <p className="text-sm font-medium">
                Professional Web Design & Development Services
              </p>
            </div>
          </AnimateText>

          {/* Main Headlines with Enhanced Typography */}
          <AnimateText>
            <h1 className="text-center text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--accent-color)]">
                  Elevate
                </span>
                <span className="absolute bottom-0 left-0 h-3 w-full rounded-lg bg-[var(--accent-color)] opacity-20"></span>
              </span>{" "}
              Your Business
            </h1>
          </AnimateText>

          <AnimateText>
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
              We Build & Sell{" "}
              <span className="relative text-[var(--accent-color)]">
                Stunning
                <svg
                  className="absolute top-full left-0 h-2 w-full overflow-visible"
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0,5 Q25,10 50,5 Q75,0 100,5"
                    fill="none"
                    stroke="var(--accent-color)"
                    strokeWidth="2"
                  />
                </svg>
              </span>{" "}
              Websites
            </h2>
          </AnimateText>

          {/* Value Proposition */}
          <AnimateText>
            <p className="mx-auto max-w-2xl text-center text-lg text-[var(--text-light)]">
              Transform your online presence with custom-designed websites that
              convert visitors into customers. Our expert team delivers
              pixel-perfect designs, seamless functionality, and strategic
              optimization.
            </p>
          </AnimateText>

          {/* Social Proof */}
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-4">
            <AnimateText>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-400"
                    ></div>
                  ))}
                </div>
                <p className="ml-3 text-sm text-[var(--text-light)]">
                  <span className="font-medium text-[var(--accent-color)]">
                    100+
                  </span>{" "}
                  satisfied clients
                </p>
              </div>
            </AnimateText>
            <AnimateText>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-[var(--text-light)]">
                  <span className="font-medium text-[var(--accent-color)]">
                    4.9/5
                  </span>{" "}
                  average rating
                </p>
              </div>
            </AnimateText>
          </div>

          {/* CTA Section */}
          <div className="mt-2 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <AnimateText>
              <button className="w-full rounded-lg bg-[var(--accent-color)] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl sm:w-auto">
                Get Started
              </button>
            </AnimateText>
            <AnimateText>
              <button className="w-full rounded-lg border border-[var(--bg-light)] bg-[var(--bg-light)]/20 px-8 py-4 text-lg font-bold text-[var(--primary-color)] backdrop-blur-sm transition-all duration-300 hover:bg-[var(--bg-light)]/80 sm:w-auto">
                View Portfolio
              </button>
            </AnimateText>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-4 py-16 transition-colors sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[3000px]">
        <ScrollVelocity
          texts={["Learn More About Us,", "Scroll Down"]}
          className="custom-scroll-text"
        />
      </div>
      <div className="mx-auto max-w-7xl"></div>
    </section>
  );
}
