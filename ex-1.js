let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let johnProfile = "Test";
const displayJohnProfile = (data) => {
  johnProfile = data
  console.log(johnProfile)
};

const displayJohnError = (error) => {
  console.log(error);
};

getJohnProfile().then(displayJohnProfile).catch(displayJohnError);


