import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

type Participation = {
  eventName: string
  description: string
  linkToX: string
  type: string
}

export function ParticipationSection({
  participation,
}: {
  participation: Participation[]
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2"
    >
      {participation.map((event, index) => (
        <AccordionItem
          key={event.eventName}
          value={`item-${index}`}
          className="
            rounded-xl
            border
            bg-card/50
            px-4
            transition-all
            duration-300
            hover:bg-accent/40
            hover:shadow-sm
          "
        >
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex w-full items-start justify-between gap-4 pr-4">
              <h3 className="text-left font-medium">
                {event.eventName}
              </h3>

              <Badge
                variant="secondary"
                className="shrink-0"
              >
                {event.type}
              </Badge>
            </div>
          </AccordionTrigger>

          <AccordionContent className="space-y-4 pb-4">
            {event.description && (
              <p className="text-sm leading-7 text-muted-foreground">
                {event.description}
              </p>
            )}

            {event.linkToX && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a
                  href={event.linkToX}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink className="mr-2 size-4" />
                  View X Post
                </a>
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}