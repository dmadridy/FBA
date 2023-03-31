import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Root from './layout/root';
import Home from './pages/home';
import { Counter } from './components/counter';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path='/' element={<Root />}>
        <Route index element={<Counter />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
