import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

const BasicRoutes = () => {
  return (
    <>
      <BrowserRouter >
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
          </Routes>
        </Suspense>
      </BrowserRouter >
    </>
  )
}

export default BasicRoutes;