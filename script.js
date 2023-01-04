const btns = document.querySelectorAll("button");
// console.log(btns[0].classList.length);
/* console.log(btns[0].classList.item(0));
btns[0].classList.remove("blue");
btns[1].classList.add("blue");
btns[0].classList.toggle("blue");
btns[0].classList.add("red");
if (btns[0].classList.contains("red")) {
  console.log("Yep");
}
*/
btns[0].addEventListener("click", () => {
  if (!btns[1].classList.contains("red")) {
    btns[1].classList.add("red");
  } else {
    btns[1].classList.remove("red");
  }
});
