import type { JSX, ReactNode } from "react"

type TypographyProps = {
  size?: 'display-xl' | 'heading-lg' | 'heading-md' | 'md' | 'sm' | 'xs'
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

const sizeMap = {
  'display-xl': 'text-[var(--text-display-xl)] leading-[var(--leading-display-xl)]',
  'heading-lg': 'text-[var(--text-heading-lg)] leading-[var(--leading-heading-lg)]',
  'heading-md': 'text-[var(--text-heading-md)] leading-[var(--leading-heading-md)]',
  'md': 'text-[var(--text-md)] leading-[var(--leading-md)]',
  'sm': 'text-[var(--text-sm)] leading-[var(--leading-sm)]',
  'xs': 'text-[var(--text-xs)] leading-[var(--leading-xs)]',
}

export function Typography ({ size = 'md', children, className = '', as: Component = 'p' }: TypographyProps): JSX.Element {
  const sizeClass = sizeMap[size]

  return (
    <Component className={`${sizeClass} ${className}`}>
      {children}
    </Component>
  )
}

