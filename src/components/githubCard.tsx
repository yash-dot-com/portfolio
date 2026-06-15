import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function MoreProjectsCard() {
    return (
            <CardContent className="flex flex-col items-center justify-center gap-4 text-center border-dashed border-2 rounded-lg p-8">
                <Button variant="outline" asChild>
                    <a
                        href="https://github.com/yash-dot-com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View GitHub Profile
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardContent>
    )
}