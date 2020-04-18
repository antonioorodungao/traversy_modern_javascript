class easyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Error:" + res.status;
          }
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  put(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            throw "Error:" + res.status;
          }
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.status === 201) {
            return res.json();
          } else {
            throw "Error " + res.status + res.statusText;
          }
        })
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  delete(url) {}
}
