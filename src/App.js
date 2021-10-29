import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from './pages/Home/Banner/Banner';
import Navmenu from './components/Navmenu/Navmenu';
// import AllTourPackages from './pages/AllTourPackages/AllTourPackages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingPackage from './pages/BookingPackage/BookingPackage';
import Home from './pages/Home/Home/Home';
import AllTourPackages from './pages/AllTourPackages/AllTourPackages';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
// import AddNewPackage from './pages/AddNewPackage/AddNewPackage';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/booking/:bookingId">
              <BookingPackage></BookingPackage>
            </PrivateRoute>
            <Route path="/packages">
              <AllTourPackages></AllTourPackages>
            </Route>
            <Route path="/manageBooking">
              <ManageAllBookings></ManageAllBookings>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/addPackage">
            <AddNewPackage></AddNewPackage>
          </Route> */}
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
