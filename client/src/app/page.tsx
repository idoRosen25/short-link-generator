import { MainContent } from '@/components/Content'
import Typography from '@/components/ui/Typography'

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen min-w-full font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col pt-20 md:pt-24 p-4 md:justify-normal w-2/3 pl-0">
        <h1 className="text-4xl w-max self-center mb-4">ShortURL Generator</h1>

        <Typography text="Enter a full length URL and get it shortned." className="mb-1 sm:mb-2" />
        <Typography text="Enter a short URL and get the full URL" />

        <MainContent className="mt-4 md:w-1/2 self-center" />
      </main>
    </div>
  )
}
