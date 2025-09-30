"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "./ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I was feeling unwell during a business trip and needed medical advice quickly. Within an hour, I was talking to a doctor who diagnosed my condition and sent a prescription to a local pharmacy. Incredible service!",
    name: "Sarah Johnson",
    role: "Marketing Executive",
  },
  {
    quote:
      "As a busy parent, taking my kids to the doctor's office for minor issues was always a hassle. TenaDoc has changed that completely. Now we can talk to pediatricians without leaving home.",
    name: "Michael Chen",
    role: "Software Engineer",
  },
  {
    quote:
      "The quality of doctors on this platform is impressive. I had a detailed consultation about my chronic condition, and the specialist gave me insights that my regular doctor hadn't mentioned before.",
    name: "Emily Rodriguez",
    role: "Teacher",
  },
];

export const Testimonials: React.FC = () => {
  const slides = React.useMemo(
    () => [...testimonials, ...testimonials.slice(0, 2)],
    []
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          <h4 className="text-base font-semibold text-blue-600">
            Testimonials
          </h4>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            What our users say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            Don&apos;t take our word for it — hear from people who have used our
            service.
          </p>
        </div>

        {/* Carousel wrapper: keep overflow hidden to prevent layout shift */}
        <div className="w-full overflow-hidden relative">
          {/* Use setApi so we can control the carousel programmatically on large screens */}
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full p-10"
          >
            {/* Use negative margin on the content and padding on items as recommended by the docs for spacing */}
            <CarouselContent
              className="-ml-1 md:-ml-2 flex items-stretch"
              aria-live="polite"
            >
              {slides.map((t, idx) => (
                <CarouselItem
                  key={t.name.split(" ").join("-") + "-" + idx}
                  className="pl-1 sm:pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex-shrink-0"
                >
                  <div className="h-full p-2">
                    <Card className="h-full">
                      <CardContent className="flex flex-col justify-between h-full p-5">
                        <blockquote className="text-gray-800 text-sm sm:text-base leading-relaxed">
                          <span className="text-3xl leading-none align-top text-blue-600 mr-2">
                            “
                          </span>
                          <span>{t.quote}</span>
                        </blockquote>

                        <footer className="mt-6 flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">
                              {t.name
                                .split(" ")
                                .map((s) => s[0])
                                .slice(0, 2)
                                .join("")
                                .toUpperCase()}
                            </div>
                          </div>

                          <div>
                            <div className="font-semibold text-sm text-gray-900">
                              {t.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {t.role}
                            </div>
                          </div>
                        </footer>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2  z-10" />
            <CarouselNext className="absolute right-0 top-1/2  z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
