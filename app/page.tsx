"use client"

import Link from "next/link"
import { Leaf, MapPin, Heart, TreePine, School } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerChildren, scaleIn, bounceIn } from "@/components/animations"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
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
        <HeroSection />

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={fadeIn}
          className="container py-12 md:py-16 lg:py-20 relative"
        >
          <div className="absolute left-0 top-20 hidden xl:block">
            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-100"
            >
              <path
                d="M60 10C32.4 10 10 32.4 10 60C10 87.6 32.4 110 60 110C87.6 110 110 87.6 110 60C110 32.4 87.6 10 60 10ZM60 100C37.9 100 20 82.1 20 60C20 37.9 37.9 20 60 20C82.1 20 100 37.9 100 60C100 82.1 82.1 100 60 100Z"
                fill="currentColor"
              />
              <path
                d="M60 30C43.4 30 30 43.4 30 60C30 76.6 43.4 90 60 90C76.6 90 90 76.6 90 60C90 43.4 76.6 30 60 30ZM60 80C48.9 80 40 71.1 40 60C40 48.9 48.9 40 60 40C71.1 40 80 48.9 80 60C80 71.1 71.1 80 60 80Z"
                fill="currentColor"
              />
              <path
                d="M60 50C54.5 50 50 54.5 50 60C50 65.5 54.5 70 60 70C65.5 70 70 65.5 70 60C70 54.5 65.5 50 60 50Z"
                fill="currentColor"
              />
            </motion.svg>
          </div>
          <div className="absolute right-0 bottom-20 hidden xl:block">
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-100"
            >
              <path d="M75 12.5L93.75 50H56.25L75 12.5Z" fill="currentColor" />
              <path d="M112.5 31.25L131.25 68.75H93.75L112.5 31.25Z" fill="currentColor" />
              <path d="M37.5 31.25L56.25 68.75H18.75L37.5 31.25Z" fill="currentColor" />
              <path d="M75 87.5L93.75 125H56.25L75 87.5Z" fill="currentColor" />
              <path d="M112.5 106.25L131.25 143.75H93.75L112.5 106.25Z" fill="currentColor" />
              <path d="M37.5 106.25L56.25 143.75H18.75L37.5 106.25Z" fill="currentColor" />
            </svg>
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2 
              variants={bounceIn}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Our Mission
            </motion.h2>
            <motion.div 
              variants={scaleIn}
              className="flex justify-center my-6"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700">
                <Heart className="h-8 w-8" />
              </div>
            </motion.div>
            <motion.p 
              variants={fadeIn}
              className="mt-4 text-lg text-muted-foreground"
            >
              Justice Releaf is dedicated to addressing climate injustice in underprivileged communities through
              sustainable initiatives, education, and advocacy. We believe that everyone deserves access to a healthy
              environment, regardless of socioeconomic status.
            </motion.p>
          </div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={staggerChildren}
          className="container py-12 md:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <motion.h2 
              variants={bounceIn}
              className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl"
            >
              Our Initiatives
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-green-200 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-green-50 rounded-full"></div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <TreePine className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">Urban Greening</CardTitle>
                    <CardDescription>Transforming urban spaces with native plants</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We plant trees and create green spaces in concrete-dominated neighborhoods to improve air quality
                      and reduce heat islands.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/urban-greening">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-green-200 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-green-50 rounded-full"></div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-700"
                        >
                          <path
                            d="M12 3V5M12 5L9 8M12 5L15 8M5.6 9.6L7.2 10.2M7.2 10.2L6.4 14M7.2 10.2L10.2 8.2M18.4 9.6L16.8 10.2M16.8 10.2L17.6 14M16.8 10.2L13.8 8.2M12 21V17M12 17L8 15M12 17L16 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <CardTitle className="text-xl">Clean Energy Access</CardTitle>
                    <CardDescription>Bringing renewable energy to all communities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We help underprivileged communities access solar power and other renewable energy sources through
                      grants and education.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/clean-energy">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div 
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="border-green-200 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-20 h-20 bg-green-50 rounded-full"></div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <School className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">Climate Education</CardTitle>
                    <CardDescription>Empowering through knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We provide workshops and resources to help communities understand climate change and advocate for
                      environmental justice.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/programs/education">Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <StatsSection />

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={fadeIn}
          className="bg-green-50 py-12 md:py-16 lg:py-20"
        >
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-10 sm:text-4xl">Where We Work</h2>
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <svg
                    width="120"
                    height="80"
                    viewBox="0 0 120 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 opacity-20"
                  >
                    <path d="M60 0L120 80H0L60 0Z" fill="currentColor" />
                  </svg>
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 opacity-20 absolute -left-10 top-10"
                  >
                    <circle cx="40" cy="40" r="40" fill="currentColor" />
                  </svg>
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-600 opacity-20 absolute -right-10 top-10"
                  >
                    <circle cx="40" cy="40" r="40" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Barrio Logan</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    Working with local community to improve air quality and create green spaces in this historically underserved neighborhood.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">City Heights</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    Developing community gardens and providing environmental education programs in one of San Diego's most diverse communities.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Southeast San Diego</h3>
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    Implementing urban forestry initiatives and sustainable infrastructure projects to combat urban heat island effects.
                  </p>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Justice Releaf is focused on serving San Diego's communities that are most impacted by environmental inequality. 
                  Through our targeted approach, we're making a meaningful difference right here in America's Finest City.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <TestimonialSection />
        <NewsletterSection />
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
