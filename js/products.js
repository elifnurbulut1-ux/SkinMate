const products = {
    Low: [
        // ===== CLEANSERS =====
        {
            name: "Etude SoonJung pH 6.5 Whip Cleanser",
            brand: "Etude",
            category: "Cleanser",
            image: "images/LowFoamCleanser.png",
            skinTypes: ["Dry", "Normal", "Sensitive", "Combination"],
            concerns: ["Redness", "Dryness"]
        },
        {
            name: "Beauty of Joseon Green Plum Cleanser",
            brand: "Beauty of Joseon",
            category: "Cleanser",
            image: "images/LowGreenCleanser.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Blackheads"]
        },
        {
            name: "COSRX Low pH Good Morning Gel Cleanser",
            brand: "COSRX",
            category: "Cleanser",
            image: "images/LowPHcleanser.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Blackheads"]
        },

        // ===== SERUMS =====
        {
            name: "SKIN1004 Madagascar Centella Ampoule",
            brand: "SKIN1004",
            category: "Serum",
            image: "images/LowCentellaSerum.png",
            skinTypes: ["All"],
            concerns: ["Redness", "Sensitivity"]
        },
        {
            name: "Beauty of Joseon Glow Serum Propolis + Niacinamide",
            brand: "Beauty of Joseon",
            category: "Serum",
            image: "images/LowDRserum.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Blackheads", "Dark Spots"]
        },
        {
            name: "Torriden Dive-In Hyaluronic Acid Serum",
            brand: "Torriden",
            category: "Serum",
            image: "images/LowTorridenSerum.png",
            skinTypes: ["All"],
            concerns: ["Dryness"]
        },

        // ===== MOISTURIZERS =====
        {
            name: "Etude SoonJung 2x Barrier Intensive Cream",
            brand: "Etude",
            category: "Moisturizer",
            image: "images/LowEtudeMoist.png",
            skinTypes: ["Dry", "Sensitive", "Normal"],
            concerns: ["Dryness", "Redness"]
        },
        {
            name: "The Ordinary Natural Moisturizing Factors + HA",
            brand: "The Ordinary",
            category: "Moisturizer",
            image: "images/LowMoist.png",
            skinTypes: ["Dry", "Normal", "Combination"],
            concerns: ["Dryness"]
        },
        {
            name: "COSRX Oil-Free Ultra-Moisturizing Lotion",
            brand: "COSRX",
            category: "Moisturizer",
            image: "images/LowOilfreeMoist.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Blackheads"]
        },

        // ===== SUNSCREENS =====
        {
            name: "SKIN1004 Hyalu-Cica Water-Fit Sun Serum SPF50+",
            brand: "SKIN1004",
            category: "Sunscreen",
            image: "images/LowCentellaSun.png",
            skinTypes: ["All"],
            concerns: []
        },
        {
            name: "Dr. G Green Mild Up Sun Cream",
            brand: "Dr. G",
            category: "Sunscreen",
            image: "images/LowDRsunscream.png",
            skinTypes: ["Dry", "Sensitive", "Normal"],
            concerns: ["Redness", "Sensitivity"]
        },
        {
            name: "Isntree Hyaluronic Acid Watery Sun Gel SPF50+",
            brand: "Isntree",
            category: "Sunscreen",
            image: "images/LowITreeSun.png",
            skinTypes: ["Dry", "Normal", "Combination"],
            concerns: ["Dryness"]
        }
    ],

    Medium: [
        // ===== CLEANSERS =====
        {
            name: "Anua Heartleaf Quercetinol Pore Deep Cleansing Foam",
            brand: "Anua",
            category: "Cleanser",
            image: "images/MediumAnuaCleanser.png",
            skinTypes: ["Oily", "Combination"],
            concerns: ["Acne", "Blackheads"]
        },
        {
            name: "Haruharu Wonder Black Rice Moisture 5.5 Soft Cleansing Gel",
            brand: "Haruharu Wonder",
            category: "Cleanser",
            image: "images/MediumHaruCleanser.png",
            skinTypes: ["Dry", "Normal", "Sensitive", "Combination"],
            concerns: ["Dryness", "Redness"]
        },
        {
            name: "Round Lab 1025 Dokdo Cleanser",
            brand: "Round Lab",
            category: "Cleanser",
            image: "images/MediumRoundlabCleanser.png",
            skinTypes: ["All"],
            concerns: ["Dryness", "Sensitivity"]
        },

        // ===== SERUMS =====
        {
            name: "Anua Niacinamide 10% + TXA 4% Serum",
            brand: "Anua",
            category: "Serum",
            image: "images/MediumAnuaSerum.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Blackheads", "Dark Spots"]
        },
        {
            name: "Dr. Althea Vitamin C Boosting Serum",
            brand: "Dr. Althea",
            category: "Serum",
            image: "images/MediumDrSerum.png",
            skinTypes: ["Normal", "Combination", "Dry"],
            concerns: ["Dark Spots"]
        },
        {
            name: "numbuzin No.5 Vitamin Concentrated Serum",
            brand: "numbuzin",
            category: "Serum",
            image: "images/MediumNumbuzinSerum.png",
            skinTypes: ["All"],
            concerns: ["Dark Spots"]
        },

        // ===== MOISTURIZERS =====
        {
            name: "Dr. Althea 345 Relief Cream",
            brand: "Dr. Althea",
            category: "Moisturizer",
            image: "images/Medium345Moist.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Redness"]
        },
        {
            name: "Round Lab Birch Juice Moisturizing Cream",
            brand: "Round Lab",
            category: "Moisturizer",
            image: "images/MediumRoundlabMoist.png",
            skinTypes: ["Dry", "Normal", "Sensitive"],
            concerns: ["Dryness", "Redness"]
        },
        {
            name: "Torriden Solid In Ceramide Cream",
            brand: "Torriden",
            category: "Moisturizer",
            image: "images/MediumTorridenMoist.png",
            skinTypes: ["Dry", "Normal", "Sensitive"],
            concerns: ["Dryness"]
        },

        // ===== SUNSCREENS =====
        {
            name: "Haruharu Wonder Black Rice Moisture Airyfit Sunscreen SPF50+",
            brand: "Haruharu Wonder",
            category: "Sunscreen",
            image: "images/MediumHaruSun.png",
            skinTypes: ["All"],
            concerns: []
        },
        {
            name: "Round Lab Birch Juice Moisturizing Sunscreen SPF50+",
            brand: "Round Lab",
            category: "Sunscreen",
            image: "images/MediumRoundlabSun.png",
            skinTypes: ["Dry", "Normal", "Sensitive"],
            concerns: ["Dryness"]
        },
        {
            name: "Isntree Onion Newpair Sunscreen SPF40",
            brand: "Isntree",
            category: "Sunscreen",
            image: "images/MediumIstreeSun.png",
            skinTypes: ["Oily", "Combination", "Normal"],
            concerns: ["Acne", "Dark Spots"]
        }
    ],

    High: [
    // ===== CLEANSERS =====
    {
        name: "Sulwhasoo Gentle Cleansing Foam",
        brand: "Sulwhasoo",
        category: "Cleanser",
        image: "images/HighSulwhasooCleanser.png",
        skinTypes: ["Dry", "Normal", "Sensitive"],
        concerns: ["Dryness", "Redness"]
    },
    {
        name: "HERA Soft Cleansing Foam",
        brand: "HERA",
        category: "Cleanser",
        image: "images/HighHeraCleanser.png",
        skinTypes: ["Oily", "Combination", "Normal"],
        concerns: ["Acne", "Blackheads"]
    },
    {
        name: "The History of Whoo Gongjinhyang Facial Foam",
        brand: "The History of Whoo",
        category: "Cleanser",
        image: "images/HighGongjinhyangCleanser.png",
        skinTypes: ["Dry", "Normal", "Sensitive"],
        concerns: ["Dryness"]
    },

    // ===== SERUMS =====
    {
        name: "Sulwhasoo First Care Activating Serum VI",
        brand: "Sulwhasoo",
        category: "Serum",
        image: "images/HighSulwhasooSerum.png",
        skinTypes: ["All"],
        concerns: ["Dryness", "Redness"]
    },
    {
        name: "IOPE Retinol Super Bounce Serum",
        brand: "IOPE",
        category: "Serum",
        image: "images/HighExpertSerum.png",
        skinTypes: ["Normal", "Combination", "Oily"],
        concerns: ["Fine Lines", "Dark Spots"]
    },
    {
        name: "The History of Whoo Bichup Self-Generating Essence",
        brand: "The History of Whoo",
        category: "Serum",
        image: "images/HighBichupSerum.png",
        skinTypes: ["Dry", "Normal", "Sensitive"],
        concerns: ["Dryness", "Fine Lines"]
    },

    // ===== MOISTURIZERS =====
    {
        name: "Sulwhasoo Concentrated Ginseng Rejuvenating Cream",
        brand: "Sulwhasoo",
        category: "Moisturizer",
        image: "images/HighSulwhasooMoist.png",
        skinTypes: ["Dry", "Normal"],
        concerns: ["Dryness", "Fine Lines"]
    },
    {
        name: "HERA Hydro Reflecting Cream",
        brand: "HERA",
        category: "Moisturizer",
        image: "images/HighHeraMoist.png",
        skinTypes: ["Normal", "Dry", "Combination"],
        concerns: ["Dryness"]
    },
    {
        name: "IOPE Super Vital Cream",
        brand: "IOPE",
        category: "Moisturizer",
        image: "images/HighIopeMoist.png",
        skinTypes: ["Dry", "Normal", "Sensitive"],
        concerns: ["Dryness", "Fine Lines"]
    },

    // ===== SUNSCREENS =====
    {
        name: "Sulwhasoo UV Daily Essential Sunscreen SPF50+",
        brand: "Sulwhasoo",
        category: "Sunscreen",
        image: "images/HighSulwhasooSun.png",
        skinTypes: ["All"],
        concerns: []
    },
    {
        name: "HERA UV Protector Multi-Defense SPF50+",
        brand: "HERA",
        category: "Sunscreen",
        image: "images/HighHeraSun.png",
        skinTypes: ["All"],
        concerns: []
    },
    {
        name: "IOPE UV Shield Essential Sun Protector SPF50+",
        brand: "IOPE",
        category: "Sunscreen",
        image: "images/HighIopeSun.png",
        skinTypes: ["All"],
        concerns: []
    }
]
};