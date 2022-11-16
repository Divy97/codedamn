console.log("hey");
function getMeAPromise() {
  return fetch("./data.json");
}

// console.log(getMeAPromise());

getMeAPromise().then((response) => console.log(response));
