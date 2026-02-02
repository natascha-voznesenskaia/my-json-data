/* fetch("https://natascha-voznesenskaia.github.io/my-json-data/data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.body.innerHTML = `<h1>${data.message}</h1>`;

    data.items.forEach((n) => {
      const p = document.createElement("p");
      p.textContent = n;
      document.body.appendChild(p);
    });
  })
  .catch((err) => console.error("Ошибка fetch:", err)); */

fetch("https://natascha-voznesenskaia.github.io/my-json-data/data.json")
  .then((res) => res.json())
  .then((data) => {
    const app = document.getElementById("app");

    app.innerHTML = `
      <h1>${data.message}</h1>
      <ul>
        ${data.items.map((n) => `<li>${n}</li>`).join("")}
      </ul>
    `;
  })
  .catch((err) => console.error("Ошибка fetch:", err));
