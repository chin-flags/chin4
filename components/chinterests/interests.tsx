import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Interests() {
  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 h-full md:col-span-2 flex flex-col md:flex-row">
          <Card className="h-full flex-1">
            <CardContent className="flex flex-col md:flex-row gap-6 h-full relative p-0">
              <div className="w-full h-48 md:w-64 md:h-64 relative flex-shrink-0 order-0 md:order-none">
                <div className="block md:hidden w-full h-full">
                  <Image
                    src="/chin-writer-sm.png"
                    alt="writer banner"
                    fill
                    className="object-cover aspect-[2/1] rounded-md"
                    priority
                  />
                </div>
                <div className="hidden md:block w-full h-full">
                  <Image
                    src="/chin-writer.png"
                    alt="writer banner"
                    fill
                    className="object-contain aspect-square rounded-md"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 py-6 px-6 order-1 md:order-none">
                <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  Writing stuff
                </h3>
                <div className="text-muted-foreground text-lg sm:text-lg leading-relaxed mb-4">
                  <p>
                    If the word{" "}
                    <Link
                      href="https://aniwarathe.lk/"
                      className="text-yellow-500 mx-1 font-bold"
                      target="_new"
                    >
                      අනීවාරතේ
                    </Link>
                    makes sense to you or you&apos;re the type to click
                    everything on the internet, click it. That&apos;s my blog
                    written in Sinhala (A language in Sri Lanka)
                  </p>
                  <p>Or</p>
                  <p>
                    Settle for my questionable English at
                    <Link
                      href="/sketchin"
                      className="text-yellow-500 ml-2 font-bold"
                      target="_new"
                    >
                      Sketchin
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
       
        <Card className="h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Dealing with LLMs
            </h3>
            <p className="text-muted-foreground text-lg sm:text-lg leading-relaxed flex-grow">
              I usually say thank you when a LLM responds to me with good answers, even though we assume that they are soulless. Further I build LLM apps for fun
            </p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Blockchain, web3 and other related stuff
            </h3>
            <p className="text-muted-foreground text-lg sm:text-lg leading-relaxed flex-grow">
              I build web3 apps and navigate the decentralized world.
            </p>
          </CardContent>
        </Card>
        <div className="col-span-1 h-full md:col-span-2 flex flex-col md:flex-row">
          <Card className="h-full flex-1">
            <CardContent className="flex flex-col md:flex-row gap-6 h-full relative p-0">
              <div className="w-full h-48 md:w-64 md:h-64 relative flex-shrink-0 order-0 md:order-none">
                <Image
                  src="/chin-code.jpg"
                  alt="writer banner"
                  fill
                  className="object-cover md:object-contain aspect-[2/1] md:aspect-square rounded-md"
                  priority
                />
              </div>
              <div className="flex flex-col flex-1 py-6 px-6 order-1 md:order-none">
                <div className="text-muted-foreground text-lg sm:text-lg leading-relaxed mb-4">
                  <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Building Full stack web apps
                  </h3>
                  <p className="text-muted-foreground text-lg sm:text-lg leading-relaxed flex-grow">
                  I&apos;m fairly good at building full stack webapps (like this one). My stack? Whatever works. Right now, it&apos;s mostly Next, Node, Tailwind, and vibes.

                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Fixing leaking pipes, including gas and water
            </h3>
            <p className="text-muted-foreground text-lg sm:text-lg leading-relaxed flex-grow">
              Carried this skill from my previous job. I still do these fixes for a non profit organisation called &quot;Home&quot;
            </p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardContent className="p-6 h-full flex flex-col">
            <h3 className="font-bold text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              Raising my 3-year old daughter
            </h3>
            <p className="text-muted-foreground text-lg sm:text-lg leading-relaxed flex-grow">
              Our home&apos;s junior dev, whose job hasn&apos;t been replaced by AI yet, likely won&apos;t be, because no LLM is trained to handle the infinite &quot;but why?&quot; loop, and who tests LLMs with prompts like &quot;asfuhgf kjsfskajfh&quot;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
