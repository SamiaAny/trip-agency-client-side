import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './components/Navmenu/Navmenu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingPackage from './pages/BookingPackage/BookingPackage';
import Home from './pages/Home/Home/Home';
import AllTourPackages from './pages/AllTourPackages/AllTourPackages';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PhotoGallery from './pages/Home/PhotoGallery/PhotoGallery';
import Blog from './pages/Home/Blog/Blog';
import About from './pages/Home/About/About';
import Footer from './components/Footer/Footer';
import MyOrder from './pages/MyOrder/MyOrder';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navmenu></Navmenu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/gallery">
              <PhotoGallery></PhotoGallery>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <BookingPackage></BookingPackage>
            </PrivateRoute>
            <Route path="/packages">
              <AllTourPackages></AllTourPackages>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/manageBooking">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute>
            <Route path="/addPackage">
              <AddNewPackage></AddNewPackage>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
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
