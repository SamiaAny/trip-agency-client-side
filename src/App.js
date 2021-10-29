import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Banner from './pages/Home/Banner/Banner';
import Navmenu from './components/Navmenu/Navmenu';
// import AllTourPackages from './pages/AllTourPackages/AllTourPackages';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import BookingPackage from './pages/BookingPackage/BookingPackage';
import Home from './pages/Home/Home/Home';
import AllTourPackages from './pages/AllTourPackages/AllTourPackages';
import ManageAllBookings from './pages/ManageAllBookings/ManageAllBookings';
import AddNewPackage from './pages/AddNewPackage/AddNewPackage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navmenu></Navmenu>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/booking/:bookingId">
            <BookingPackage></BookingPackage>
          </Route>
          <Route path="/packages">
            <AllTourPackages></AllTourPackages>
          </Route>
          <Route path="/manageBooking">
            <ManageAllBookings></ManageAllBookings>
          </Route>
          <Route path="/addPackage">
            <AddNewPackage></AddNewPackage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
