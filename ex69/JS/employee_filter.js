var xmlDocumentData = null;

function loadEmployeeData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xmlDocumentData = this.responseXML;
            populateTitleDropdown();
        }
    };
    xhttp.open("GET", "employees.xml", true);
    xhttp.send();
}

function populateTitleDropdown() {
    if (!xmlDocumentData) return;
    
    var employees = xmlDocumentData.getElementsByTagName("employee");
    var selectNode = document.getElementById("slTitle");
    var titlesArray = [];
    
    for (var i = 0; i < employees.length; i++) {
        var titleAttr = employees[i].getAttribute("title");
        if (titleAttr && !titlesArray.includes(titleAttr)) {
            titlesArray.push(titleAttr);
        }
    }
    
    for (var j = 0; j < titlesArray.length; j++) {
        var title = titlesArray[j];
        selectNode.innerHTML += `<option value="${title}">${title}</option>`;
    }
}

function filterEmployeeByTitle() {
    if (!xmlDocumentData) return;
    
    var selectedTitle = document.getElementById("slTitle").value;
    var tbody = document.getElementById("employeebody");
    
    if (selectedTitle === "") {
        tbody.innerHTML = "<tr><td colspan='3' style='text-align: center; color: gray;'>Please select a title above to display employees.</td></tr>";
        return;
    }
    
    var employees = xmlDocumentData.getElementsByTagName("employee");
    var tableRowsContent = ""; 
    
    for (var i = 0; i < employees.length; i++) {
        var emp = employees[i];
        
        if (emp.getAttribute("title") === selectedTitle) {
            var id = emp.getElementsByTagName("id")[0].textContent;
            var name = emp.getElementsByTagName("name")[0].textContent;
            var phone = emp.getElementsByTagName("phone")[0].textContent;
            
            tableRowsContent += `<tr><td>${id}</td><td>${name}</td><td>${phone}</td></tr>`;
        }
    }
    
    tbody.innerHTML = tableRowsContent ? tableRowsContent : "<tr><td colspan='3' style='text-align: center;'>No employee found for this title.</td></tr>";
}