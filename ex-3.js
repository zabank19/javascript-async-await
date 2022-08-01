let getUser = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "James") {
        resolve("user data");
      } else {
        reject("no users");
      }
    }, 1000);
  });
};

let getOrders = (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData === "user data") {
        resolve("orders");
      } else {
        reject("no orders");
      }
    }, 1000);
  });
};

let getItems = (orders) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orders === "orders") {
        resolve("orders items");
      } else {
        reject("out of items");
      }
    }, 1000);
  });
};

// Start coding here
