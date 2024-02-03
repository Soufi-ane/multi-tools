import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Qrcode from "./pages/Qrcode";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/qr-code",
        element: <Qrcode />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="text-red-500">
      {" "}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
