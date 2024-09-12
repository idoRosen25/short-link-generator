import { cn } from '@/lib/utils'

export default function Typography(props: { className?: string; text: string }) {
  return <p className={cn(['leading-7 w-max self-center', props.className || ''])}>{props.text}</p>
}
