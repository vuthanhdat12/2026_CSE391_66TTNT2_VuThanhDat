let students = [];
let filteredStudents = [];

let sortAsc = true;

function getRank(score){

if(score >= 8.5) return "Giỏi";
if(score >= 7) return "Khá";
if(score >= 5) return "Trung bình";
return "Yếu";

}

function addStudent(){

let nameInput = document.getElementById("name");
let scoreInput = document.getElementById("score");

let name = nameInput.value.trim();
let score = parseFloat(scoreInput.value);

if(name === ""){
alert("Họ tên không được trống");
return;
}

if(isNaN(score) || score < 0 || score > 10){
alert("Điểm phải từ 0 đến 10");
return;
}

students.push({
name:name,
score:score
});

nameInput.value="";
scoreInput.value="";
nameInput.focus();

applyFilters();

}

function applyFilters(){

let keyword = document.getElementById("search").value.toLowerCase();
let rankFilter = document.getElementById("filterRank").value;

filteredStudents = students.filter(sv=>{

let matchName = sv.name.toLowerCase().includes(keyword);

let rank = getRank(sv.score);

let matchRank = rankFilter === "all" || rank === rankFilter;

return matchName && matchRank;

});

filteredStudents.sort((a,b)=>{

return sortAsc ? a.score - b.score : b.score - a.score;

});

renderTable();

}

function renderTable(){

let tbody = document.getElementById("tableBody");

tbody.innerHTML="";

if(filteredStudents.length === 0){

document.getElementById("noResult").style.display="block";

}else{

document.getElementById("noResult").style.display="none";

}

filteredStudents.forEach((sv,index)=>{

let tr = document.createElement("tr");

if(sv.score < 5){
tr.classList.add("yeu");
}

tr.innerHTML = `
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
<td><button data-index="${index}" class="deleteBtn">Xóa</button></td>
`;

tbody.appendChild(tr);

});

updateStats();

}

function updateStats(){

let total = students.reduce((sum,sv)=> sum + sv.score,0);

let avg = students.length ? (total/students.length).toFixed(2) : 0;

document.getElementById("stats").innerText =
`Tổng SV: ${students.length} | Điểm TB: ${avg}`;

}

document.getElementById("addBtn").addEventListener("click",addStudent);

document.getElementById("score").addEventListener("keydown",function(e){

if(e.key === "Enter"){
addStudent();
}

});

document.getElementById("search").addEventListener("input",applyFilters);

document.getElementById("filterRank").addEventListener("change",applyFilters);

document.getElementById("sortScore").addEventListener("click",function(){

sortAsc = !sortAsc;

this.innerText = sortAsc ? "Điểm ▲" : "Điểm ▼";

applyFilters();

});

document.getElementById("tableBody").addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index = e.target.dataset.index;

let name = filteredStudents[index].name;

students = students.filter(sv => sv.name !== name);

applyFilters();

}

});