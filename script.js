var text = document.querySelector("input");
document.querySelector("button").addEventListener("click", function() {
  if (text.value) {
   var div = document.createElement("div");
    div.classList.add("task_div");
    var part1 = document.createElement("div");
    var div1 = div.appendChild(part1);
  part1.classList.add("task_box");
    var part2 = document.createElement("div");
    var div2 = div.appendChild(part2);
    div2.innerHTML = "X"
    document.querySelector(".main"). appendChild(div);
    div1.innerHTML = text.value;
text.value = "";
    div2.addEventListener("click", function(){
div1 = div.remove();
})
  }else{
alert(`Enter Task`);
}
  
})
