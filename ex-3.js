let getUser = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("user data"), 2000);
  });
};

let getOrders = (user) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("orders"), 1000);
  });
};

let getItems = (orders) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("orders items"), 1000);
  });
};

// Start coding here
