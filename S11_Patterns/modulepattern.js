const mp = (function () {
  let writeToConsole = function (msg) {
    console.log(msg);
  };
  return {
    write: writeToConsole,
  };
})();

mp.write("This is module writing to console.");
