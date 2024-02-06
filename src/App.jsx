import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Qrcode from "./pages/Qrcode";
import Dashboard from "./ui/Dashboard";
import CurrencyConveter from "./pages/CurrencyConveter";
import TextTranslator from "./pages/TextTranslator";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/qr-code",
        element: <Qrcode />,
      },
      {
        path: "/currency-converter",
        element: <CurrencyConveter />,
      },
      {
        path: "/text-translator",
        element: <TextTranslator />,
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
