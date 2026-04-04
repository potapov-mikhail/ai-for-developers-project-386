import { Routes, Route, Link } from 'react-router'
import { buttonVariants } from '@/components/ui/button'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Booking App</h1>
      <p className="text-muted-foreground">Select a section:</p>
      <div className="flex gap-4">
        <Link to="/public" className={buttonVariants()}>
          Public
        </Link>
        <Link to="/owner" className={buttonVariants({ variant: 'outline' })}>
          Owner
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  )
}

export default App
