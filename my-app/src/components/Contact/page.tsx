import { Data } from "@/app/Data";

export default function Contact() {
    return (
        <section id="blog" className="max-w-200 mx-auto px-5 pb-20">
        <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col items-center justify-center gap-8 ">
            <div>
                <h1 className="text-center ml-5">{Data.Contact.Headline}</h1>
            </div>

            <button className="rounded-lg bg-black h-10 w-30 flex items-center justify-center ">
                Contact me
            </button>
        </div>
        </div>
        </section>
    )
}

