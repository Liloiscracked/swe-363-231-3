const getButton = document.getElementById("get-Char");
const Container = document.getElementById("Fact");
const image = document.getElementById("image");
const full_name = document.getElementById("Full_name")
const id = document.getElementById("id")
const First_name = document.getElementById("First_name")
const Last_name = document.getElementById("Last_name")
const Title = document.getElementById("Title")
const Family = document.getElementById("Family")
const image_URL = document.getElementById("image_URL")
let link = "https://thronesapi.com/api/v2/Characters/"
getButton.addEventListener("click", () => {
    var x = document.getElementById("number").value
    link += x
    fetch(link)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((response) => {
            Container.textContent = response.firstName;
            image.src= response.imageUrl
            id.textContent = response.id
            First_name.textContent = response.firstName
            Last_name.textContent = response.lastName
            full_name.textContent = response.fullName
            Title.textContent = response.title
            Family.textContent = response.Family
            image.src= response.imageUrl
            image_URL.textContent = response.imageUrl
        })
        .catch(() => {
            console.error("There was a problem with the fetch operation:");
        });
});