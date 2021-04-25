let selectedRow = null

function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    let formData = {};
    formData["Brand"] = document.getElementById("Brand").value;
    formData["Model"] = document.getElementById("Model").value;
    formData["Color"] = document.getElementById("Color").value;
    formData["year"] = document.getElementById("year").value;
    formData["Price"] = document.getElementById("Price").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Brand;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Model;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Color;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.year;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.Price;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Brand").value = "";
    document.getElementById("Model").value = "";
    document.getElementById("Color").value = "";
    document.getElementById("year").value = "";
    ocument.getElementById("Price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Brand").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Color").value = selectedRow.cells[2].innerHTML;
    document.getElementById("year").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Price").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Brand;
    selectedRow.cells[1].innerHTML = formData.Model;
    selectedRow.cells[2].innerHTML = formData.Color;
    selectedRow.cells[3].innerHTML = formData.year;
    selectedRow.cells[4].innerHTML = formData.Price;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Brand").value == "") {
        isValid = false;
        document.getElementById("fullBrandValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullBrandValidationError").classList.contains("hide"))
            document.getElementById("fullBrandValidationError").classList.add("hide");
    }
    return isValid;
}


