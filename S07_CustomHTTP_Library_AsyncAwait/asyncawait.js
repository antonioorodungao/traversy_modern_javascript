class easyHTTP {
  async get(url) {
    const result = await fetch(url);
    if (result.status === 200) {
      const data = await result.json();
      return data;
    } else {
      return Promise.reject(result.status);
    }
  }

  async put(url) {
    const result = await fetch(url);

    if (result.status === 200) {
      const data = await result.json();
      return data;
    } else {
      return Promise.reject(result.status);
    }
  }

  async post(url, data) {
    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    if (result.status === 201) {
      return result.json();
    } else {
      return Promise.reject("Error " + result.status + result.statusText);
    }

    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => {
    //       if (res.status === 201) {
    //         return res.json();
    //       } else {
    //         throw "Error " + res.status + res.statusText;
    //       }
    //     })
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
  }

  delete(url) {}
}
