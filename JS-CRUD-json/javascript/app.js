
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
    update(e_arr);
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
    localStorage.setItem(e_arr[1],datas);

    var existingData = localStorage.getItem(e_arr[1]);
    var existingJsonData = JSON.parse(existingData);

    existingJsonData.Name = e_arr[0];
    existingJsonData.ID = e_arr[1];
    existingJsonData.Designation = e_arr[2];

    var updatedData = JSON.stringify(existingJsonData);
    localStorage.setItem(e_arr[1], updatedData);

    var get_n = existingJsonData.Name;
    var get_i = existingJsonData.ID;
    var get_d = existingJsonData.Designation;

    var get_arr=[get_n,get_i,get_d];

    return get_arr;
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

function update(e_arr){
    row.cells[0].innerHTML=document.getElementById("e_name").value;
    row.cells[1].innerHTML=document.getElementById("e_id").value;
    row.cells[2].innerHTML=document.getElementById("e_des").value;
    // var json_data={
    //     Name: row.cells[0],
    //     ID:row.cells[1],
    //     Designation:row.cells[2]
    // }

    // var datas=JSON.stringify(json_data);
    localStorage.setItem(e_arr[1],datas);
    row=null;
}

function remove(td){
    var prompt=confirm("Continue deleting?")
    if(prompt==true){
        var row=td.parentElement.parentElement;
        var n=row.cells[1].innerHTML;
        console.log(n);
        localStorage.removeItem(n);

        document.getElementById("tab").deleteRow(row.rowIndex);
    }
}

window.onload = function() {
    loadTableData();
  }
  
  function loadTableData() {
    var table = document.getElementById("tab");
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key != null) {
        var data = JSON.parse(localStorage.getItem(key));
        var row = table.insertRow();
        row.insertCell(0).innerHTML = data.Name;
        row.insertCell(1).innerHTML = data.ID;
        row.insertCell(2).innerHTML = data.Designation;
        row.insertCell(3).innerHTML = `<button onclick=edit(this)>Edit</button>
                                   <button onclick=remove(this)>Delete</button>`;
      }
    }
  }
  

