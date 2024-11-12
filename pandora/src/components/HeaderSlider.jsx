import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHistory } from "react-router-dom";


export default function HeaderSlider() {

  const history = useHistory();

  const redirectToShop = () => {
    history.push("/shop");
  }

  const slides = [
    {
      title: "NEW SEASON COLLECTION",
      description: "Discover our latest collection featuring the newest fashion trends and timeless elegance. Find pieces that will make you stand out.",
      image: "/placeholder.svg?height=600&width=1200",
      btnText: "Explore Now"
    },
    {
      title: "EXCLUSIVE DISCOUNTS",
      description: "Don’t miss the biggest discounts of the year! Upgrade your wardrobe with stylish pieces at special prices.",
      image: "/placeholder.svg?height=600&width=1200",
      btnText: "Shop Discounts"
    },
    {
      title: "STYLE INSPIRATION",
      description: "Get inspired with daily style tips for a chic and unique look. Dive into the world of fashion!",
      image: "/placeholder.svg?height=600&width=1200",
      btnText: "View Style Tips"
    },
  ];

  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[400px] md:h-[600px] bg-mars overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-mars" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base text-white/90 mb-8 max-w-md">
                  {slide.description}
                </p>
                <Button
                  onClick={redirectToShop}
                  size="lg"
                >
                  {slide.btnText}
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
