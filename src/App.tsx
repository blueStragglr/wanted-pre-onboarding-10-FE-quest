import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <p>레이아웃입니다.</p>
        <Outlet />
      </div>
    </>
  );
}

export default App;
