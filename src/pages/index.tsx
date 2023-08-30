import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/ui/button";
import {
  AreaOfInterest,
  AreaOfInterestHeader,
  AreaOfInterestDescription,
} from "../components/area-of-interest";
import Image from "next/image";

function scrollToTarget() {
  const targetDiv = document.getElementById("featured");
  if (targetDiv) {
    targetDiv.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Eclectic Musings</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Welcome */}
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center">
          <Button variant="subtl">Follow along on Twitter</Button>
          <h1 className="mt-5 max-w-[400px] text-center md:max-w-[550px] lg:max-w-[800px]">
            The enriching journey of wisdom
          </h1>
          <h4 className="mt-3 max-w-[525px] text-center">
            Informative Articles Exploring the Realms of Cognitive Science,
            Computer Science, and Thought-Provoking Musings
          </h4>

          <div className="mt-5 flex">
            <Button onClick={ scrollToTarget }>Featured Article</Button>
            <Button className="ml-2" variant="outline">
              Featured Article
            </Button>
          </div>
        </div>
      </div>

      {/* Areas of interest 
      <div className="h-fit bg-background-secondary py-36">
        <div className="flex flex-col items-center">
          <p className="mt-10 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Areas of interest
          </p>
        </div>

        <div className="mx-10 mt-5 flex items-stretch justify-center space-x-2">
          <AreaOfInterest fileName="svg/illustration-computer-science.svg">
            <AreaOfInterestHeader>Computer Science</AreaOfInterestHeader>
            <AreaOfInterestDescription>
              Delving into the syntax of logic and algorithms, computer science
              employs the language of patterns and relationships to address
              challenges and comprehend the digital realm.
            </AreaOfInterestDescription>
          </AreaOfInterest>

          <AreaOfInterest fileName="svg/illustration-mathematics.svg">
            <AreaOfInterestHeader>Mathematics</AreaOfInterestHeader>
            <AreaOfInterestDescription>
              Exploring the language of patterns and relationships, mathematics
              is used to solve problems and understand the world.{" "}
            </AreaOfInterestDescription>
          </AreaOfInterest>

          <AreaOfInterest fileName="svg/illustration-cognitive-science.svg">
            <AreaOfInterestHeader>Cognitive Science</AreaOfInterestHeader>
            <AreaOfInterestDescription>
              The interdisciplinary study of how the mind works, encompassing
              psychology, neuroscience, linguistics, philosophy, and computer
              science.
            </AreaOfInterestDescription>
          </AreaOfInterest>

          <AreaOfInterest fileName="svg/illustration-cognitive-science.svg">
            <AreaOfInterestHeader>Electrical engineering</AreaOfInterestHeader>
            <AreaOfInterestDescription>
              The study and application of electronics, electromagnetism, and
              electrical systems to design, develop, and optimize various
              technologies and devices.
            </AreaOfInterestDescription>
          </AreaOfInterest>
        </div>
      </div>
      */}

      {/* Featured */}
      <div id="featured" className="bg-background-secondary min-h-screen flex justify-center items-center">
        <div className="mx-10 flex flex-col items-center md:flex-row md:justify-center">
          <div className="min-w-[375px] max-w-[525px] md:min-w-[450px]">
            <Image
              src="/covers/atomic-habits.png"
              width="550"
              height="100"
              alt=""
              layout="responsive"
            />
          </div>
          <div>
            <h2 className="mt-16">Atomic Habits</h2>
            <h4 className="mt-3 max-w-[550px]">
              <strong>TLDR;</strong> A guide to making small, consistent changes
              that compound over time for significant personal growth. The
              book&#39;s four-step framework helps reshape behavior and
              emphasizes tracking progress and focusing on small improvements.
            </h4>

            <div className="mt-10 flex space-x-2">
              <Button>Read Article</Button>
              <Button variant="outline">Purchase Book</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Open source */}
      <div className="flex justify-center bg-background py-56">
        <div className="mx-10 flex flex-col items-center">
          <h1 className="text-center">Proudly Open Source</h1>
          <h4 className="mt-5 max-w-[575px] text-center text-lg">
            Eclectic Musings is open source and powered by open source software.
            The code is available on{" "}
            <Link
              href="https://github.com/bstnGit/thoughtbase"
              className="underline"
              target="_blank"
            >
              GitHub
            </Link>
            .
          </h4>
        </div>
      </div>
    </>
  );
}
