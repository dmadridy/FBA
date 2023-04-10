import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from './layout/root';
import Home from './pages/home';
import Projects from './pages/projects';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
