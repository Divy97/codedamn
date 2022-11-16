console.log("hey");
function getMeAPromise() {
  return fetch("./data.json");
}

const promise = getMeAPromise();

promise
  .then((response) => console.log(response))
  .catch((error) => console.log("ERROR" + error));
