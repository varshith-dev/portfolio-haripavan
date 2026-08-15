import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/data";
import { Carousel } from "@/components/carousel";

// Image-forward: only cards that actually have a thumbnail.
const withImages = posts.filter((p) => p.image);

export function PostsCarousel({ dark = false }: { dark?: boolean }) {
  return (
    <Carousel autoplay dark={dark}>
      {withImages.map((post, i) => (
        <a
          key={`${post.title}-${i}`}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group agency-card flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] border border-border bg-card sm:w-[48%] lg:w-[32%]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
            <Image
              src={post.image as string}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
              className="object-cover transition-transform duration-500 group-hover:scale-103"
            />
          </div>
          <div className="flex items-start justify-between gap-3 p-5">
            <div>
              <h3 className="font-display text-[15px] font-semibold leading-snug text-foreground transition-colors group-hover:text-foreground/80">{post.title}</h3>
              <p className="mt-1.5 font-mono text-[11.5px] uppercase tracking-wider text-muted-foreground font-medium">
                {post.company}
              </p>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] bg-paper text-foreground border border-border transition-all duration-200 group-hover:bg-foreground group-hover:text-background">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </a>
      ))}
    </Carousel>
  );
}
