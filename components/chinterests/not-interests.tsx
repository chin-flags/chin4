import SubSectionHeader from "../ui/sub-section-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function NotInterests() {
  const weaknesses = [
    {
      title: "Finishing side projects",
      description: "Finishing a side project once the fun part is over",
    },
    {
      title: "Asking for help",
      description:
        "Not because I don't want to collaborate. I just like banging my head on the wall first. It's part of the process.",
    },
    {
      title: "Meetings",
      description:
        "I don't hate them. I just don't thrive in them. Flow is where I do my best work, and unnnecessary meetings break that.",
    },
  ];

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <SubSectionHeader title="I'm Not So Good At" />

      <Carousel className="w-full">
        <CarouselContent>
          {weaknesses.map((weakness, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {weakness.title}
                    </h3>
                    <p className="text-muted-foreground text-md sm:text-lg leading-relaxed flex-grow">
                      {weakness.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
