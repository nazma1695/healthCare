import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./shared/Header/Header";
import Home from "./components/pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ServiceDetails from "./components/pages/ServiceDetails/ServiceDetails";
import Services from "./components/pages/Services/Services";
import Project from "./components/pages/Project/Project";
import Blog from "./components/pages/Blog/blog";
import Contact from "./components/pages/Contact/Contact";
import Login from "./components/pages/Login/Login";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/project">
              <Project></Project>
            </PrivateRoute>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path={"/appointment/:id"}>
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
