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
          className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-md border border-border bg-card transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:border-transparent hover:shadow-[10px_10px_0_0_#7c3aed] sm:w-[47%] lg:w-[32%]"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
            <Image
              src={post.image as string}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 47vw, 32vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-start justify-between gap-3 p-4">
            <div>
              <h3 className="text-[14px] font-medium leading-snug text-foreground">{post.title}</h3>
              <p className="mt-1 font-mono text-[11.5px] uppercase tracking-[0.1em] text-muted-foreground">
                {post.company}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
        </a>
      ))}
    </Carousel>
  );
}
