import Image from "next/image"
import SkillBadge from "@/components/Skillbadge"

export default function AboutPage() {
    return (
    <section className="about-page">
        <article className="about-page__grid">
        <figure className="about-page__media">
            <span className="about-page__photo">
            <Image src="/image2.png" alt="Juan Manuel" width={520} height={640} className="about-page__image" priority />
            </span>
        </figure>

        <section className="about-page__content">
            <header className="about-page__header">
            <span className="about-page__marker"></span>
            <h2>About Me</h2>
            </header>

            <h1 className="about-page__title">Who Am I</h1>

            <section className="about-page__text">
            <p>
                Hi! I am a passionate junior web developer with a strong motivation for creating modern, functional and
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

            <section className="about-page__skills" aria-label="Frameworks and languages">
            <SkillBadge icon="html" name="Html5" />
            <SkillBadge icon="css" name="Css3" />
            <SkillBadge icon="javascript" name="JavaScript" />
            <SkillBadge icon="typescript" name="TypeScript" />
            <SkillBadge icon="nextjs" name="Next.js" />
            <SkillBadge icon="vite" name="Vite" />
            <SkillBadge icon="react" name="React" />
            <SkillBadge icon="figma" name="Figma" />
            <SkillBadge icon="tailwind" name="Tailwind" />
            <SkillBadge icon="python" name="Python" />
            </section>

            <a href="/cv-juan-manuel.pdf" download className="about-page__button">
                Download CV
            </a>
        </section>
        </article>
    </section>
    )
}
