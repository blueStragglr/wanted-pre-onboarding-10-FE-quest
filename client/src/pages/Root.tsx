import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="container">
      <main>
        <Outlet />
      </main>
    </div>
  )
}
