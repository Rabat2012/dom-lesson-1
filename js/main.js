// ! DOM - Document Object Model
// селекторы
// let btn = document.getElementById('btn')
// console.log(typeof btn);

// let blocks = document.getElementsByClassName('blocks')
// console.log(blocks);

// ?  запись такая же будет 
// let blocks = document.getElementsByTagName('div');
// console.log(blocks);

// let inp = document.getElementsByTagName('phone');
// console.log(inp);

// селекторы querySelectors

// let btn = document.querySelector("#btn")
// let blocks = document.querySelectorAll(".blocks")
// let blocks2 = document.querySelectorAll("div")
// let inp = document.querySelectorAll("[name='phone']")
// console.log(btn, blocks, blocks2, inp);

// let container = document.getElementById("container");
// console.log(container);
// container.innerText = "<h1>Hello DOM!</h1>"
// container.innerHTML = "<h1>Hello DOM!</h1>"
// container.style.backgroundColor = "red"
// container.style.padding = "10px"
// container.style.fontSize = "15px"
// container.style.color = "white"
// console.log(document.body);
// document.body.style.backgroundColor = "black"
// let container = document.getElementById("container");
// for (let i = 1; i <= 10; i++) {
//     let block = document.createElement("div")
//     block.style.width = "100px"
//     block.style.height = "100px"
//     block.style.backgroundColor = "green"
//     block.style.margin = "10px"
//     container.append(block)
// }
// container.style.display = "flex"
// container.style.flexWrap = "wrap"
// console.log(container.lastChild.parentElementSibling);
// console.log(container.firstChild.nextElementSibling);

// console.log(getComputedStyle(container).color);

// let blocks1 = document.querySelectorAll('.blocks')   // ? тут точка  NodeList
// ! NodeList - static - один раз обращается к элементам и больше не следит за ними
// let blocks2 = document.getElementsByClassName('blocks')  // ? тут нету точки  HTMLCollection
// ! HTMLCollection - dinamic - постоянно следит за элементами и видит изменения
// blocks1[1].remove()
// console.log(blocks1);
// console.log(blocks2);

let inp = document.getElementById("inp")

// console.log(inp);
inp.setAttribute("placeholder", "search...")
inp.classList.add("new-class")
inp.classList.add("new-class-2")
inp.classList.remove("new-class")
inp.classList.toggle("asdf")
console.log(inp);