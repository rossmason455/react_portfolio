import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

// Contract:
// props.project: {
//   slug, title, description, screenshots[{url,caption}], url, github, date, tags[]
// }
// Renders a card with screenshot, title, description, tags, and action links.

export function ProjectCard({ project }) {
  const { title, description, screenshots = [], url, github, tags = [], date } = project;
  const screenshot = screenshots[0];

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64">
      {/* Image Layer */}
      {screenshot?.url && (
        <img
          src={screenshot.url}
          alt={screenshot.caption || `${title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Details Overlay - Slides up to cover the whole card on hover */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out text-white flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-sm mt-1 opacity-90">
          {date && <span className="font-medium mr-2">{date}</span>}
          {description}
        </p>
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs uppercase tracking-wide bg-white/20 text-white border-white/30">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-3 flex gap-2">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              Live Site
            </a>
          )}
          {github && github.trim() !== "" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-300"
            >
              GitHub
            </a>
          )}
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="ml-auto bg-white/20 border-white/30 text-white hover:bg-white/30">
                View More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] sm:max-w-3xl lg:max-w-5xl p-0 overflow-hidden">
              <DialogHeader className="px-6 pt-6">
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {date && <span className="font-medium mr-2">{date}</span>}
                  {description}
                </DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6">
                {screenshots?.length > 0 ? (
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {screenshots.map((shot, idx) => (
                          <CarouselItem key={idx}>
                            <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                              <img
                                src={shot.url}
                                alt={shot.caption || `${title} screenshot ${idx + 1}`}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            {shot.caption && (
                              <p className="mt-2 text-sm text-muted-foreground">{shot.caption}</p>
                            )}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </div>
                ) : (
                  <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                    No screenshots available
                  </div>
                )}

                {tags?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="uppercase tracking-wide">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <DialogFooter className="mt-6 flex gap-3">
                  {url && (
                    <Button asChild>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Live Site
                      </a>
                    </Button>
                  )}
                  {github && github.trim() !== "" && (
                    <Button variant="secondary" asChild>
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </Button>
                  )}
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;