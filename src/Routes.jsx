import { Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth/Auth';
import { SigninContainer } from '@/components/organism/Auth/SigninContainer';
import { SignupContainer } from '@/components/organism/Auth/SignupContainer';
export const AppRoutes = () =>{
    return(
        <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
        <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
        <Route path="/home" element="Auth" />
        {/* <Toaster /> */}
      </Routes>
    )

}