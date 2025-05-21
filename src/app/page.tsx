import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Instagram } from "lucide-react"
export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 md:py-24">
      <article className="flex flex-col md:flex-row items-center justify-between gap-8">
        <section className="w-full md:w-1/2 space-y-6">
          <p className="text-red-600 font-medium">HELLO, MY NAME IS</p>
          <h1 className="text-4xl md:text-4xl font-bold">JUAN MANUEL</h1>
          <p className="text-zinc-300 text-lg">
            Apassionate and dedicated junior web developer, with experience in front end and frameworks.
          </p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2">CONTACT ME</Button>
          </Link>

          <div className="flex items-center space-x-4 pt-4">
              <Link
                href="https://instagram.com"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-white hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
        </section>

        <figure className="w-full md:w-1/2 flex justify-end md:justify-center">
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
