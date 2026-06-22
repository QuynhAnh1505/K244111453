/**
 * customers list of customer (XML -> customer.js)
 * bodycustomer -> tbody
 * @param {*} customers_xml_text
 * @param {*} bodycustomer 
 */
function load_customers(customers_xml_text,bodycustomer) 
{
    var parser = new DOMParser(); 
    var xmlDoc = parser.parseFromString(customers_xml_text,"text/xml"); 
    //doc toan bo the customer
    tag_customers = xmlDoc.getElementsByTagName("customer");
    for (var i = 0; i < tag_customers.length; i++) {
        var tag_id = tag_customers[i].getElementsByTagName("id")[0].textContent;
        var tag_name = tag_customers[i].getElementsByTagName("name")[0].textContent;
        var tag_age = tag_customers[i].getElementsByTagName("age")[0].textContent;
        var tag_city = tag_customers[i].getElementsByTagName("city")[0].textContent;

        var tr = document.createElement("tr");
        var td_id = document.createElement("td");
        td_id.innerHTML = tag_id;
        var td_name = document.createElement("td");
        td_name.innerHTML = tag_name;
        var td_age = document.createElement("td");
        td_age.innerHTML = tag_age;
        var td_city = document.createElement("td");
        td_city.innerHTML = tag_city;

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_age);
        tr.appendChild(td_city);
        bodycustomer.appendChild(tr);
    }

}