import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeaderImage from "@/public/images/adobo.png";
import Menu1 from "@/public/images/menu1.jpg";
import Menu2 from "@/public/images/menu2.jpg";
import Menu3 from "@/public/images/menu3.jpg";
import Menu4 from "@/public/images/menu4.jpg";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section id="home" className=" py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-5 flex flex-wrap items-center">
                {/* Text Content */}
                <div className="lg:max-w-[600px]">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-7xl">
                    Welcome to Filipino de Cuisine!
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Your destination for authentic and delicious Filipino food.
                    Our passion is to bring the flavors of the Philippines to
                    your table, with dishes that are rich in tradition and
                    culture.
                  </p>
                </div>
                {/* Image */}
                <div className="flex justify-center max-w-[500px]">
                  <Image
                    src={HeaderImage}
                    alt="Filipino food"
                    className="md:w-[400px] md:h=[300px] lg:w-[500px] lg:h=[600px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl text-green-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About
              </h2>
              <p className="mx-auto max-w-[800px]  text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                "Our menu features a variety of Filipino dishes, including
                classic favorites like adobo, sinigang, and lechon, as well as
                unique dishes that showcase the diversity of Filipino cuisine.
                We use only the freshest ingredients and traditional cooking
                techniques to ensure that our dishes are authentic and
                delicious."
              </p>
            </div>
          </div>
        </section>
        <section
          id="menu"
          className="w-full mt-30 py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl text-red-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Menu
              </h2>
              <p className="mx-auto max-w-[600px]  text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the foods we serve.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[900px] grid gap-4 min-[500px]:grid-cols-2">
              <Link
                className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:scale-105"
                href="#"
              >
                <Image
                  alt="Food 1"
                  className="object-cover blur-[2px]"
                  height="600"
                  src={Menu1}
                  style={{
                    aspectRatio: "600/335",
                    objectFit: "cover",
                  }}
                  width="500"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-left gap-1 pointer-events-none">
                  <h3 className="text-2xl text-white dark:text-white font-bold tracking-tighter group:underline group:underline-offset-4">
                    Adobo
                  </h3>
                  <p className="text-white dark:text-white">
                    a dish that is usually made with meat (chicken, pork, or
                    beef) marinated in vinegar, soy sauce, garlic, and other
                    spices.
                  </p>
                </div>
              </Link>
              <Link
                className="group relative overflow-hidden rounded-lg border  border-gray-200 shadow-sm transition-all hover:scale-105"
                href="#"
              >
                <Image
                  alt="Project 2"
                  className="object-cover blur-[2px]"
                  height="335"
                  src={Menu2}
                  style={{
                    aspectRatio: "600/335",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-left gap-1 pointer-events-none">
                  <h3 className="text-2xl text-white dark:text-white font-bold tracking-tighter group:underline group:underline-offset-4">
                    Menudo
                  </h3>
                  <p className="text-white dark:text-white">
                    a traditional stew from the Philippines made with pork and
                    sliced liver in tomato sauce with carrots and potatoes.
                  </p>
                </div>
              </Link>
              <Link
                className="group relative overflow-hidden rounded-lg border  border-gray-200 shadow-sm transition-all hover:scale-105"
                href="#"
              >
                <Image
                  alt="Project 3"
                  className="object-cover blur-[2px] filter brightness-75"
                  height="335"
                  src={Menu3}
                  style={{
                    aspectRatio: "600/335",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-left gap-1 pointer-events-none">
                  <h3 className="text-2xl  text-white dark:text-white font-bold tracking-tighter group:underline group:underline-offset-4">
                    Sinigang na Baboy
                  </h3>
                  <p className="text-white dark:text-white">
                    a delightful sour soup made with pork ribs, vegetables, and
                    tamarind-flavored broth. It's hearty, tasty and perfect for
                    cold weather.
                  </p>
                </div>
              </Link>
              <Link
                className="group relative overflow-hidden rounded-lg border  border-gray-200 shadow-sm transition-all hover:scale-105"
                href="#"
              >
                <Image
                  alt=""
                  className="object-cover blur-[2px] filter brightness-75"
                  height="335"
                  src={Menu4}
                  style={{
                    aspectRatio: "600/335",
                    objectFit: "cover",
                  }}
                  width="600"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-left gap-1 pointer-events-none">
                  <h3 className="text-2xl text-white dark:text-white font-bold tracking-tighter group:underline group:underline-offset-4">
                    Bicol Express
                  </h3>
                  <p className="text-white dark:text-white">
                    a famous stew made with gata (coconut milk) and wild
                    chilies. Traditionally, pork and balaw (shrimp paste) take
                    centerstage, cooking in a luscious, fiery sauce.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 border-t"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Interested in working together? Send me a message.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] space-y-2">
              <form className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Subject" type="text" />
                <Textarea
                  className="min-h-[150px]"
                  placeholder="Your Message"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Created by Clinton Saladino. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
