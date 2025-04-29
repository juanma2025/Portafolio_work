import Image from "next/image";


export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12" >
            <section className="flex flex-col md: flex-row gap-8"></section>
                <section className="w-pull md:w-1/3 flex justify-center"></section>
                    <section className="border-4 border-red-600 p-1 max-w[350px]">
                        <Image src="/profile-image.jpg" alt="juan manuel" width={400} height={400} className="object cover" /> 
                    </section>
        </main>
    )
}