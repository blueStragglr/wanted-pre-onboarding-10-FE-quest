import Login from './Login'
import limeSrc from './assets/lime.png'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col items-center">
        <img src={limeSrc} alt="lime" className="w-20 h-20 mb-4" />
        <Login />
      </div>
    </div>
  )
}

export default App
