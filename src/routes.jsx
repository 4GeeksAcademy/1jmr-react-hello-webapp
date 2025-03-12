import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { Contact } from "./pages/Contact"; // Importar Contact
import { AddContact } from "./pages/AddContact"; // Importar AddContact

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
          <Route path="/" element={<Home />} />
          <Route path="/single/:theId" element={<Single />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/contacts" element={<Contact />} /> {/* Ruta para Contact */}
          <Route path="/add-contact" element={<AddContact />} /> {/* Ruta para AddContact */}
      </Route>
  )
);