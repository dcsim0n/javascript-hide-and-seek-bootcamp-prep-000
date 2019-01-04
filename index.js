
function getFirstSelector(selector){
  //Do some work Newton!
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
  //More work Newton!
}

function increaseRankBy(inc){
 var rankedList = document.querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < rankedList.length; i++){
   var rank = parseInt(rankedList[i].innerHTML);
   console.log(rankedList[i].innerHTML);
   rank = rank + inc;
   rankedList[i].innerHTML = rank.toString();
 }
}


function deepestChild(){
  var parent = document.querySelectorAll("#grand-node");
  var child = undefined;
  while (parent.length > 0){ child = parent[0]; parent = child.querySelectorAll('div'); }
  return child;
}