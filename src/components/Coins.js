import React from "react";
import { Link } from "react-router-dom";
import CoinItem from "./CoinItem";
import "./Coins.css";
import Coin from "./../routes/Coin";

const Coins = (props) => {
  console.log(props.coins);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p className="">#</p>
          <p className="coin-name">Coins</p>
          <p className="">Price</p>
          <p className="">24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {props.coins.map((coin) => {
          return (
            <Link to={`coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <CoinItem coins={coin} key={coin.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
