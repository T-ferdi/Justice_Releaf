"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
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
  )
} 