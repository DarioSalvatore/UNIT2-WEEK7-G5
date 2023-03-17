fetch("https://striveschool-api.herokuapp.com/api/product/", {
          
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0M2EzNWY4MWI0MjAwMTM5YjI4MzUiLCJpYXQiOjE2NzkwNDcyMjMsImV4cCI6MTY4MDI1NjgyM30.utzdk1ZW8pDH7zbitEJl2U7PFjkbMLNgefAzoj5BJoU",
            "content-type": "application/json",
          },
        })
        .then(resp => resp.json())
        .then((events) => {
            const bacheca = document.getElementById("bacheca");
            bacheca.innerHTML = "";

            events.forEach((element) => {
                const col = document.createElement("div");
                col.className = "col";
                col.innerHTML = `
                <div class="card">
                <img src=${element.imageUrl}>
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <span class="badge bg-dark">${element.price}€ </span>
                        <p class="card-text">${element.description}</p>
                        <p class="text-success">prodotto da: ${element.brand}</p>
                        <span class="badge bg-warning">"quality: "${element.quality}</span>
                    </div>
                </div>
                `;
                bacheca.appendChild(col);
            })
        })
        .catch((error)=> console.log("CATCH", error));