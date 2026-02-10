interface HighlightProps {
  children: React.ReactNode
  italic?: boolean
  font?: string
}

export function Highlight({
  children,
  italic = false,
  font = '',
}: HighlightProps) {
  return (
    <span
      className={`font-bold text-dark-blue-700 ${italic ? 'italic' : ''} ${font} `}
    >
      {children}
    </span>
  )
}
