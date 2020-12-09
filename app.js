var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

var badwords = new Array("똥","바보","멍청이","메롱");

var imgs = document.getElementsByTagName("img");
for( var x=0; x < imgs.length; x++ ) {
 imgs[x].onclick = function(){
 alert(`Copyright ${year}-${month}-${day} 문성호. all rights reserved.`);
 };
}
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const resetBtn = document.getElementById("jsReset");

const INITIAL_COLOR = "#000000"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = "INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill"
    } else {
        filling = true;
        mode.innerText = "Paint"
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE) 
        handleModeClick()
    }
}

function handleCM(event){
    console.log(event);
}

function handleSaveClick(){
    var name = prompt("이름을 정하세요");
    document.title = `${name}-Paint`;
    if (name = "문성호 천재") {
     alert("인정");
    }
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = name;
    link.click();
}

function resetClick(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE) 
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM)
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (name = "문성호 천재") {
alert("인정");
}

if (name = "바보") {
window.location.reload();
}
document.title = `${name}-Paint`;

if(range){
    range.addEventListener("input", handleRangeChange)
}

if (mode){
    mode.addEventListener("click", handleModeClick)
}

if (saveBtn){
    saveBtn.addEventListener("click", handleSaveClick)
}

if (resetBtn){
    resetBtn.addEventListener("click", resetClick)
}
