import Link from "next/link"
import { ArrowRight, Calendar, Leaf, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Leaf className="h-6 w-6 text-green-600" />
            <span>Justice Releaf</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/programs" className="text-sm font-medium hover:underline underline-offset-4">
              Programs
            </Link>
            <Link href="/get-involved" className="text-sm font-medium hover:underline underline-offset-4">
              Get Involved
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild className="ml-4 bg-green-600 hover:bg-green-700">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-green-50 py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get Involved</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join our movement for climate justice. There are many ways to contribute to our mission.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="volunteer" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
                <TabsTrigger value="donate">Donate</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
              <TabsContent value="volunteer" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Volunteer With Us</h2>
                    <p className="text-muted-foreground mb-4">
                      Our volunteers are the backbone of our organization. Whether you have a few hours or a few days,
                      your time and skills can make a real difference in our fight for climate justice.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Volunteer Opportunities</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      <li>Tree planting and maintenance</li>
                      <li>Community garden development</li>
                      <li>Climate education workshops</li>
                      <li>Administrative support</li>
                      <li>Event planning and coordination</li>
                      <li>Advocacy and outreach</li>
                    </ul>
                    <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                      <Link href="/volunteer-form">
                        Become a Volunteer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Volunteers planting trees"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="donate" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Community garden project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Support Our Work</h2>
                    <p className="text-muted-foreground mb-4">
                      Your financial support enables us to continue our work in underprivileged communities. Every
                      donation, no matter the size, helps us create a more just and sustainable future.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Where Your Money Goes</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      <li>$25 plants a tree in an urban neighborhood</li>
                      <li>$50 provides climate education materials for a classroom</li>
                      <li>$100 helps a family access clean energy solutions</li>
                      <li>$500 supports the development of a community garden</li>
                    </ul>
                    <Button asChild className="mt-6 bg-green-600 hover:bg-green-700">
                      <Link href="/donate">
                        Donate Now
                        <Heart className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="events" className="mt-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Events</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">June 5, 2025</span>
                      </div>
                      <CardTitle className="text-xl">Community Tree Planting</CardTitle>
                      <CardDescription>Oakland, CA</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Join us for a day of tree planting in East Oakland. No experience necessary - we'll provide all
                        tools and training.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/events/tree-planting">Register</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">June 12, 2025</span>
                      </div>
                      <CardTitle className="text-xl">Climate Justice Workshop</CardTitle>
                      <CardDescription>Virtual Event</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Learn about the intersection of climate change and social justice, and how you can make a
                        difference in your community.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/events/workshop">Register</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 text-green-600 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">June 20, 2025</span>
                      </div>
                      <CardTitle className="text-xl">Community Garden Workday</CardTitle>
                      <CardDescription>Detroit, MI</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Help us maintain and expand our community garden in Detroit. All ages welcome!
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/events/garden-workday">Register</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-green-600 py-12 md:py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partner With Us</h2>
              <p className="mt-4 text-lg text-green-50">
                We collaborate with organizations, businesses, and government agencies to maximize our impact. If you're
                interested in partnering with Justice Releaf, we'd love to hear from you.
              </p>
              <Button asChild size="lg" className="mt-8 bg-white text-green-700 hover:bg-green-50">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-green-900 text-white">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Leaf className="h-6 w-6" />
                <span>Justice Releaf</span>
              </div>
              <p className="text-green-100">
                Fighting climate injustice in underprivileged communities through sustainable initiatives, education,
                and advocacy.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-green-100 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-green-100 hover:text-white">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="text-green-100 hover:text-white">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="text-green-100 hover:text-white">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-green-100 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <address className="not-italic text-green-100">
                <p>123 Green Street</p>
                <p>Eco City, EC 12345</p>
                <p className="mt-2">info@justicereleaf.org</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-green-100 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-green-800 pt-6 text-center text-green-100">
            <p>© {new Date().getFullYear()} Justice Releaf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
