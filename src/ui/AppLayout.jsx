import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className=" bg-stone-100  h-screen w-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default AppLayout;
