 async function getPrice() {
  let coin = document.getElementById("coinInput").value.trim().toLowerCase();

  // Coin shortcuts
  const coinMap = {
    btc: "bitcoin",
    eth: "ethereum",
    doge: "dogecoin"
  };

  if (coinMap[coin]) {
    coin = coinMap[coin];
  }

  if (!coin) {
    alert("Enter a coin name");
    return;
  }

  const url = `https://api.coingecko.com/api/v3/coins/${coin}`;

  try {
    // 🔥 SHOW LOADING
    document.getElementById("loading").style.display = "block";

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Coin not found");
    }

    const data = await response.json();

    // ✅ UPDATE UI
    document.getElementById("coinName").textContent = data.name;

    document.getElementById("coinPrice").textContent =
      "$" + data.market_data.current_price.usd;

    // 24h change
    const change = data.market_data.price_change_percentage_24h;
    const changeEl = document.getElementById("coinChange");

    changeEl.textContent = `24h Change: ${change}%`;
    changeEl.style.color = change > 0 ? "lightgreen" : "red";

    // 🪙 COIN LOGO
    const logo = data.image.small;
    document.getElementById("coinLogo").src = logo;

  } catch (error) {
    alert(error.message);
  } finally {
    // 🔥 HIDE LOADING (ALWAYS runs)
    document.getElementById("loading").style.display = "none";
  }
}