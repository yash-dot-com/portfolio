import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-stone-50 px-6 py-24">
            <div className="mx-auto max-w-2xl">
                <div className="mb-5 flex justify-end items-center">
                    <Button variant={"outline"}>
                        <Link href={"/blogs"}>back to blogs</Link>
                    </Button>
                </div>
                <h1 className="font-extrabold text-2xl">Hello World</h1>
                <p>{`${new Date("06/26/2026").toLocaleDateString("en-Us", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}`}</p>

                {/* content section */}
            <div className="mt-10">
                Blogs is under development!
            </div>
            </div>

        </div>
    )
}