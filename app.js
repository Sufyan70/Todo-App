var mainlist = document.getElementById("mainlist");

var c = document.getElementById("input");

function AddElem(){
    var a = document.createElement("LI");
    var b = document.createTextNode(c.value);
    a.setAttribute("class","item_cstm");
        a.appendChild(b);
        mainlist.appendChild(a);

    var editbtn = document.createElement("BUTTON");
    var editbtntxt = document.createTextNode("Edit");
    editbtn.appendChild(editbtntxt);
    a.appendChild(editbtn);
    editbtn.setAttribute("class","edit_cstm");
    editbtn.setAttribute("onclick","edit(this)");


    var delbtn = document.createElement("BUTTON");
    var delbtntxt = document.createTextNode("Dlt");
    delbtn.appendChild(delbtntxt);
    a.appendChild(delbtn);
    delbtn.setAttribute("class","dlt_cstm");
    delbtn.setAttribute("onclick","del(this)");  
    document.getElementById("input").value = "";
}

function edit(element){
    element.parentNode.firstChild.nodeValue = prompt();
}


function del(element){
    element.parentNode.remove();
}

function DelElem(){
    mainlist.innerHTML = "";
}