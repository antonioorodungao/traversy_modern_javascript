function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//fetch is for fetching data
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  const akin = this;
  this.http.onload = function () {
    if (akin.http.status === 200) {
      const response = JSON.parse(akin.http.responseText);
      callback(response);
    }
  };
  this.http.send();
};

//put is for updating
easyHTTP.prototype.put = function (url, callback) {
  this.http.open("PUT", url, true);

  const akin = this;
  this.http.onload = function () {
    if (akin.http.status === 200) {
      const response = JSON.parse(akin.http.responseText);
      callback(`Update id: ${response.id}`);
    }
  };
  this.http.send();
};

//post is for sending
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  const akin = this;
  this.http.onreadystatechange = function () {
    console.log(akin.http.readyState);
  };
  this.http.onload = function () {
    const response = JSON.parse(akin.http.responseText);
    callback(response);
  };
  this.http.send(JSON.stringify(data));
};

//delete is for delting
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  // this.http.setRequestHeader("Content-type", "application/json");

  const akin = this;
  this.http.onreadystatechange = function () {
    console.log(akin.http.readyState);
  };
  this.http.onload = function () {
    if (akin.http.status === 200) {
      const response = akin.http.responseText;
      callback(null, response);
    } else {
      const response = akin.http.responseText;
      callback("Error", akin.http.status);
    }
  };
  this.http.send();
};
