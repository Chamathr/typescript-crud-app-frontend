import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Table = lazy(() => import('../pages/table/Table'));
const Add = lazy(() => import('../pages/add/Add'));
const Profile = lazy(() => import('../pages/profile/Profile'));
const Update = lazy(() => import('../pages/update/Update'));
const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));

const AuthRoutes = () => {
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/data/view" Component={Table} />
            <Route path="/data/add" Component={Add} />
            <Route path="/data/profile/:id" Component={Profile} />
            <Route path="/data/update/:id" Component={Update} />
          </Routes>
        </Suspense>
    </>
  )
}

export default AuthRoutes;