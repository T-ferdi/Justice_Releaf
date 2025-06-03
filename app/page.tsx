import { SiteHeader } from "@/components/site-header"
import { HomeContent } from "@/components/home-content"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HomeContent />
      </main>
    </div>
  )
}
