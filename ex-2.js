// Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "💀 Failed to request data from server",
        }),
      2000
    );
  });
};

// แสดงผลลัพธ์จาก Promise ที่ถูก reject
getJohnProfile().catch((error) => {
  console.log(error);
});
