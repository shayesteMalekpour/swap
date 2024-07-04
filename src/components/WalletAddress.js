import React, { useState, useEffect } from "react";
import QRCode from "../pages/TronQRCode";

const MaticWalletAddress = () => {
  const [maticAddress, setMaticAddress] = useState("");
  const [showQRPage, setShowQRPage] = useState(false);

  const handleMaticAddressChange = (event) => {
    setMaticAddress(event.target.value);
  };
  const handleSwap = () => {
    setShowQRPage(true);
  };

  return (
    <div className="container">
      <div className="box">
        {showQRPage ? (
          <QRCode />
        ) : (
          <>
            <div className="title">Pcoin to PMB Swap</div>
            <div className="info">
              Enter your Polygon / Matic address to get PMB
            </div>
            <input
              type="text"
              value={maticAddress}
              onChange={handleMaticAddressChange}
              className="input"
            />
            <button onClick={handleSwap} className="primary-button">
              Swap PMB
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MaticWalletAddress;
