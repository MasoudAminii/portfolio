export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      {/* <AboutSection /> */}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-4 py-14 text-[var(--primary-color)] md:py-28">
      {/* Main Headlines */}
      <h1 className="text-center text-5xl font-extrabold md:text-7xl">
        Elevate Your Business Online
      </h1>
      <h2 className="mt-4 text-center text-4xl font-bold md:text-6xl">
        We Build & Sell Stunning Websites
      </h2>
      <h3 className="mt-4 text-center text-3xl font-semibold md:text-5xl">
        Freelance Experts at Devoweb
      </h3>

      {/* Supporting Text */}
      <p className="mt-8 max-w-3xl text-center text-lg">
        Transform your digital presence with custom, high-performance websites
        that drive results. Whether you need an online store, a portfolio, or a
        corporate site, we’re here to make it happen.
      </p>

      {/* Call-to-Action Button */}
      <button className="btn">Get Started</button>
    </section>
  );
}

// function AboutSection() {
//   return (
//     <section className="bg-[var(--secondary-color)] px-4 py-16 transition-colors sm:px-6 lg:px-8 dark:bg-[var(--secondary-color)]">
//       <div className="mx-auto max-w-7xl">
//         <div className="grid items-center gap-12 lg:grid-cols-2">
//           {/* Text Content */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-[var(--primary-color)] md:text-5xl dark:text-[var(--primary-color)]">
//               Crafting Digital Excellence
//             </h2>

//             <p className="text-lg font-medium text-[var(--primary-color)] opacity-90 md:text-xl dark:text-[var(--primary-color)]">
//               <span className="text-[var(--accent-color)]">(//)</span> We
//               transform ideas into powerful web experiences
//             </p>

//             <p className="text-base leading-relaxed text-[var(--primary-color)] opacity-80 md:text-lg dark:text-[var(--primary-color)]">
//               As a forward-thinking web development collective, we specialize in
//               creating bespoke digital solutions that drive results. Our team
//               merges cutting-edge technology with intuitive design to build
//               websites that not only look stunning but perform exceptionally.
//             </p>

//             <div className="mt-8 flex gap-4">
//               <a
//                 href="/portfolio"
//                 className="hover:bg-opacity-90 rounded-lg bg-[var(--accent-color)] px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
//               >
//                 View Our Work
//               </a>
//               <a
//                 href="/team"
//                 className="px-6 py-3 font-medium text-[var(--accent-color)] underline-offset-4 hover:underline"
//               >
//                 Meet the Team
//               </a>
//             </div>
//           </div>

//           {/* Visual Element */}
//           <div className="group relative">
//             <div className="absolute inset-0 transform rounded-xl bg-[var(--accent-color)] opacity-10 transition-transform duration-300 group-hover:rotate-3" />

//             <div className="relative transform overflow-hidden rounded-xl bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] p-1 transition-transform duration-300 group-hover:-translate-y-2">
//               <div className="flex h-96 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
//                 {/* Replace this div with your actual image */}
//                 <div className="text-[var(--primary-color)] opacity-50">
//                   [Website Showcase]
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
