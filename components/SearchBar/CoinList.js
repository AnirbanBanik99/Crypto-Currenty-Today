import Coins from './Coins';

export default function CoinList({ filteredCoins }) {
  return (
    <>
      {filteredCoins.map(coin => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            allTimeHigh={coin.ath}
            allTimeLow={coin.atl}
            priceChange={coin.price_change_percentage_24h}
            marketChange={coin.market_cap_change_percentage_24h}
            updatedOn={coin.last_updated}
          />
        );
      })}
    </>
  );
}