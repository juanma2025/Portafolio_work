import Image from "next/image"
import { Button } from "@/components/ui/button"
import SkillBadge from "@/components/Skillbadge"

export default function AboutPage() {
    return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
        <article className="flex flex-col md:flex-row gap-8">
        <figure className="w-full md:w-1/3 flex justify-center">
            <span className="border-4 border-red-600 p-4 max-w-[600px]">
            <Image src="/profile-image.jpg" alt="Juan Manuel" width={400} height={400} className="object-cover" />
            </span>
        </figure>

        <section className="w-full md:w-2/3 space-y-6">
            <header className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-600"></span>
            <h2 className="text-xl text-zinc-300">About Me</h2>
            </header>

            <h1 className="text-3xl md:text-4xl font-bold">Who Am I</h1>

            <section className="space-y-4 text-zinc-300">
            <p>
                Hi! I'm a passionate junior web developer with a strong motivation for creating modern, functional and
                aesthetically appealing digital experiences. I specialize in frontend development using frameworks like
                Next.js and React, and I complement my interfaces with Tailwind CSS, HTML, CSS and JavaScript, always
                applying clean code and good development practices.
            </p>

            <p>
                My approach is guided by object-oriented programming principles, which allows me to build scalable,
                reusable and maintainable solutions. I enjoy the challenge of transforming ideas into real and efficient
                products, paying special attention to both performance and user experience.
            </p>

            <p>
                I am constantly learning, exploring new technologies and perfecting my skills to keep myself updated in
                such a dynamic environment as web development.
            </p>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <SkillBadge icon="html" name="Html5" />
            <SkillBadge icon="css" name="Css3" />
            <SkillBadge icon="typescript" name="TypeScript" />
            <SkillBadge icon="nextjs" name="Next.js" />
            <SkillBadge icon="react" name="React" />
            <SkillBadge icon="figma" name="Figma" />
            <SkillBadge icon="figma" name="Tailwind" />
            <SkillBadge icon="python" name="python" />
            </section>

            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2 mt-6">Download CV</Button>
        </section>
        </article>
    </section>
    )
}
