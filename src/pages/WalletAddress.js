import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MaticWalletAddress = () => {
  const [maticAddress, setMaticAddress] = useState("");
  const navigate = useNavigate();
  const handleMaticAddressChange = (event) => {
    setMaticAddress(event.target.value);
  };
  const handleSwap = () => {
    navigate("/qrcode");
  };

  return (
    <div className="container">
      <div className="box">
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
      </div>
    </div>
  );
};

export default MaticWalletAddress;
