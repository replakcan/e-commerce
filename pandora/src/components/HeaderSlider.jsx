"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  const slides = [
    {
      title: "GROCERIES DELIVERY",
      description: "We know how large objects will act, but things on a small scale just do not act that way.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "FAST DELIVERY",
      description: "Get your favorite food delivered to your doorstep in minutes.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "FRESH FOOD",
      description: "We ensure that all our food items are fresh and of the highest quality.",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ];

  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] md:h-[600px] bg-red-700 overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-red-700/80" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-8 max-w-md">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2">
        <ChevronLeft className="h-8 w-8" />
      </CarouselPrevious>

      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2">
        <ChevronRight className="h-8 w-8" />
      </CarouselNext>
    </Carousel>
  );
}
