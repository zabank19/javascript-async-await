// Exercise #6

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve({
        name: "John",
        age: 20,
        hobbies: ["Coding", "Football"],
      });
    }, 1000);
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve([
        {
          orderId: "001",
          items: ["apple", "banana"],
        },
        {
          orderId: "002",
          items: ["orange", "itim"],
        },
      ]);
    }, 1500);
  });
};

async function showUserAndOrders() {
  // รอข้อมูลจาก getJohnProfile ก่อน
  const profile = await getJohnProfile();
  console.log(profile);

  // จากนั้นจึงรอข้อมูลจาก getJohnOrders
  const orders = await getJohnOrders();
  console.log(orders);
}

showUserAndOrders();
