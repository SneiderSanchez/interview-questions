// Use a Inmediately execute function (IIFE) to create a clousure and "save" the value of i

for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 100);
  })(i);
}
