document.getElementById('submitBtn').addEventListener('click', function() {
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('alamat').value;
    const result = document.getElementById('result');

    if(name==='' || email==='' || address==='' ){
        alert("Semua input harus diisi!");
    }else{
        result.innerHTML = `
        <table class="output-table">
        <tr>
            <th>Name</th>
            <td>${name}</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>${email}</td>
        </tr>
        <tr>
            <th>Address</th>
            <td>${address}</td>
        </tr>
    </table>
`;
    }
    document.getElementById('dataform').reset();
});