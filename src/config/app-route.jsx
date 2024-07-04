import { createBrowserRouter } from "react-router-dom";
import WalletAddress from "../pages/WalletAddress";
import TronQRCode from "../pages/TronQRCode";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WalletAddress />,
      },
      {
        path: "qrcode",
        element: <TronQRCode />,
      },
    ],
  },
]);
