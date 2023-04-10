import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from './layout/root';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(<Route path='/' element={<Root />}></Route>)
  );

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
