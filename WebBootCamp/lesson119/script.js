document.querySelector("button").addEventListener("click", function(){
  document.body.style.background = randColor();
})

function randColor(){
  return '#' + (function co(lor){   
      return (lor +=     [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])  && (lor.length == 6) ?  lor : co(lor); })('');
}
// document.write("<html><body><p>Hello World</p></body></html>")
// document.open("text/html", "replace");
var hello = "I love my BB"
document.write("<h1>Hello World</h1>");
document.write("<h1>Hello Everyone</h1>");
document.write(2 + 2);
// document.write(<p>hello</p>);
// document.close();
