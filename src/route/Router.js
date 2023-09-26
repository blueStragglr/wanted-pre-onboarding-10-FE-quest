import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Result from '../components/Result';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/result' element={<Result/>} />
        </Routes>
    )
}

export default Router;
