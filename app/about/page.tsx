import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Justice Releaf</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Learn about our mission, our team, and our journey to create a more equitable and sustainable future.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="story">Our Story</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground mb-4">
                      Justice Releaf is dedicated to addressing climate injustice in underprivileged communities through
                      sustainable initiatives, education, and advocacy. We believe that everyone deserves access to a
                      healthy environment, regardless of socioeconomic status.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Our mission is to create a world where environmental benefits and burdens are shared equally, and
                      where all communities have the resources and knowledge to adapt to climate change.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Our Values</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      <li>Environmental Justice</li>
                      <li>Community Empowerment</li>
                      <li>Sustainability</li>
                      <li>Education</li>
                      <li>Collaboration</li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Community members planting trees"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="story" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/istockphoto-1435005448-612x612.jpg"
                      alt="Community members working together on environmental initiatives"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4">
                      Justice Releaf was founded in 2015 by a group of environmental activists who recognized the
                      disproportionate impact of climate change on low-income communities and communities of color.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      What began as a small tree-planting initiative in one neighborhood has grown into a nationwide
                      movement with programs in urban greening, clean energy access, and climate education.
                    </p>
                    <p className="text-muted-foreground">
                      Today, Justice Releaf works with communities across the country to address environmental
                      inequalities and build a more sustainable and just future for all.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="team" className="mt-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Leadership Team</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="Katelyn Tuley"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">Katelyn Tuley</h3>
                        <p className="text-green-600 mb-2">Executive Director</p>
                        <p className="text-muted-foreground text-sm">
                          Leading our mission to create sustainable and equitable environmental solutions in San Diego communities.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="Madison Tuley"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">Madison Tuley</h3>
                        <p className="text-green-600 mb-2">Director of Operations</p>
                        <p className="text-muted-foreground text-sm">
                          Overseeing day-to-day operations and strategic planning to maximize our impact in the community.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="Tristan Ferdinand"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">Tristan Ferdinand</h3>
                        <p className="text-green-600 mb-2">Technology Director</p>
                        <p className="text-muted-foreground text-sm">
                          Leading our digital initiatives and implementing innovative solutions for environmental monitoring.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="Rishit Bhandari"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">Rishit Bhandari</h3>
                        <p className="text-green-600 mb-2">Community Engagement Director</p>
                        <p className="text-muted-foreground text-sm">
                          Building partnerships and fostering relationships with local communities and organizations.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img
                            src="/placeholder.svg?height=96&width=96"
                            alt="Akshay Uppal"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold">Akshay Uppal</h3>
                        <p className="text-green-600 mb-2">Sustainability Director</p>
                        <p className="text-muted-foreground text-sm">
                          Developing and implementing sustainable practices and environmental education programs.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-green-600 py-12 md:py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Mission</h2>
              <p className="mt-4 text-lg text-green-50">
                We're always looking for passionate individuals and organizations to join our fight for climate justice.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
                <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50">
                  <Link href="/get-involved">
                    Get Involved
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
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
