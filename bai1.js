var object = {
  name: "thanh",
  age: 20,
};
var Arr = [];

//Kiểm tra Object
if (typeof object !== "object") {
  console.log(`${object} không phải là Object. Mời nhập lại.`);
} else if (Object.keys(object).length == 0) {
  console.log("Object đã cho là Object rỗng");
} else console.log("Object đã cho không phải là Object rỗng.");

// console.log(typeof Object.keys(object).length); => trả về number
// Kiểm tra mảng
if (Array.isArray(Arr) != true) {
  console.log(Arr + "không phải là mảng. Mời thử lại.");
} else if (Arr.length == 0) {
  console.log("Mảng đã cho là mảng rỗng");
} else console.log("Mảng đã cho không phải là mảng rỗng");
console.log(typeof 0);
