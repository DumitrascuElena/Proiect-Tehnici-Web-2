document.addEventListener("DOMContentLoaded", function() {
    const reviewsContainer = document.getElementById("reviews-container");

    fetch("reviews.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const reviews = data.reviews;
            reviews.forEach(review => {
                const reviewElement = document.createElement("div");
                reviewElement.classList.add("review");
                reviewElement.innerHTML = `
                    <h3>${review.film}</h3>
                    <p>${review.review}</p>
                    <p>Rating: ${review.rating}</p>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
});
