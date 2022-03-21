import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Navigation/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Navigation/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Services from './Pages/Home/Services/Services';
import Doctors from './Pages/Home/Doctors/Doctors';
import Specialists from './Pages/Home/Specialists/Specialists';
import Departments from './Pages/Home/Departments/Departments';
import ExploreDepartments from './Pages/Home/ExploreDepartments/ExploreDepartments';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/doctors">
                <Doctors></Doctors>
              </Route>
              <Route path="/specialists">
                <Specialists></Specialists>
              </Route>
              <Route path="/departments">
                <Departments></Departments>
              </Route>
              <Route path="/exploreDepartments">
                <ExploreDepartments></ExploreDepartments>
              </Route>
              <Route path="*">
                <NotFound></NotFound> 
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
