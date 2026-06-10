function load_products(products,productbody)
{
    for (var i=0;i<products.length;i++)
    {
        product=products[i]
        productId=product.id;
        productName=product.name
        //get productbody
        productbody = document.getElementById("productbody")
        //create tr element
        tr = document.createElement("tr")
        //create 2 td
        td_id = document.createElement("td")
        td_name = document.createElement("td")
        td_img = document.createElement("td")
        //create img element
        img = document.createElement("img")
        img.setAttribute("src","images/ic_remove.png")
        img.setAttribute("onclick","delete_product(this)")
        //set value for td
        td_id.innerHTML = productId
        td_name.innerHTML = productName
        td_img.appendChild(img)
        //add td to tr
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_img)
        //add tr to productbody
        productbody.appendChild(tr)
    }
}
function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
        img_element.parentElement.parentElement.remove();
    }
}