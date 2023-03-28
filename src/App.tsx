import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/home';
import Root from './layout/root';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
