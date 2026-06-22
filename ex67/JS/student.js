function parseXMLToObjects() {
    var xmlDoc = new DOMParser().parseFromString(xmlString, "text/xml");
    var students = xmlDoc.getElementsByTagName("student");
    
    for (var i = 0; i < students.length; i++) {
        var s = students[i];
        studentList.push({
            id: s.getElementsByTagName("id")[0].textContent.trim(),
            name: s.getElementsByTagName("name")[0].textContent.trim(),
            birthday: s.getElementsByTagName("birthday")[0].textContent.trim(),
            gender: s.getElementsByTagName("gender")[0].textContent.trim()
        });
    }
}

function displayStudents(dataset) {
    var tbody = document.getElementById("studentbody");
    tbody.innerHTML = ""; 

    for (var i = 0; i < dataset.length; i++) {
        var s = dataset[i];
        var tr = document.createElement("tr");

        tr.innerHTML = `<td>${s.id}</td><td>${s.name}</td><td>${s.birthday}</td><td>${s.gender}</td>`;

        tr.onmouseover = function() { this.className = "row-hover"; };
        tr.onmouseout = function() { this.className = ""; };

        tr.setAttribute("data-index", i);
        tr.onclick = function() {
            var index = this.getAttribute("data-index");
            showStudentDetail(dataset[index]);
        };

        tbody.appendChild(tr);
    }
}

function showStudentDetail(student) {
    document.getElementById("detail-panel").style.display = "block"; 
    document.getElementById("det_id").innerHTML = student.id;
    document.getElementById("det_name").innerHTML = student.name;
    document.getElementById("det_birthday").innerHTML = student.birthday;
    document.getElementById("det_gender").innerHTML = student.gender;
}

function processSort(columnName) {
    studentList.sort(function(a, b) {
        var valA = a[columnName].toLowerCase();
        var valB = b[columnName].toLowerCase();

        if (columnName === 'id') {
            return isAscending ? parseInt(valA) - parseInt(valB) : parseInt(valB) - parseInt(valA);
        }
        return isAscending ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

    isAscending = !isAscending; 
    displayStudents(studentList); 
}