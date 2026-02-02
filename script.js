fetch("https://natascha-voznesenskaia.github.io/my-json-data/data.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Ошибка fetch:", err));
