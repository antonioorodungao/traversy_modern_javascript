async function getUsers() {
  const response = await fetch("https://api.github.com/usersx");

  if (response.status === 200) {
    data = await response.json();
    console.log(data);
    return data;
  } else {
    return Promise.reject(response.status + " " + response.statusText);
  }
}

getUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
