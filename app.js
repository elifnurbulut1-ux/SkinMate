
let selectedSkinType = "";
let selectedSkinConcerns = [];
let selectedBudget = "";
let selectedRoutine = "";

// START
function startPlanner() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("skinSelection").style.display = "block";
}

// SKIN TYPE
function selectSkin(skin) {
    selectedSkinType = skin;

    document.getElementById("selectedSkin").textContent =
        "Your skin type: " + skin;
}

// CONTINUE TO CONCERNS
function selectConcernStep() {
    if (!selectedSkinType) {
        alert("Please select your skin type first!");
        return;
    }

    document.getElementById("skinSelection").style.display = "none";
    document.getElementById("concernSelection").style.display = "block";
}

// SKIN CONCERNS
function saveConcerns() {
    const checkboxes = document.querySelectorAll(
        '#concernSelection input[type="checkbox"]:checked'
    );

    selectedSkinConcerns = [];

    checkboxes.forEach(function (checkbox) {
        selectedSkinConcerns.push(checkbox.value);
    });

    document.getElementById("selectedConcerns").textContent =
        "Your concerns: " +
        (selectedSkinConcerns.length
            ? selectedSkinConcerns.join(", ")
            : "None selected");

    document.getElementById("concernSelection").style.display = "none";
    document.getElementById("budgetSelection").style.display = "block";
}

// BUDGET
function selectBudget(budget) {
    selectedBudget = budget;

    document.getElementById("selectedBudget").textContent =
        "Your budget: " + budget;
}

// CONTINUE TO ROUTINE
function selectRoutineStep() {
    if (!selectedBudget) {
        alert("Please select your budget first!");
        return;
    }

    document.getElementById("budgetSelection").style.display = "none";
    document.getElementById("routineSelection").style.display = "block";
}

// ROUTINE
function selectRoutine(routine) {
    selectedRoutine = routine;

    document.getElementById("selectedRoutine").textContent =
        "Your routine: " + routine;

    document.getElementById("generateButton").style.display = "inline-block";
}

// CONCERN MATCH SCORE
function getConcernScore(product) {
    if (selectedSkinConcerns.length === 0) {
        return 0;
    }

    return selectedSkinConcerns.filter(function (concern) {
        return product.concerns.includes(concern);
    }).length;
}

// PRODUCT RECOMMENDATIONS
function getRecommendedProducts(isMorning) {
    const budgetProducts = products[selectedBudget] || [];

    // AM and PM category rules
    const allowedCategories = isMorning
        ? ["Cleanser", "Moisturizer", "Sunscreen"]
        : ["Cleanser", "Serum", "Moisturizer"];

    const recommendedProducts = [];

    allowedCategories.forEach(function (category) {
        const matchingProducts = budgetProducts.filter(function (product) {
            const matchesCategory = product.category === category;

            const matchesSkinType =
                product.skinTypes.includes("All") ||
                product.skinTypes.includes(selectedSkinType);

            return matchesCategory && matchesSkinType;
        });

        // Sort products according to selected concerns
        matchingProducts.sort(function (a, b) {
            return getConcernScore(b) - getConcernScore(a);
        });

        // Select the best matching product from this category
        if (matchingProducts.length > 0) {
            recommendedProducts.push(matchingProducts[0]);
        }
    });

    return recommendedProducts;
}

