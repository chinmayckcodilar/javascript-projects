
var row = null;

function Submit()
{
    var ename=document.getElementById('e_name').value;
    var id=document.getElementById('e_id').value;
    var e_desig=document.getElementById('e_des').value;
    
    var e_arr=[ename,id,e_desig];

    var readData=readingDataFromLocalStorage(e_arr);

    if(row==null){
        insert(readData);
        msg.innerHTML="Data Inserted"
    }

    else{
    update();
    msg.innerHTML="Data Updated"
    }

    
}


function readingDataFromLocalStorage(e_arr){

    var json_data={
        Name: e_arr[0],
        ID:e_arr[1],
        Designation:e_arr[2]
    }

    var datas=JSON.stringify(json_data);
    localStorage.setItem(e_arr[0],datas);

    var n=localStorage.setItem("Name",e_arr[0]);
    var i=localStorage.setItem("ID",e_arr[1]);
    var d=localStorage.setItem("Designation",e_arr[2]);


    var get_n=localStorage.getItem("Name",n);
    var get_i=localStorage.getItem("ID",i);
    var get_d=localStorage.getItem("Designation",d);

    var get_arr=[get_n,get_i,get_d];

    return(get_arr);
}


function insert(readData){
    var table=document.getElementById('tab')
    var row=table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=`<button onclick=edit(this)>Edit</button>
                                 <button onclick=remove(this)>Delete</button>`;
    
    
}

function edit(td){
    row=td.parentElement.parentElement;
    document.getElementById("e_name").value=row.cells[0].innerHTML;
    document.getElementById("e_id").value=row.cells[1].innerHTML;
    document.getElementById("e_des").value=row.cells[2].innerHTML;
}

function update(){
    row.cells[0].innerHTML=document.getElementById("e_name").value;
    row.cells[1].innerHTML=document.getElementById("e_id").value;
    row.cells[2].innerHTML=document.getElementById("e_des").value;
    row=null;
}

function remove(td){
    var prompt=confirm("Continue deleting?")
    if(prompt==true){
        var row=td.parentElement.parentElement;
        var n=document.getElementById("e_name").value;
        localStorage.removeItem(n);
        document.getElementById("tab").deleteRow(row.rowIndex);
    }
}

