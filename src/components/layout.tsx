import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
