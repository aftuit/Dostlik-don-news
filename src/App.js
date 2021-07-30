import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Inform from './pages/Inform';
import Login from './pages/Login';
import AdminMenus from './pages/AdminMenus.jsx'
import AdminNews from './pages/AdminNews';
import Category from './components/Category';
function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/inform" exact component={Inform} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin/menu" exact component={AdminMenus} />
        <Route path="/admin/news" exact component={AdminNews} />
        <Route path="/category/:url" exact component={Category} />
      </Switch>


      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
