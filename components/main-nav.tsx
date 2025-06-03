import Link from "next/link"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Leaf } from "lucide-react"

interface NavItem {
  title: string
  href: string
}

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href={`/${locale}`} className="mr-6 flex items-center space-x-2">
        <Leaf className="h-6 w-6 text-green-600" />
        <span className="hidden font-bold sm:inline-block">
          Justice Releaf
        </span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
} 