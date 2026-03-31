import { Route } from "react-router-dom";
import List from "../pages/booking/List";
const bookingRoutes = [
  <Route key="booking-list" path="booking" element={<List />} />,
];

export default bookingRoutes;
