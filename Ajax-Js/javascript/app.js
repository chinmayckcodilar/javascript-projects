const url = "https://jsonplaceholder.typicode.com/users"; // Replace with your own URL

fetch(url)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById("data-table-body");

        // Loop through the data and create a new row for each object
        data.forEach(obj => {
            const row = document.createElement("tr");

            const idCell = document.createElement("td");
            idCell.innerText = obj.id;
            row.appendChild(idCell);

            const nameCell = document.createElement("td");
            nameCell.innerText = obj.name;
            row.appendChild(nameCell);

            const emailCell = document.createElement("td");
            emailCell.innerText = obj.email;
            row.appendChild(emailCell);

            const phoneCell = document.createElement("td");
            phoneCell.innerText = obj.phone;
            row.appendChild(phoneCell);

            const cityCell = document.createElement("td");
            cityCell.innerText = obj.address.city;
            row.appendChild(cityCell);

            const countryCell = document.createElement("td");
            countryCell.innerText = obj.address.country;
            row.appendChild(countryCell);

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.log(error));
