import './App.css';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RouteLayout from './components/RouteLayout';
import Cart from './components/Cart';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route  path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
