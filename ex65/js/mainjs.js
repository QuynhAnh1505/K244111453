function addNode() {
    var content = document.getElementById("id_content").value;
    var positionInput = document.getElementById("id_pos_add").value;

    if (content == "") {
        alert("Please enter Content!");
        return;
    }

    var ul = document.getElementById("myList");
    var listItems = ul.getElementsByTagName("li");
    
    var newLi = document.createElement("li");
    newLi.innerHTML = content;

    var targetIndex = eval(positionInput) - 1;

    if (positionInput === "" || isNaN(positionInput) || targetIndex < 0 || targetIndex >= listItems.length) {
        ul.appendChild(newLi);
    } else {
        ul.insertBefore(newLi, listItems[targetIndex]);
    }
}

function removeNode() {
    var positionInput = document.getElementById("id_pos_remove").value;
    
    if (positionInput === "") {
        alert("Please enter Position to remove!");
        return;
    }

    var ul = document.getElementById("myList");
    var listItems = ul.getElementsByTagName("li");

    var targetIndex = eval(positionInput) - 1;

    if (targetIndex >= 0 && targetIndex < listItems.length) {
        ul.removeChild(listItems[targetIndex]);
    } else {
        alert("Position does not exist!");
    }
}

function modifyNode() {
    var newContent = document.getElementById("id_new_content").value;
    var positionInput = document.getElementById("id_pos_modify").value;
    
    if (newContent == "" || positionInput === "") {
        alert("Please enter both New Content and Position!");
        return;
    }

    var ul = document.getElementById("myList");
    var listItems = ul.getElementsByTagName("li");

    var targetIndex = eval(positionInput) - 1;

    if (targetIndex >= 0 && targetIndex < listItems.length) {
        listItems[targetIndex].innerHTML = newContent;
    } else {
        alert("Position does not exist!");
    }
}