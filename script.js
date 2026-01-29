function addStudent() {
    const name = document.getElementById("name").value;
    const math = parseFloat(document.getElementById("math").value);
    const physics = parseFloat(document.getElementById("physics").value);
    const chemistry = parseFloat(document.getElementById("chemistry").value);

    if (!name || isNaN(math) || isNaN(physics) || isNaN(chemistry)) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const avg = ((math + physics + chemistry) / 3).toFixed(2);

    const row = `
        <tr>
            <td>${name}</td>
            <td>${math}</td>
            <td>${physics}</td>
            <td>${chemistry}</td>
            <td>${avg}</td>
            <td>
                <button class="delete" onclick="this.parentElement.parentElement.remove()">X</button>
            </td>
        </tr>
    `;

    document.getElementById("tableBody").innerHTML += row;

    document.getElementById("name").value = "";
    document.getElementById("math").value = "";
    document.getElementById("physics").value = "";
    document.getElementById("chemistry").value = "";
}
