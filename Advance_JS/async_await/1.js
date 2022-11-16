function timeOut() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function boot() {
  try {
    await timeOut();
    console.log("Statement 1");

    await timeOut();
    console.log("Statement 2");

    await timeOut();
    console.log("Statement 3");
  } catch (error) {
    console.log(error);
  }
}

boot();
