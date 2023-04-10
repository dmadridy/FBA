import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from './layout/root';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/about';
import Blog from './pages/blog';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