// DISPLAY PRODUCTS
function displayRoutine(containerId, title, recommendedProducts) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const isMorning = title === "Morning Routine";

    const order = isMorning
        ? ["Cleanser", "Moisturizer", "Sunscreen"]
        : ["Cleanser", "Serum", "Moisturizer"];

    const descriptions = {
        Cleanser: "Cleans your skin and removes dirt and excess oil.",
        Serum: "Provides targeted care for your selected skin concerns.",
        Moisturizer: "Hydrates your skin and helps maintain its moisture barrier.",
        Sunscreen: "Protects your skin from UV rays. Use in your morning routine."
    };

    const usageSteps = {
        Cleanser: "How to use: Wet your face with lukewarm water. Gently massage the cleanser onto your skin, then rinse thoroughly.",
        Serum: "How to use: Apply a few drops to clean, dry skin. Gently spread across your face and allow it to absorb before the next step.",
        Moisturizer: "How to use: Apply a small amount evenly to your face and neck. Gently massage until absorbed.",
        Sunscreen: "How to use: Apply generously to your face and neck as the last step of your morning routine. Reapply throughout the day."
    };

    order.forEach(function (category, index) {
        const product = recommendedProducts.find(function (item) {
            return item.category === category;
        });

        if (!product) return;

        const card = document.createElement("div");
        card.className = "product-card";

        // Concern matches
        const matchedConcerns = selectedSkinConcerns.filter(function (concern) {
            return product.concerns.includes(concern);
        });

        // Skin type match text
        const skinMatchText = product.skinTypes.includes("All")
            ? "Suitable for all skin types"
            : "Matches your skin type: " + selectedSkinType;

        // Concern match text
        let concernText = "";

        if (matchedConcerns.length > 0) {
            concernText =
                "<p class='match-text'>♡ Matches your concerns: " +
                matchedConcerns.join(", ") +
                "</p>";
        } else if (selectedSkinConcerns.length === 0) {
            concernText =
                "<p class='match-text'>♡ No specific concerns selected</p>";
        } else {
            concernText =
                "<p class='match-text'>♡ Selected concerns considered</p>";
        }

        card.innerHTML =
            "<p class='recommendation-label'>♡ Recommended for your skin</p>" +

            (product.image
                ? '<img src="' + product.image +
                  '" alt="' + product.name +
                  '" class="product-image">'
                : "") +

            "<h4>" + (index + 1) + ". " + category + "</h4>" +
            "<p><strong>" + product.name + "</strong></p>" +
            "<p>" + product.brand + "</p>" +

            "<p class='skin-match-text'>" +
            skinMatchText +
            "</p>" +

            "<p class='product-description'>" +
            descriptions[category] +
            "</p>" +

            "<p class='usage-step'>" +
            usageSteps[category] +
            "</p>" +

            concernText;

        container.appendChild(card);
    });

    if (recommendedProducts.length === 0) {
        container.textContent =
            "No matching products found. Please try different selections.";
    }
}

// GENERATE ROUTINE
function generateRoutine() {
    const morningColumn = document.getElementById("morningRoutine");
    const nightColumn = document.getElementById("nightRoutine");

    const routineContainer = document.querySelector(".routine-container");

    routineContainer.classList.toggle(
        "single-routine",
        selectedRoutine !== "Both"
    );

    document.getElementById("routineSummary").textContent =
        "Skin type: " + selectedSkinType +
        " | Budget: " + selectedBudget +
        " | Concerns: " +
        (selectedSkinConcerns.length
            ? selectedSkinConcerns.join(", ")
            : "None");

    morningColumn.style.display =
        selectedRoutine === "Evening" ? "none" : "block";

    nightColumn.style.display =
        selectedRoutine === "Morning" ? "none" : "block";

    // MORNING ROUTINE
    if (selectedRoutine === "Morning" || selectedRoutine === "Both") {
        const morningProducts = getRecommendedProducts(true);

        displayRoutine(
            "morningProducts",
            "Morning Routine",
            morningProducts
        );
    }

    // EVENING ROUTINE
    if (selectedRoutine === "Evening" || selectedRoutine === "Both") {
        const nightProducts = getRecommendedProducts(false);

        displayRoutine(
            "nightProducts",
            "Night Routine",
            nightProducts
        );
    }

    // SAVE LATEST ROUTINE
    localStorage.setItem("skinMateRoutine", JSON.stringify({
        skinType: selectedSkinType,
        concerns: selectedSkinConcerns,
        budget: selectedBudget,
        routine: selectedRoutine
    }));

    document.getElementById("routineSelection").style.display = "none";
    document.getElementById("results").style.display = "block";
}

// BACK BUTTONS

// BACK TO WELCOME
function goBackToWelcome() {
    document.getElementById("skinSelection").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}

// BACK TO SKIN TYPE
function goBackToSkin() {
    document.getElementById("skinSelection").style.display = "block";
    document.getElementById("concernSelection").style.display = "none";
    document.getElementById("budgetSelection").style.display = "none";
    document.getElementById("routineSelection").style.display = "none";
    document.getElementById("results").style.display = "none";
}

