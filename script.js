async function getCatFacts() {
    try {
        const data = await fetch("https://catfact.ninja/facts");
        console.log(data);

        const response = await data.json();
        console.log(response);
        return response;
    } catch {
        console.error("Something went wrong");
    }
}
//getCatFacts();

async function displayCatFacts() {
    try {
        const catFacts = await getCatFacts();
        console.log(catFacts);

        const catFactList = document.querySelector("#catFactList");

        catFacts.data.forEach(function(item) {
            const catFactsItem = document.createElement("li");
            catFactItem.textContent = item.fact;
            catFactList.appendChild(catFactItem);
        })
    } catch {
        console.error("Something went wrong");
    }
}
displayCatFacts();