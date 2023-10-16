interface GeneralLayoutPorps {
  children: React.ReactNode
}

export default function GeneralLayout({ children }: GeneralLayoutPorps) {
  return (
    <div className="container">
      <main>
        {children}
      </main>
    </div>
  )
}
