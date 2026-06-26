import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-stone-50 px-6 py-24">
            <div className="mx-auto max-w-2xl">
                {/*navigation bar*/}
                <div className="mb-10 flex justify-end items-center gap-5">
                    <Button variant={"outline"}>
                        <Link href="/">Back to Portfolio</Link>
                    </Button>
                </div>

                {/* content cards */}
                <Link href={"/hello-world"} className="mt-0 grid gap-2 grid-cols-1">
                    <Card className="w-full border-neutral-200 shadow-sm rounded-xl">
                        <CardHeader>
                            <h3 className="text-base font-bold text-black">Hello World!</h3>
                        </CardHeader>
                    </Card>
                </Link>
            </div>
        </div>
    )
}