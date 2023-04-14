import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Data = lazy(() => import('../pages/Data'));
const Add = lazy(() => import('../pages/Add'));

const ProjectRoutes = () => {
  return (
    <>
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/data/view" Component={Data} />
            <Route path="/data/add" Component={Add} />
          </Routes>
        </Suspense>
      </BrowserRouter >
    </>
  )
}

export default ProjectRoutes;