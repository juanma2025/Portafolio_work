import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
      <article className="flex flex-col md:flex-row items-center justify-between gap-8">
        <section className="w-full md:w-1/2 space-y-6">
          <p className="text-red-600 font-medium">HELLO, MY NAME IS</p>
          <h1 className="text-4xl md:text-6xl font-bold">JUAN MANUEL</h1>
          <p className="text-zinc-300 text-lg">
            a passionate and dedicated junior web developer, with experience in front end and frameworks.
          </p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2">CONTACT ME</Button>
          </Link>
        </section>

        <figure className="w-full md:w-1/2 flex justify-center md:justify-end">
          <span className="border-4 border-red-600 p-1">
            <Image
              src="/profile-image.jpg"
              alt="Juan Manuel"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </span>
        </figure>
      </article>
    </section>
  )
}
