// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";

// export const Hero = () => {
//   return (
//     <div className="grid grid-cols-2 items-center justify-between mb-20">
//       <div className=" flex flex-col gap-4">
//         <h1 className="text-7xl font-bold">
//           Professional healthcare{" "}
//           <span className=" text-blue-600">at your fingertips</span>
//         </h1>
//         <p className="text-xl">
//           Connect with certified doctors online and get medical advice from the
//           comfort of your home. Secure, private, and convenient healthcare when
//           you need it.
//         </p>
//         <div className="flex items-center gap-4">
//           <Button asChild className="bg-blue-600 text-white py-6 px-8 text-lg">
//             <Link href="#">Find a Doctor</Link>
//           </Button>
//           <Button asChild className="bg-black text-white py-6 px-8 text-lg">
//             <Link href="#">Sign Up</Link>
//           </Button>
//         </div>
//       </div>
//       <div className="">
//         <Image src="/doc5.png" width={500} height={500} alt="doctor-image" />
//       </div>
//     </div>
//   );
// };
// import Link from "next/link";
// import { Button } from "./ui/button";
// import Image from "next/image";

// export const Hero = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mb-20 gap-8 md:gap-0 px-4 md:px-0">
//       <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
//         <h1 className="text-4xl md:text-7xl font-bold">
//           Professional healthcare{" "}
//           <span className=" text-blue-600">at your fingertips</span>
//         </h1>
//         <p className="text-base md:text-xl max-w-xl">
//           Connect with certified doctors online and get medical advice from the
//           comfort of your home. Secure, private, and convenient healthcare when
//           you need it.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
//           <Button
//             asChild
//             className="bg-blue-600 text-white py-3 px-5 text-base md:py-6 md:px-8 md:text-lg w-full sm:w-auto"
//           >
//             <Link href="#">Find a Doctor</Link>
//           </Button>

//           <Button
//             asChild
//             className="bg-black text-white py-3 px-5 text-base md:py-6 md:px-8 md:text-lg w-full sm:w-auto"
//           >
//             <Link href="#">Sign Up</Link>
//           </Button>
//         </div>
//       </div>

//       <div className="flex justify-center md:justify-end">
//         <div className="w-64 sm:w-80 md:w-auto">
//           <Image
//             src="/doc5.png"
//             width={500}
//             height={500}
//             alt="doctor-image"
//             className="w-full h-auto md:w-auto rounded-2xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="w-full relative overflow-hidden py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* LEFT: content */}
          <div className="md:col-span-7 lg:col-span-6">
            <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Trusted · Secure · 24/7
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Professional healthcare{" "}
              <span className="text-blue-600">at your fingertips</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl">
              Connect with certified doctors online and get medical advice from
              the comfort of your home. Secure, private, and convenient
              healthcare when you need it.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                className="bg-blue-600 text-white px-5 py-3 rounded-md text-base shadow hover:shadow-md transition"
              >
                <Link href="#" aria-label="Find a doctor">
                  Find a doctor
                </Link>
              </Button>

              <Button
                asChild
                className="bg-slate-900 text-white px-5 py-3 rounded-md text-base hover:bg-slate-800 transition"
              >
                <Link href="#" aria-label="Sign up">
                  Sign up
                </Link>
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold">✔</span>
                Video & chat visits
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">✔</span>
                Prescriptions
              </div>
            </div>
          </div>

          {/* RIGHT: image */}
          <div className="md:col-span-5 lg:col-span-6 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* decorative gradient blob behind the image */}
              <div className="absolute -left-6 -top-6 w-36 h-36 bg-gradient-to-br from-blue-200/60 to-white rounded-2xl blur-xl opacity-70 transform rotate-12"></div>

              <Image
                src="/doc5.png"
                alt="doctor smiling"
                width={640}
                height={640}
                priority
                sizes="(max-width: 768px) 80vw, 40vw"
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
