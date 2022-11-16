function getMeAPromise() {
  return fetch("./data.json");
}

const promise = getMeAPromise();

promise
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR" + error));
