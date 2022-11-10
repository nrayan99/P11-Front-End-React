import { Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
