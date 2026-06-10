function load_product_data(dataset,tbl_product)
{
    for (var i=0;i<dataset.length;i++)
    {
        tbl_product.innerHTML+=
        "<tr onclick='selectProductRow(this)' style='cursor:pointer;'>"+
        "<td>"+dataset[i].id+"</td>"+
        "<td>"+dataset[i].name+"</td>"+
        "<td>"+dataset[i].price+"</td>"+ 
        "<td><img src='images/ic_remove.png' onclick='delete_product(this)'></td>"+
        "</tr>";
    }
}
function selectProductRow(row)
{
    var cells = row.cells;
    document.getElementById('product_id').value = cells[0].textContent;
    document.getElementById('product_name').value = cells[1].textContent;
    document.getElementById('product_price').value = cells[2].textContent;
    var rows = row.parentElement.children;
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = '';
    }
    row.style.backgroundColor = '#fff7c2';
}
function delete_product(img_element)
{
    if(confirm("Are you sure to delete this product?"))
    {
    img_element.parentElement.parentElement.remove();
    }
}