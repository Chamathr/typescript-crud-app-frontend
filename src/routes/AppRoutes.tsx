import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import AuthGuard from '../utils/AuthGuard';
import Table from '../pages/table/Table';
import Add from '../pages/add/Add';
import Profile from '../pages/profile/Profile';
import Update from '../pages/update/Update';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Signin = lazy(() => import('../pages/auth/signin'));
const Signup = lazy(() => import('../pages/auth/signup'));


const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/*public routes*/}
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/signup" Component={Signup} />
          <Route path="/signin" Component={Signin} />

          {/*auth routes */}
          <Route
            path="/data/view"
            element={
              <AuthGuard>
                <Table />
              </AuthGuard>
            }
          />
          <Route
            path="/data/add"
            element={
              <AuthGuard>
                <Add />
              </AuthGuard>
            }
          />
          <Route
            path="/data/profile/:id"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
          <Route
            path="/data/update/:id"
            element={
              <AuthGuard>
                <Update />
              </AuthGuard>
            }
          />
        </Routes>
      </Suspense>
    </>
  )
}

export default AppRoutes;