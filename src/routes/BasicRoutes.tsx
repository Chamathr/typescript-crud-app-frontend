import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Signin = lazy(() => import('../pages/auth/signin'));
const Signup = lazy(() => import('../pages/auth/signup'));

const BasicRoutes = () => {
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/signup" Component={Signup} />
            <Route path="/signin" Component={Signin} />
          </Routes>
        </Suspense>
    </>
  )
}

export default BasicRoutes;