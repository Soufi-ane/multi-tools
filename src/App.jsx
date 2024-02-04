import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Qrcode from "./pages/Qrcode";
import Dashboard from "./ui/Dashboard";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/qr-code",
        element: <Qrcode />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
