import React from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const stocks = [
    {
      rank: 1,
      name: "Selling with re entr",
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 2,
      name: "strategy_name",
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercent: 0.64,
      price: 500,
      action: "Buy",
    },
    {
      rank: 3,
      name: "Based on premium and",
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercent: 0.64,
      price: "-",
      action: "View",
    },
    {
      rank: 4,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
    // Add more stocks as needed
    {
      rank: 5,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 6,
      name: "Based on Premium pit",
      calmarRatio: 3.01,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.49,
      price: "-",
      action: "View",
    },
    {
      rank: 7,
      name: "Wait and Trade_Save",
      calmarRatio: 2.62,
      overallProfit: 178252.8,
      avgDailyProfit: 303.47,
      winPercent: 0.63,
      price: "-",
      action: "View",
    },
    {
      rank: 8,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 9,
      name: "iron condor",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
    {
      rank: 10,
      name: "strategy_name",
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercent: 0.65,
      price: "-",
      action: "View",
    },
  ];

  return (
    <div className="leaderboard-container">
      <header>
        <h1>LeaderBoards</h1>
      </header>
      <div className="backtest-section">
        <h2>Basic Backtest</h2>
        <div className="slippage-dropdown">
          <label htmlFor="slippage">Slippage</label>
          <select id="slippage" name="slippage">
            <option value="0%">0%</option>
            <option value="0%">10%</option>
            <option value="0%">25%</option>
            <option value="0%">50%</option>
            <option value="0%">65%</option>
            <option value="0%">15%</option>
            <option value="0%">99%</option>
          </select>
        </div>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win %(Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.rank}>
              <td>{stock.rank}</td>
              <td>{stock.name}</td>
              <td>{stock.calmarRatio}</td>
              <td>{stock.overallProfit}</td>
              <td>{stock.avgDailyProfit}</td>
              <td>{stock.winPercent}</td>
              <td>{stock.price}</td>
              <td>
                <a href="#" className="action-link">
                  {stock.action}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
