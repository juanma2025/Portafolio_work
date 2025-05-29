import {Button} from "@/components/ui/button"

export default function ContactPage() {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h1>
            
            <span className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="space-y-4">
                    <p className="text-zinc-300">
                    Feel free to contact me for any questions or opportunities. I ll get back to you as soon as possible.
                    </p>

                    <div className="space-y-2">
                        <p className="font-medium">Email</p>
                        <p className="text-zinc-300">juanmatabanchoyc@gmail.com</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">Phone</p>
                        <p className="text-zinc-300">+57 3024993023</p>
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">Address</p>
                        <p className="text-zinc-300">Torres de fatima apto 1503 torre 1</p>
                    </div>
                </section>

                <form className="space-y-4">
                    <section className="space-y-2">
                        <label htmlFor="name" className="block">
                            Name
                        </label>
                        <input 
                        type="text"
                        id="name"
                        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-red-600"
                        required>
                        </input>
                    </section>

                    <section className="space-y-2">
                        <label htmlFor="name" className="block">
                            Email
                        </label>
                        <input 
                        type="text"
                        id="name"
                        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-red-600"
                        required>
                        </input>
                    </section>

                    <section className="space-y-2">
                        <label htmlFor="name" className="block">
                            Message
                        </label>
                        <textarea 
                        id="Message"
                        rows={5}
                        className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-red-600"
                        required>
                        </textarea>
                    </section>

                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2">Send Message</Button>
                </form>
            </span>
        </section>
    )
}