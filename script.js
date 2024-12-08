

document.addEventListener("DOMContentLoaded", () => {
    const recipes = [
        {
            id: "card1",
            recipeName: "Strawberry Cream Cheesecake",
            recipeImage: "/assets/images/Screenshot 2024-11-24 093833.png",
            modalId: "myModal1",
            modalClass: "straw-modal",
            modalImage: "/assets/images/istockphoto-1456338180-612x612.jpg",
            ingredients: [
                "1 cup graham cracker crumbs",
                "3 tablespoons sugar",
                "1/4 cup butter, melted",
                "2 packages (8 ounces each) cream cheese, softened",
                "1/2 cup sugar",
                "2 eggs",
                "1 teaspoon vanilla extract",
                "1 cup sour cream",
                "1/4 cup sugar",
                "1 teaspoon vanilla extract",
                "1 cup fresh strawberries, sliced"
            ],
            steps: [
                "Preheat the oven to 163°C.",
                "Mix graham cracker crumbs, 3 tablespoons sugar, and melted butter in a bowl until well combined. Press the mixture into the bottom of a 9-inch springform pan to form an even layer.",
                "In a large mixing bowl, beat the cream cheese and 1/2 cup sugar until smooth and creamy. Add eggs one at a time, beating well after each addition. Stir in 1 teaspoon vanilla extract. Pour the cream cheese mixture over the crust in the springform pan.",
                "Place the springform pan in the preheated oven and bake for 45-50 minutes, or until the center is set but still slightly jiggly. Remove the cheesecake from the oven and let it cool on a wire rack for about 10 minutes.",
                "In a small bowl, mix sour cream, 1/4 cup sugar, and 1 teaspoon vanilla extract until smooth. Spread the sour cream mixture over the top of the cheesecake. Return the cheesecake to the oven and bake for an additional 10 minutes.",
                "Remove the cheesecake from the oven and let it cool completely on a wire rack. Once cooled, refrigerate the cheesecake for at least 4 hours or overnight.",
                "Before serving, top the cheesecake with fresh sliced strawberries."
            ]
        },
        {
            id: "card2",
            recipeName: "Greek Ratatouille",
            recipeImage: "/assets/images/greek1.jpg",
            modalId: "myModal2",
            modalClass: "greek-modal",
            modalImage: "/assets/images/greek2.jpg",
            ingredients: [
                "1 large eggplant, diced",
                "2 zucchinis, sliced",
                "2 bell peppers, chopped",
                "1 large onion, chopped",
                "4 garlic cloves, minced",
                "4 large tomatoes, chopped",
                "1/4 cup olive oil",
                "1 teaspoon dried oregano",
                "Salt and pepper to taste",
                "Fresh basil leaves for garnish"
            ],
            steps: [
                "Preheat the oven to 200°C.",
                "In a large baking dish, combine eggplant, zucchinis, bell peppers, onion, and garlic.",
                "Drizzle with olive oil and season with oregano, salt, and pepper. Toss to coat.",
                "Bake in the preheated oven for 25-30 minutes, stirring occasionally, until vegetables are tender and lightly browned.",
                "Stir in chopped tomatoes and bake for an additional 10-15 minutes.",
                "Remove from the oven and garnish with fresh basil leaves before serving."
            ]
        },
        {
            id: "card3",
            recipeName: "Cheese Lasagna",
            recipeImage: "/assets/images/Cheese-Lasagna.png",
            modalId: "myModal3",
            modalClass: "cheese-modal",
            modalImage: "/assets/images/cheeselasagna.jpeg",
            ingredients: [
                "12 lasagna noodles",
                "2 cups ricotta cheese",
                "2 cups shredded mozzarella cheese",
                "1/2 cup grated Parmesan cheese",
                "1 large egg",
                "1 teaspoon dried basil",
                "1 teaspoon dried oregano",
                "4 cups marinara sauce",
                "1/4 cup chopped fresh parsley"
            ],
            steps: [
                "Preheat the oven to 190°C.",
                "Cook the lasagna noodles according to package instructions. Drain and set aside.",
                "In a medium bowl, combine ricotta cheese, 1 1/2 cups mozzarella cheese, Parmesan cheese, egg, basil, and oregano. Mix well.",
                "Spread 1 cup of marinara sauce in the bottom of a 9x13-inch baking dish. Layer with 4 lasagna noodles, 1/3 of the cheese mixture, and 1 cup of marinara sauce. Repeat layers twice more, ending with marinara sauce.",
                "Sprinkle the remaining 1/2 cup mozzarella cheese on top.",
                "Cover with aluminum foil and bake in the preheated oven for 30 minutes. Remove the foil and bake for an additional 10 minutes, or until the cheese is melted and bubbly.",
                "Let lasagna cool for 10 minutes before serving. Garnish with chopped fresh parsley."
            ]
        },
        {
            id: "card4",
            recipeName: "Peri Peri Chicken Pizza",
            recipeImage: "/assets/images/peri.jpg",
            modalId: "myModal4",
            modalClass: "peri-modal",
            modalImage: "/assets/images/peri2.jpg",
            ingredients: [
                "1 premade pizza crust",
                "1/2 cup Peri Peri sauce",
                "1 cup cooked chicken, shredded",
                "1 cup shredded mozzarella cheese",
                "1/2 cup sliced red onions",
                "1/2 cup sliced bell peppers",
                "Fresh cilantro leaves for garnish"
            ],
            steps: [
                "Preheat the oven to 230°C.",
                "Place the premade pizza crust on a baking sheet or pizza stone.",
                "Spread the Peri Peri sauce evenly over the pizza crust.",
                "Top with shredded chicken, mozzarella cheese, sliced red onions, and sliced bell peppers.",
                "Bake in the preheated oven for 12-15 minutes, or until the cheese is melted and bubbly.",
                "Remove from the oven and garnish with fresh cilantro leaves before serving."
            ]
        }
    ];

    const recipeCardsContainer = document.getElementById("recipeCardsContainer");
    const modalsContainer = document.getElementById("modalsContainer");

    recipes.forEach(recipe => {
        // Create the card element
        let recipeCard = document.createElement("div");
        recipeCard.classList.add("col-md-3");
        recipeCard.innerHTML = `
            <div class="card" id="${recipe.id}">
                <img src="${recipe.recipeImage}" class="card-img-top clickable" alt="${recipe.recipeName}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.recipeName}</h5>
                    <button class="btn btn-primary read-more">Read More</button>
                </div>
            </div>
        `;
        recipeCardsContainer.appendChild(recipeCard);

        // Create the modal element
        let modal = document.createElement("div");
        modal.classList.add("modal", recipe.modalClass);
        modal.id = recipe.modalId;
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h1>${recipe.recipeName}</h1>
                <div class="image-container">
                    <img src="${recipe.modalImage}" alt="${recipe.recipeName}">
                </div>
                <h2>Ingredients</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h2>Step By Step Procedure</h2>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        `;
        modalsContainer.appendChild(modal);

        // Add event listeners for opening the modal
        const openModalBtns = document.querySelectorAll(`#${recipe.id} .clickable, #${recipe.id} .read-more`);
        openModalBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                document.getElementById(recipe.modalId).style.display = "block";
            });
        });

        // Add event listener for closing the modal
        const closeModalBtn = modal.querySelector(".close");
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Add event listener for closing the modal when clicking outside of it
        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    });
});
