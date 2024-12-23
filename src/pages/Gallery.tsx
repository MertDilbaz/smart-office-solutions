import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  const images = [
    "img/sos1.jpg",
    "img/sos2.jpg",
    "img/sos3.jpg",
    "img/sos4.jpg",
    "img/sos5.jpg",
    "img/sos6.jpg",
    "img/sos7.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Galeri</h1>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="aspect-video relative rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}