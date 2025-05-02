import Image from "next/image"
import { ResumeSection } from "@/components/ResumeSection"
import { EducationItem} from "@/components/EducationItem"
import { WorkExperienceItem } from "@/components/WorkExperience"

export default function ResumePage() {
    return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold bg-red-600 inline-block px-4 py-1 mb-8">Resume</h1>

        <article className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left sidebar */}
        <aside className="md:col-span-3 bg-zinc-900 p-6 space-y-8">
            <section className="flex flex-col items-center text-center">
            <figure className="rounded-full border-4 border-red-600 p-1 w-40 h-40 overflow-hidden mb-4">
                <Image
                src="/profile-image.jpg"
                alt="Juan Manuel"
                width={160}
                height={160}
                className="rounded-full object-cover"
                />
            </figure>
            <h2 className="text-2xl font-bold">Juan Manuel</h2>
            <p className="text-zinc-400">Frontend Developer</p>
            </section>

            <section className="space-y-6">
            <article>
                <h3 className="text-zinc-400 uppercase text-sm mb-2">E-MAIL</h3>
                <p>juanmatabanchoyc@gmail.com</p>
            </article>

            <article>
                <h3 className="text-zinc-400 uppercase text-sm mb-2">PHONE</h3>
                <p>+57 3024993023</p>
            </article>

            <article>
                <h3 className="text-zinc-400 uppercase text-sm mb-2">ADDRESS</h3>
                <p>Torres de fatima apto 1503 torre 1</p>
            </article>
            </section>
        </aside>

        {/* Main content */}
        <section className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-8">
            <ResumeSection
                icon="profile"
                title="Profile"
                content="A highly motivated and detail-oriented junior front-end developer with a passion for creating innovative and visually appealing web applications. Proficient in HTML, CSS, JavaScript, and React, with experience in developing responsive and user-friendly websites. Strong problem-solving skills and a desire to learn and grow in a dynamic and fast-paced environment. A collaborative team player with good communication skills and a commitment to delivering high-quality work."
            />

            <ResumeSection
                icon="education"
                title="Education"
                content={
                <>
                    <EducationItem title="Python Level 2 Bootcamp" date="06/10/2023 - 06/30/2023" />
                    <EducationItem title="Software Engineering" date="Currently in 5th semester" />
                    <EducationItem title="Frontend Development Course, Platzi" date="10/12/2022 - 11/15/2022" />
                </>
                }
            />

            <ResumeSection
                icon="work"
                title="Work Experience"
                content={<WorkExperienceItem title="Web Development Assistant" company="San Nicolás School - Pasto" />}
            />
            </section>

            <section className="space-y-8">
            <ResumeSection
                icon="languages"
                title="Languages"
                content={
                <section className="space-y-2">
                    <p>Spanish – Native</p>
                    <p>English – B1</p>
                </section>
                }
            />

            <ResumeSection
                icon="soft-skills"
                title="Soft Skills"
                content={
                <ul className="list-disc pl-5 space-y-1">
                    <li>Effective communication</li>
                    <li>Attention to detail</li>
                    <li>Teamwork</li>
                    <li>Problem-solving</li>
                    <li>Adaptability</li>
                </ul>
                }
            />

            <ResumeSection
                icon="technical"
                title="Technical Skills"
                content={
                <ul className="list-disc pl-5 space-y-1">
                <li>CSS preprocessors</li>
                    <li>Web development frameworks (React, Next.js,vite)</li>
                    <li>Technical problem-solving</li>
                    <li>Adaptability to new technologies</li>
                </ul>
                }
            />

            <ResumeSection
                icon="github"
                title="Git Hub"
                content={<p className="break-words">https://github.com/juanma2025/Portafolio_work.git</p>}
            />
            </section>
        </section>
        </article>
    </section>
    )
}
