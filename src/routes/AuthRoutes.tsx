import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Table = lazy(() => import('../pages/Table'));
const Add = lazy(() => import('../pages/Add'));
const Profile = lazy(() => import('../pages/Profile'));
const Update = lazy(() => import('../pages/Update'));

const AuthRoutes = () => {
  return (
    <>
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/data/view" Component={Table} />
            <Route path="/data/add" Component={Add} />
            <Route path="/data/profile/:id" Component={Profile} />
            <Route path="/data/update/:id" Component={Update} />
          </Routes>
        </Suspense>
      </BrowserRouter >
    </>
  )
}

export default AuthRoutes;