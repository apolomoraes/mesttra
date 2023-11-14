const [v1, v2, v3, v4, v5, v6] = lines.shift().split(" ").map(Number);

const exercito1 = v1 + v2 + v3 + v6;
const exercito2 = v4 + v5;

if (exercito1 >= exercito2) {
  console.log("Middle-earth is safe.");
} else {
  console.log("Sauron has returned.");
}