
import {BrowserRouter, Link, Routes, Route } from "react-router-dom";
import CarsForRentalPage from "./views/CarsForRentalPage";
import NewsPage from "./views/NewsPage";
import SingleCarPage from "./views/SingleCarPage";
import ContactPage from "./views/ContactPage";
import Dashboard from "./views/ProfilePages/Dashboard";
import FavoriteCars from "./views/ProfilePages/FavoriteCars";
import Orders from "./views/ProfilePages/Orders";
import Profile from "./views/ProfilePages/Profile";
import Home from "./views/HomePage/Home";
import Booking from "./views/Booking";
import BookingHoldForm from "./features/bookings/BookingHoldForm";
import MyBookings from "./features/bookings/MyBookings";
import AboutUs from "./views/AboutUs";
import Footer from "./views/Footer";
import SearchCompare from "./views/SearchCompare";
import LoginRegisterContainer from "./views/SignInUp/LoginRegisterContainer";
import ErrorPage from "./views/ErrorPage";
import Rental from "./views/RentalPage/Rental";
import { AppContext, useGlobalContext } from "./Context";
import VehicleList from "./features/vehicles/VehicleList";
import VehicleDetail from "./features/vehicles/VehicleDetail";
import LocationList from "./features/locations/LocationList";
import LocationDetail from "./features/locations/LocationDetail";
import VehicleReviews from "./features/reviews/VehicleReviews";
import MyReviews from "./features/reviews/MyReviews";
import AdminReviews from "./features/reviews/AdminReviews";
import UsersList from "./features/users/UsersList";
import UserDetail from "./features/users/UserDetail";
import PaymentSuccess from "./views/PaymentSuccess";
import AdminDashboard from "./views/AdminDashboard";
import PrepareBookings from "./views/PrepareBookings";

const LinksList = () => {
  const { rentalLink } = useGlobalContext(AppContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
  <Route path="/booking/hold" element={<BookingHoldForm />} />
  <Route path="/account/bookings" element={<MyBookings />} />
  <Route path="/cars" element={<CarsForRentalPage />} />
  <Route path="/vehicles" element={<VehicleList />} />
  <Route path="/vehicles/:id" element={<VehicleDetail />} />
  <Route path="/locations" element={<LocationList />} />
  <Route path="/locations/:id" element={<LocationDetail />} />
  <Route path="/search" element={<SearchCompare />} />
  <Route path="/reviews/vehicle/:vehicleId" element={<VehicleReviews />} />
  <Route path="/reviews/user" element={<MyReviews />} />
  <Route path="/admin/reviews" element={<AdminReviews />} />
  <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/users/:id" element={<UserDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/prepare-bookings" element={<PrepareBookings />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/singecar" element={<SingleCarPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/account/dashboard" element={<Dashboard />} />
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/FavoriteCars" element={<FavoriteCars />} />
        <Route path="/account/Profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<LoginRegisterContainer />} />
        <Route path="/signup" element={<LoginRegisterContainer />} />
        <Route path={rentalLink} element={<Rental />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default LinksList;
