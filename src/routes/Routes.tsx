import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Table = lazy(() => import('../pages/Table'));
const Add = lazy(() => import('../pages/Add'));
const Profile = lazy(() => import('../pages/Profile'));
const Update = lazy(() => import('../pages/Update'));

const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter >
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
      </BrowserRouter >
    </>
  )
}

export default ProjectRoutes;