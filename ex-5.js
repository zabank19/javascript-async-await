// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject({
        errorCode: 500,
        message: "😈 Failed to request data from server",
      });
    }, 2000);
  });
};

// ใช้ Async/Await พร้อม try/catch เพื่อจัดการ error
async function showError() {
  try {
    const data = await getJohnProfile();
    console.log(data); // จะไม่ทำงาน เพราะ getJohnProfile ถูก reject
  } catch (error) {
    console.log(error); // แสดงผล error object
  }
}

showError();
