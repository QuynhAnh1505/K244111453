
function load_category_fromjson(dataset_path,bodycategory)
{
    fetch(dataset_path)
        .then(response => response.json())
        .then(data => {
            var categories = data.categories;
            for (i = 0; i < categories.length; i++) {
                var category = categories[i];
                value_tag_name = category.name;
                value_tag_image = category.image;
                
                tr = document.createElement("tr");
                
                td_name = document.createElement("td");
                td_name.innerHTML = value_tag_name;
                
                td_image = document.createElement("td");
                var img = document.createElement("img");
                img.src = value_tag_image;
                img.alt = value_tag_name;
                img.style.maxWidth = "120px";
                img.style.height = "auto";
                img.style.borderRadius = "4px";
                td_image.appendChild(img);
                
                tr.appendChild(td_name);
                tr.appendChild(td_image);
                bodycategory.appendChild(tr);
            }
        })
        .catch(error => console.log("Failed to load categories JSON:", error));
}
function load_category_fromxml(dataset_path,bodycategory)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
	    if (xhr.readyState==4 && xhr.status==200)
        {
                //handling when loading data successfully
                //khi vào đây tức là đã về local-> dùng DOM bài trước
                var xmlDoc = xhr.responseXML;
                if (xmlDoc) {
                    tag_categories = xmlDoc.getElementsByTagName("category");
                    for (i = 0; i < tag_categories.length; i++) 
                {
                    value_tag_name=tag_categories[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                    value_tag_image=tag_categories[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
                    tr = document.createElement("tr");
                    
                    td_name = document.createElement("td");
                    td_name.innerHTML=value_tag_name;
                    
                    td_image = document.createElement("td");
                    var img = document.createElement("img");
                    img.src = value_tag_image;
                    img.alt = value_tag_name;
                    img.style.maxWidth = "100px";
                    img.style.height = "auto";
                    td_image.appendChild(img);
                    
                    tr.appendChild(td_name);
                    tr.appendChild(td_image);
                    bodycategory.appendChild(tr);
                }
                } else {
                    console.log("Failed to parse categories XML");
                }
        }
	    else
	    {
		    //handling when data can't be loaded
	    }
    }

}

function load_product_fromxml(dataset_path,bodyproduct)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true);
    xhr.send();
    xhr.onreadystatechange = function() {
	    if (xhr.readyState==4 && xhr.status==200)
        {
                //handling when loading data successfully
                var xmlDoc = xhr.responseXML;
                if (xmlDoc) {
                    tag_products = xmlDoc.getElementsByTagName("product");
                    for (i = 0; i < tag_products.length; i++) 
                {
                    value_tag_name=tag_products[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
                    value_tag_image=tag_products[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
                    value_tag_price=tag_products[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
                    tr = document.createElement("tr");
                    
                    td_name = document.createElement("td");
                    td_name.innerHTML=value_tag_name;
                    
                    td_image = document.createElement("td");
                    var img = document.createElement("img");
                    img.src = value_tag_image;
                    img.alt = value_tag_name;
                    td_image.appendChild(img);
                    
                    td_price = document.createElement("td");
                    td_price.innerHTML=value_tag_price;
                    
                    tr.appendChild(td_name);
                    tr.appendChild(td_image);
                    tr.appendChild(td_price);
                    bodyproduct.appendChild(tr);
                }
                } else {
                    alert("Failed to parse products XML");
                }
        }
	    else
	    {
		    //handling when data can't be loaded
	    }
    }

}

function load_product_fromjson(dataset_path,bodyproduct)
{
    fetch(dataset_path)
        .then(response => response.json())
        .then(data => {
            var products = data.products;
            for (i = 0; i < products.length; i++) {
                var product = products[i];
                value_tag_name = product.name;
                value_tag_image = product.image;
                value_tag_price = product.price;
                
                tr = document.createElement("tr");
                
                td_name = document.createElement("td");
                td_name.innerHTML = value_tag_name;
                
                td_image = document.createElement("td");
                var img = document.createElement("img");
                img.src = value_tag_image;
                img.alt = value_tag_name;
                img.style.maxWidth = "120px";
                img.style.height = "auto";
                td_image.appendChild(img);
                
                td_price = document.createElement("td");
                td_price.innerHTML = value_tag_price;
                
                tr.appendChild(td_name);
                tr.appendChild(td_image);
                tr.appendChild(td_price);
                bodyproduct.appendChild(tr);
            }
        })
        .catch(error => console.log("Failed to load products JSON:", error));
}