export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white-100 rounded-md px-8 py-4 shadow-lg">
      {children}
    </div>
  )
}
