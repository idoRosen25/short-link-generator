'use client'
import { ChangeEvent, useState } from 'react'
import { Input } from './ui/Input'
import Typography from './ui/Typography'
import { camelToPascalWithSpaces, cn } from '@/lib/utils'
import { Button } from './ui/Button'
import { Spinner } from './Spinner'
import { cerateShortLink } from '@/api/requests'
import { ShortLinkRes } from '@/api/types'

interface Props {
  className?: string
}
export function MainContent({ className = '' }: Props) {
  const [inputValue, setInputValue] = useState('')
  const [generateRes, setGenerateRes] = useState<ShortLinkRes | null>()
  const [isLoading, setIsLoading] = useState(false)

  console.log('generateRes: ', generateRes)
  return (
    <section className={cn(['flex flex-col', className])}>
      <Input
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.currentTarget.value)
        }}
        placeholder="Enter Full URL or ShortLink"
        className="self-center mb-2"
      />
      {(isLoading || generateRes) && (
        <div className="min-h-8 flex flex-col">
          <div className="flex justify-center">{isLoading && <Spinner className="self-center" />}</div>
          {generateRes &&
            Object.entries(generateRes).map(([key, value]) => {
              return <Typography text={`${camelToPascalWithSpaces(key)}: ${value}`} />
            })}
        </div>
      )}
      <div className="min-w-56 w-max self-center mt-4 md:-0 md:-ml-4 lg:ml-0 flex flex-col md:flex-row md:items-start gap-2 justify-around">
        <Button
          onClick={() => {
            setGenerateRes(null)
            setIsLoading(true)
            cerateShortLink(inputValue).then((res) => {
              setTimeout(() => {
                setInputValue('')
                setGenerateRes(res)
                setIsLoading(false)
              }, 1000)
            })
          }}
          className="bg-indigo-700 text-white font-semibold"
        >
          Generate Link
        </Button>
        <Button
          className="bg-green-700 font-semibold"
          disabled={!generateRes}
          onClick={() => {
            window.open(generateRes?.originalLink, '_blank', 'noopener,noreferrer')
          }}
        >
          Browse
          {/* <Link
            href={generateRes?.originalLink || ''}
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            Foo
          </Link> */}
        </Button>
        <Button
          onClick={() => {
            setInputValue('')
            setGenerateRes(null)
          }}
          variant={'destructive'}
          className="font-semibold"
        >
          Clear
        </Button>
      </div>
    </section>
  )
}
