import React from 'react';
import styles from './Coins.module.css';
import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  marketChange,
  updatedOn,
  allTimeHigh,
  allTimeLow,
  id
}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} /> 
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>PRICE ${price}</p>
              <p className={styles.coin_volume}>VOL.   $  {volume.toLocaleString()}</p>

              <p>ATH: {allTimeHigh}</p>
              <p>ATL: {allTimeLow}</p>
              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  PC%  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  PC%  {priceChange.toFixed(2)}%
                </p>
              )}

              {marketChange < 0 ? (
                <p className={(styles.coin_market, styles.red)}>
                MC%  {marketChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_market, styles.green)}>
                MC%  {marketChange.toFixed(2)}%
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketcap.toLocaleString()}
              </p>

              <p className={(styles.coin_updatedOn, styles.green)}>
                {updatedOn}GST
              </p>

            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;