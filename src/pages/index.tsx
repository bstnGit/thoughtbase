import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { AreaOfInterest, AreaOfInterestHeader, AreaOfInterestDescription } from '../components/area-of-interest';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eclectic Musings</title>
        <meta name="description" content="Index" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-background flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <Button variant="subtl">Follow along on Twitter</Button>
          <p className="mt-5 font-bold text-4xl md:text-5xl lg:text-7xl max-w-[400px] md:max-w-[550px] lg:max-w-[800px] text-center">
            The enriching journey of wisdom
          </p>
          <p className="mt-3 text-sm md:text-base max-w-[300px] text-center">Informative Articles Exploring the Realms of Cognitive Science, Computer Science, and Thought-Provoking Musings</p>

          <div className="mt-5 flex">
            <Button>Explore Article</Button>
            <Button className="ml-2" variant="outline">Featured Article</Button>
          </div>
        </div>
      </div>
      <div className="bg-background-secondary h-fit py-10">
        <div className="flex flex-col items-center">
          <p className="mt-10 font-bold text-3xl md:text-4xl lg:text-5xl text-primary">Areas of interest</p>
        </div>

        <div className="flex justify-center mt-5 mx-10 space-x-2">
            <AreaOfInterest fileName="illustration-computer-science.svg">
                  <AreaOfInterestHeader>Computer Science</AreaOfInterestHeader>
                  <AreaOfInterestDescription>Delving into the syntax of logic and algorithms, computer science employs the language of patterns and relationships to address challenges and comprehend the digital realm.</AreaOfInterestDescription>
              </AreaOfInterest>

            <AreaOfInterest fileName="illustration-mathematics.svg">
                  <AreaOfInterestHeader>Mathematics</AreaOfInterestHeader>
                  <AreaOfInterestDescription>Exploring the language of patterns and relationships, mathematics is used to solve problems and understand the world. </AreaOfInterestDescription>
              </AreaOfInterest>

              <AreaOfInterest fileName="illustration-cognitive-science.svg">
                  <AreaOfInterestHeader>Cognitive Science</AreaOfInterestHeader>
                  <AreaOfInterestDescription>The interdisciplinary study of how the mind works, encompassing psychology, neuroscience, linguistics, philosophy, and computer science.</AreaOfInterestDescription>
              </AreaOfInterest>
        </div>

      </div>
    </>
  );
}
