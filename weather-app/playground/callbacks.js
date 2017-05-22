let getUser = (id, callback) => {
  let user = {
    id,
    name: "Victor"
  };

  setTimeout(() => {
    callback(user);
  },3000);
};


getUser(5, (user) => {
  console.log(user);
});
