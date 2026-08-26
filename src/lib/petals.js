export function showerPetals(container, amount = 58) {
  const symbols = ["❀", "✿", "❧", "•", "♡"];
  const colors = ["var(--blush)", "var(--rose)", "var(--champagne)", "#f0d6c8", "var(--sage)"];

  container.innerHTML = "";

  for (let index = 0; index < amount; index += 1) {
    const petal = document.createElement("span");
    petal.textContent = symbols[index % symbols.length];
    petal.style.color = colors[index % colors.length];
    petal.style.setProperty("--x", `${Math.random() * 100}%`);
    petal.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    petal.style.setProperty("--delay", `${Math.random() * 0.9}s`);
    petal.style.setProperty("--duration", `${2.6 + Math.random() * 2.5}s`);
    petal.style.setProperty("--size", `${9 + Math.random() * 15}px`);
    petal.style.setProperty("--spin", `${Math.random() * 760 - 380}deg`);
    container.append(petal);
  }

  window.setTimeout(() => {
    container.innerHTML = "";
  }, 6200);
}
