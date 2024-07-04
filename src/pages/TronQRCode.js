import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "react-toastify";
function QRCode() {
  const [walletAddress, setWalletAddress] = useState(
    "0x01dd9ed52378b0739850db06028375daf70378be"
  );

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        toast.success("Copied to clipboard!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
      })
      .catch((err) => {
        // toast.error("Failed to copy!", {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 2000,
        // });
        // console.error("Error copying text: ", err);
      });
  };
  return (
    <div className="container">
      <div className="box">
        <div className="info">
          To proceed with your Pcoin to PMB swap, please scan the QR code below
          to send your PCOIN's to below address to get PMB on your Polygon/Mstic
          address by 1:25 rate.
        </div>
        <QRCodeSVG value="https://reactjs.org/" className="QR-code-svg" />
        <div className="QR-card-input" onClick={copyToClipboard}>
          <input
            type="text"
            value={walletAddress}
            // className="QR-card-input"
            readOnly
          />
          <button>copy</button>
        </div>
      </div>
    </div>
  );
}

export default QRCode;
