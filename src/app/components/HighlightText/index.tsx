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
      className={`text-dark-blue-700 font-bold ${italic ? 'italic' : ''} ${font} `}
    >
      {children}
    </span>
  )
}
