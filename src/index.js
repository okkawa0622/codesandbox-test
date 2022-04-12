/**
 * varは再宣言が可能
 * letは再宣言が不可能
 * constは再宣言も上書きも不可能
 * ※ただしconstで定義したオブジェクトはプロパティの変更が可能
 */
// var val1 = "var変数";
// val1 = "var変数は上書き可能";
// var val1 = "var変数は際宣言可能";
// console.log(val1);

// let val2 = "let変数";
// val2 = "let変数は上書き可能";
// console.log(val2);
// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// console.log(val4);

const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
