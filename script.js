async function getPrice() {
  const coin = document.getElementById("coinInput").value.trim().toLowerCase();

  if (!coin) {
    alert("Enter a coin name");
    return;
  }

  const url = `https://api.coingecko.com/api/v3/coins/${coin}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Coin not found");
    }

    const data = await response.json();

    document.getElementById("coinName").textContent = data.name;

    document.getElementById("coinPrice").textContent =
      "$" + data.market_data.current_price.usd;

    const change = data.market_data.price_change_percentage_24h;

    const changeEl = document.getElementById("coinChange");
    changeEl.textContent = `24h Change: ${change}%`;

    changeEl.style.color = change > 0 ? "lightgreen" : "red";

  } catch (error) {
    alert(error.message);
  }
}    