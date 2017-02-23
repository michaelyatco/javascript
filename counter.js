// setTimeout(function() {
//   console.log("First task done!"); 
// }, 2000);

// setTimeout(function() {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function() {
//   console.log("Third task done!");
// }, 6000);

setTimeout(function() {
  console.log("First task done!"); 
  setTimeout(function() {
    console.log("Second task done!");
    setTimeout(function() {
      console.log("Third task done!");
    }, 2000);
    console.log("2.5 tasks done!");
  }, 2000);
  console.log("1.5 tasks done!");
}, 2000);