import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialSection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20 relative">
      <div className="absolute top-10 left-0 w-full overflow-hidden h-40 opacity-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#16a34a"
          ></path>
        </svg>
      </div>
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl">Community Voices</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Maria Rodriguez" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Community Member</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Justice Releaf transformed our neighborhood by planting trees along our streets. The air feels
                  cleaner, and our children now have shaded areas to play in during hot summer days."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="James Washington" />
                    <AvatarFallback>JW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">James Washington</p>
                    <p className="text-sm text-muted-foreground">School Principal</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The climate education program has been eye-opening for our students. They're now leading
                  environmental initiatives in our school and educating their families about sustainability."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Aisha Johnson" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Aisha Johnson</p>
                    <p className="text-sm text-muted-foreground">Community Organizer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Justice Releaf helped us advocate for cleaner air in our neighborhood. Their support was instrumental
                  in getting local factories to reduce their emissions."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-12">
          <svg
            width="200"
            height="50"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-100"
          >
            <path
              d="M0 25C0 11.2 11.2 0 25 0H175C188.8 0 200 11.2 200 25C200 38.8 188.8 50 175 50H25C11.2 50 0 38.8 0 25Z"
              fill="currentColor"
            />
            <path
              d="M50 25C50 18.4 55.4 13 62 13H138C144.6 13 150 18.4 150 25C150 31.6 144.6 37 138 37H62C55.4 37 50 31.6 50 25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