// BACK TO CONCERNS
function goBackToConcerns() {
    document.getElementById("concernSelection").style.display = "block";
    document.getElementById("budgetSelection").style.display = "none";
    document.getElementById("routineSelection").style.display = "none";
    document.getElementById("results").style.display = "none";
}

// BACK TO BUDGET
function goBackToBudget() {
    document.getElementById("budgetSelection").style.display = "block";
    document.getElementById("routineSelection").style.display = "none";
    document.getElementById("results").style.display = "none";
}

// BACK TO ROUTINE
function goBackToRoutine() {
    document.getElementById("results").style.display = "none";
    document.getElementById("routineSelection").style.display = "block";
    document.getElementById("generateButton").style.display = "inline-block";
}

// START OVER
function startOver() {
    selectedSkinType = "";
    selectedSkinConcerns = [];
    selectedBudget = "";
    selectedRoutine = "";

    document.querySelectorAll(
        '#concernSelection input[type="checkbox"]'
    ).forEach(function (checkbox) {
        checkbox.checked = false;
    });

    document.getElementById("selectedSkin").textContent = "";
    document.getElementById("selectedConcerns").textContent = "";
    document.getElementById("selectedBudget").textContent = "";
    document.getElementById("selectedRoutine").textContent = "";
    document.getElementById("routineSummary").textContent = "";

    document.getElementById("morningProducts").innerHTML = "";
    document.getElementById("nightProducts").innerHTML = "";

    document.getElementById("skinSelection").style.display = "none";
    document.getElementById("concernSelection").style.display = "none";
    document.getElementById("budgetSelection").style.display = "none";
    document.getElementById("routineSelection").style.display = "none";
    document.getElementById("results").style.display = "none";

    document.getElementById("generateButton").style.display = "none";
    document.getElementById("welcome").style.display = "block";
}

// LOAD SAVED ROUTINE ON MY ROUTINE PAGE
function loadMyRoutine() {
    const savedRoutine = localStorage.getItem("skinMateRoutine");
    const container = document.getElementById("savedRoutine");

    if (!container) return;

    if (!savedRoutine) {
        container.innerHTML = `
            <p>You haven't created your routine yet ♡</p>
            <button onclick="window.location.href='index.html'">
                Create My Routine
            </button>
        `;
        return;
    }

    const routine = JSON.parse(savedRoutine);

    // Restore saved selections
    selectedSkinType = routine.skinType;
    selectedSkinConcerns = routine.concerns;
    selectedBudget = routine.budget;
    selectedRoutine = routine.routine;

    // Profile information
    container.innerHTML = `
        <div class="my-routine-profile">
            <p><strong>Skin Type:</strong> ${routine.skinType}</p>
            <p><strong>Skin Concerns:</strong> ${
                routine.concerns.length
                    ? routine.concerns.join(", ")
                    : "None"
            }</p>
            <p><strong>Budget:</strong> ${routine.budget}</p>
            <p><strong>Routine:</strong> ${routine.routine}</p>
        </div>

        <div class="routine-container">
            <div class="routine-column" id="myMorningColumn">
                <h3>☀️ Morning Routine</h3>
                <div id="myMorningProducts"></div>
            </div>

            <div class="routine-column" id="myNightColumn">
                <h3>🌙 Evening Routine</h3>
                <div id="myNightProducts"></div>
            </div>
        </div>

        <button onclick="window.location.href='index.html'">
            Create New Routine ♡
        </button>
    `;

    // Center the routine when only Morning or Evening is selected
    const myRoutineContainer = container.querySelector(".routine-container");

    myRoutineContainer.classList.toggle(
        "single-routine",
        routine.routine !== "Both"
    );

    // Display saved morning products
    if (routine.routine === "Morning" || routine.routine === "Both") {
        const morningProducts = getRecommendedProducts(true);

        displayRoutine(
            "myMorningProducts",
            "Morning Routine",
            morningProducts
        );
    } else {
        document.getElementById("myMorningColumn").style.display = "none";
    }

    // Display saved evening products
    if (routine.routine === "Evening" || routine.routine === "Both") {
        const nightProducts = getRecommendedProducts(false);

        displayRoutine(
            "myNightProducts",
            "Evening Routine",
            nightProducts
        );
    } else {
        document.getElementById("myNightColumn").style.display = "none";
    }
}

loadMyRoutine();
