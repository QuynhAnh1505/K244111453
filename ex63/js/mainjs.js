function load_members(members, memberbody) {
    for (var i = 0; i < members.length; i++) {
        var member = members[i];
        var tr = document.createElement("tr");
        var td_name = document.createElement("td");
        var td_email = document.createElement("td");
        var td_gender = document.createElement("td");
        var td_birthday = document.createElement("td");
        var td_hobbies = document.createElement("td");
        var td_color = document.createElement("td");
        td_name.innerHTML = member.name;
        td_email.innerHTML = member.email;
        td_gender.innerHTML = member.gender;
        td_birthday.innerHTML = member.birthday;
        td_hobbies.innerHTML = member.hobbies;
        td_color.innerHTML = member.color;
        tr.appendChild(td_name);
        tr.appendChild(td_email);
        tr.appendChild(td_gender);
        tr.appendChild(td_birthday);
        tr.appendChild(td_hobbies);
        tr.appendChild(td_color);
        memberbody.appendChild(tr);
    }
}