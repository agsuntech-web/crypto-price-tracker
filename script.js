async function getPrice() {
  const coin = document.getElementById("coinInput").value.trim().toLowerCase();

  if (!coin) {
    alert("Enter a coin like bitcoin or ethereum");
    return;
  }

  const url = `https://api.coingecko.com/api/v3/coins/${coin}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if (!data[coin]) {
      alert("Coin not found");
      return;
    }

    document.getElementById("coinName").textContent = coin.toUpperCase();
    document.getElementById("coinPrice").textContent =
      "$" + data[coin].usd;

  } catch (error) {
    console.log(error);
    alert("Error fetching price");
  }
}

document.getElementById("coinPrice").textContent =
  `$${data[coin].usd}`;

  document.getElementById("coinChange").textContent =
  "24h Change: " + data.market_data.price_change_percentage_24h + "%";

  const change = data.market_data.price_change_percentage_24h;
const changeEl = document.getElementById("coinChange");

changeEl.textContent = `24h Change: ${change}%`;

if (change > 0) {
  changeEl.style.color = "lightgreen";
} else {
  changeEl.style.color = "red";
}

const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});