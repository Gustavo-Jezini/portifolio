export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-white-100 px-8 py-4 shadow-lg">
      {children}
    </div>
  )
}
