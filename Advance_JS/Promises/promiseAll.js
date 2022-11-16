async function fn(...promises) {
  // resolve them all
  // add one to all of them
  let resolvedPromises = await Promise.allSettled(promises);
  console.log(resolvedPromises);
  return resolvedPromises.map((object) => {
    if (object.status === "fulfilled") {
      return object.value * 2;
    } else {
      return null;
    }
  });
}

fn();
