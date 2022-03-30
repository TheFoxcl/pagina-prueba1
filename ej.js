const tbody = document.querySelector(".tbody")

function crearUsuario(id,rank,points,name,age) {

    id = `${id}`;
    rank = `${rank}`;
    points = `${points}`;
    name = `${name}`;
    age = `${age}`;
    button = `<button class="moreInfo">More Info`;
    return[ id,rank, points, name,age,button]
}

let  tableColumn = document.createDocumentFragment();
let tableRow = document.createDocumentFragment();
let names = ["Ryan Williams","Shannon Lynn","Adam Green","Annette Armstrong PhD","Keith Allen","John Brown","Anthony Hunter","Andrew Howard","Jenna Johnso","Heidi Irwin","James Matthews","Zachary Smith","Zachary Barker","Lisa Eaton","Christopher Sanchez","Donna Kelley","Brandon Melendez","Aaron Morrison","Monica Warren","Breanna Williams","Lisa Sellers","Kenneth Baker","Barbara Ramirez","Joseph Jackson","Edward Butle"]

for (var i = 1; i <= 25; i++) {
    let randomPoints = Math.round(Math.random()*1000);
    let randomAge = Math.round(Math.random()*60)+12;
    let nameVariable = names[i-1]
    let usuario = crearUsuario(i,i,randomPoints,nameVariable,randomAge)
    let tr = document.createElement("TR")
    tr.classList.add("tr_r")
    const tr_r = document.querySelector(".tr_r")
    tableColumn.appendChild(tr);

    for (var j= 0; j <= 5; j++) {
        let td = document.createElement("TD")
        td.innerHTML = usuario[j]
        td.classList.add("td_r")
        tableRow.appendChild(td);
    }

    tr.appendChild(tableRow);
}

tbody.appendChild(tableColumn)

onload = function (){
    let loader = document.querySelector(".lds-facebook")
    loader.style.visibility = "hidden"
    loader.style.opacity= "0"
}

const getCellValue = (tr, idx) => tr.children[idx].innerText;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('.tr_r:nth-child(n+1)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));

function search() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.querySelector(".search");
    filter = input.value.toUpperCase();
    table = document.querySelector(".table_1");
    tr = document.querySelectorAll(".tr_r");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].querySelectorAll(".td_r")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

