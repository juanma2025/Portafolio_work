import {Button} from "@/components/ui/button"

export default function ContactPage() {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h1>
            
            <span className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="space-y-4">
                    <p className="text-zinc-300">
                    Feel free to contact me for any questions or opportunities. I'll get back to you as soon as possible.
                    </p>

                    <div className="space-y-2">
                        <p className="font-medium">Email</p>
                        <p className="text-zinc-300">juanmatabanchoyc@gmail.com</p>
                    </div>

                    <div></div>


                </section>

            </span>
        </section>
    )
}