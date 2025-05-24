// Exercise #4
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

// ใช้ Async / Await เพื่อเรียกใช้งาน
async function showJohnProfile() {
  const profile = await getJohnProfile();
  console.log(profile);
}

showJohnProfile();
