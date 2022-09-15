import "./App.css";
import Dashboard from "../src/pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Orders from "./pages/Services/Orders";
import Products from "./pages/Services/Products";
import Services from "./pages/Services/Services";
import Messages from "./pages/Messages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages/>} />

      {/*Services*/}
      <Route path="/services/orders" element={<Orders />} />
      <Route path="/services/products" element={<Products />} />
      <Route path="/services" element={<Services />} />

      {/*Contacts*/}
      <Route path="/contacts" element={<Profile />} />
      <Route path="/contacts/requests" element={<Profile />} />
      <Route path="/contacts/blocked" element={<Profile />} />

      {/*Payments*/}
      <Route path="/payments/transactions" element={<Profile />} />
      <Route path="/payments/requests" element={<Profile />} />
      <Route path="/payments/payouts" element={<Profile />} />
      <Route path="/payments/invoice" element={<Profile />} />
      <Route path="/payments/contracts" element={<Profile />} />
      <Route path="/payments/bankaccounts" element={<Profile />} />

      {/*Blogs*/}
      <Route path="/blogs" element={<Profile />} />
      <Route path="/blogs/createpost" element={<Profile />} />

      {/* Settings */}
      <Route path="/settings/members" element={<Profile />} />
      <Route path="/settings/shipping" element={<Profile />} />

      <Route path="/settings/tsandcs" element={<Profile />} />
    </Routes>
  );
}

export default App;
