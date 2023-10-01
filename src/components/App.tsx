import { Outlet } from 'react-router-dom'
import limeSrc from './../assets/lime.png'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 py-4">
      <div className="flex flex-col items-center">
        <img src={limeSrc} alt="lime" className="w-20 h-20 mb-4" />
        <Outlet />
      </div>
    </div>
  )
}
