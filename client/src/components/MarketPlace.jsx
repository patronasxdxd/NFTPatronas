import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";


const MarketPlace = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  return (


    <div>

        <h2>marketplace</h2>
    </div>


   
  );
};

export default MarketPlace;
