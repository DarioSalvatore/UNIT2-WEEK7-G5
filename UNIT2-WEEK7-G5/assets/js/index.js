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
                col.className = "col-10 justify-center mt-4 mb-4 col-md-6 col-lg-4 col-xl-3";
                col.innerHTML = `
                <div class="card prodotto">
                <img class="resize" src=${element.imageUrl}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${element.name}</h5>
                        <span class="badge bg-dark">price ${element.price}€ </span>
                        <p class="card-text">${element.description}</p>
                        <p class="text-success">prodotto da: ${element.brand}</p>
                        <span class="badge bg-warning"> quality: <span class="text-info">-DIAMOND- </span></span>
                        <div class="d-flex justify-content-evenly mt-3">
                        <button class="btn btn-success px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                        <button class="btn btn-light px-2"><a class="dettagli" href="details.html?id=${element._id}">Dettagli</a></button>
                        <button class="btn btn-light px-2"><a class="dettagli" href="backoffice.html?id=${element._id}">Modifica</a></button>
                    </div>
                </div>
                `;
                bacheca.appendChild(col);
                console.log(element);
            })
            
        })
        .catch((error)=> console.log("CATCH", error));