const valor1 = lines.shift()

if (valor1 == "vertebrado") {
  const valor2 = lines.shift();

  if (valor2 == "ave") {
    const valor3 = lines.shift();

    if (valor3 == "onivoro") {
      console.log("pomba");
    } else {
      console.log("aguia");
    }
  } else {
    const valor4 = lines.shift();

    if (valor4 == "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  const valor5 = lines.shift();

  if (valor5 == "inseto") {
    const valor6 = lines.shift();

    if (valor6 == "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    const valor7 = lines.shift();

    if (valor7 == "onivoro") {
      console.log("minhoca");
    } else {
      console.log("sanguessuga");
    }
  }
}