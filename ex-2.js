let getEmployeeData = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("👿 Failed to request data from server"), 2000);
  });
};

// Start coding here
