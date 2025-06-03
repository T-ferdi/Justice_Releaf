import Link from "next/link"
import { ArrowRight, ExternalLink, Leaf, Users, Droplet, Sun, Wind } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramsPage() {
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Programs</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover how Justice Releaf is working to address climate injustice through our various initiatives and
                partnerships.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="initiatives" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="initiatives">Our Initiatives</TabsTrigger>
                <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>
              <TabsContent value="initiatives" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                          <Leaf className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">Urban Greening</CardTitle>
                      <CardDescription className="text-center">
                        Transforming urban spaces with native plants
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our Urban Greening initiative focuses on planting trees and creating green spaces in
                        concrete-dominated neighborhoods to improve air quality, reduce heat islands, and provide
                        community gathering spaces.
                      </p>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Tree planting in urban neighborhoods</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Community garden development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Green space restoration</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/programs/urban-greening">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                          <Sun className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">Clean Energy Access</CardTitle>
                      <CardDescription className="text-center">
                        Bringing renewable energy to all communities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our Clean Energy Access program works to ensure that all communities, regardless of
                        socioeconomic status, have access to clean, renewable energy sources and the benefits they
                        provide.
                      </p>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Solar panel installation assistance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Energy efficiency education</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Clean energy job training</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/programs/clean-energy">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-900">
                          <Users className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">Climate Education</CardTitle>
                      <CardDescription className="text-center">Empowering through knowledge</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Our Climate Education program provides resources and workshops to help communities understand
                        climate change, its impacts, and how they can advocate for environmental justice.
                      </p>
                      <ul className="mt-4 space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>School-based climate curriculum</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Community workshops</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Advocacy training</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/programs/education">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="partnerships" className="mt-6">
                <div className="grid gap-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-4">Our Partner Organizations</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Justice Releaf collaborates with various organizations to maximize our impact and reach. Together,
                      we work towards a more sustainable and equitable future.
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">San Diego 350</CardTitle>
                        <CardDescription>Building a movement for climate justice</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          San Diego 350 is building a movement for climate justice by mobilizing people to take action.
                          They work to prevent the worst impacts of climate change and promote a just, sustainable
                          future through education, outreach, public policy advocacy, and community organizing.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Our partnership with San Diego 350 focuses on community-based climate action initiatives and
                          educational programs in underserved communities throughout San Diego County.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                          <a href="https://sandiego350.org/programs" target="_blank" rel="noopener noreferrer">
                            Visit San Diego 350 Programs
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">Environmental Health Coalition</CardTitle>
                        <CardDescription>Achieving environmental and social justice</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          The Environmental Health Coalition (EHC) is dedicated to achieving environmental and social
                          justice. They organize and advocate to protect public health and the environment threatened by
                          toxic pollution, particularly in low-income and communities of color.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Our partnership with EHC focuses on addressing environmental hazards in disadvantaged
                          communities and advocating for policies that promote environmental justice and equitable
                          development.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                          <a href="https://environmentalhealth.org" target="_blank" rel="noopener noreferrer">
                            Visit Environmental Health Coalition
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">Climate Justice Beliefs Index</CardTitle>
                        <CardDescription>Measuring and advancing climate justice awareness</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          The Climate Justice Beliefs Index is a research initiative that measures public understanding
                          and beliefs about climate justice across different communities. Their work helps identify gaps
                          in awareness and informs targeted education and advocacy efforts.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Our partnership leverages their research to develop more effective climate education programs
                          and tailor our initiatives to address specific community needs and knowledge gaps.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/partnerships/cjbi">Learn More About This Partnership</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">Green Communities Coalition</CardTitle>
                        <CardDescription>Uniting for environmental equity</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          The Green Communities Coalition brings together grassroots organizations working on
                          environmental justice issues across the country. Their focus is on policy advocacy and
                          community organizing.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Our partnership with the Green Communities Coalition allows us to connect local initiatives to
                          national movements and amplify the voices of the communities we serve.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/partnerships/gcc">Learn More About This Partnership</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">Urban Sustainability Network</CardTitle>
                        <CardDescription>Creating sustainable urban environments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          The Urban Sustainability Network focuses on transforming urban environments through green
                          infrastructure, sustainable transportation, and community-led development projects.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Through our partnership, we collaborate on urban greening initiatives and share resources and
                          best practices for creating more sustainable and equitable urban spaces.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/partnerships/usn">Learn More About This Partnership</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="border-green-200">
                      <CardHeader>
                        <CardTitle className="text-xl">Clean Energy Alliance</CardTitle>
                        <CardDescription>Advancing renewable energy solutions</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          The Clean Energy Alliance works to accelerate the transition to renewable energy through
                          policy advocacy, education, and community-based clean energy projects.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Our partnership focuses on bringing clean energy solutions to underprivileged communities and
                          ensuring that the benefits of the clean energy transition are shared equitably.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/partnerships/cea">Learn More About This Partnership</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="impact" className="mt-6">
                <div className="grid gap-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      At Justice Releaf, we measure our success by the positive changes we create in communities. Here's
                      how our programs are making a difference.
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Environmental Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Leaf className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Urban Greening</h3>
                              <p className="text-muted-foreground">
                                10,000+ trees planted in urban neighborhoods, reducing air pollution by an estimated 15%
                                in target areas and decreasing summer temperatures by up to 5°F.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Droplet className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Water Conservation</h3>
                              <p className="text-muted-foreground">
                                15 million gallons of water saved annually through sustainable landscaping and rainwater
                                harvesting systems installed in 25+ communities.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Sun className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Clean Energy</h3>
                              <p className="text-muted-foreground">
                                500+ households in underprivileged communities now have access to solar power, reducing
                                carbon emissions by an estimated 2,500 tons annually.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Community Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Education & Empowerment</h3>
                              <p className="text-muted-foreground">
                                10,000+ individuals reached through climate education programs, with 85% reporting
                                increased knowledge and 60% taking concrete actions in their communities.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Wind className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Health Improvements</h3>
                              <p className="text-muted-foreground">
                                Communities with our urban greening projects have reported a 20% decrease in
                                heat-related illnesses and a 15% improvement in respiratory health indicators.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900 mt-1">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="font-semibold">Community Engagement</h3>
                              <p className="text-muted-foreground">
                                5,000+ volunteers engaged in our programs, with 70% coming from the communities we
                                serve, fostering local leadership and long-term sustainability.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="bg-green-600 py-12 md:py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Involved in Our Programs</h2>
              <p className="mt-4 text-lg text-green-50">
                Whether you want to volunteer, donate, or partner with us, there are many ways to support our work and
                make a difference in the fight for climate justice.
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
