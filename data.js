const apps = [
    {
        title: "Pantry Pals",
        description: "AI-powered kitchen inventory management with smart barcode scanning and recipe generation.",
        tags: ["React Native", "Node.js", "AI"],
        tech: ["React Native", "Expo", "Node.js", "MongoDB", "CloudFlare"],
        links: { 
            ios: "https://apps.apple.com/...", 
            android: "https://play.google.com/..." 
        },
        featured: true,
        icon: "🍳",
        image: "pantry-pals-icon.png",
        screenshots: [
            "screenshots/pantry_pals/1.png",
            "screenshots/pantry_pals/2.png",
            "screenshots/pantry_pals/3.png"
        ],
        status: "live"
    },
    {
        title: "Aurallytics",
        description: "Brand sentiment analysis and narrative summaries using high-fidelity audio processing.",
        tags: ["TypeScript", "MongoDB", "Sentiment Analysis"],
        links: { web: "#" },
        featured: false,
        icon: "📊",
        status: "soon" // This will trigger the "Coming Soon" badge
    },
    {
        title: "PocketPet",
        description: "A virtual pet experience focused on cross-platform synchronization and offline-first data.",
        tags: ["SQLite", "Expo", "2D Graphics"],
        links: { web: "#" },
        featured: false,
        icon: "🐾",
        /*image: "pocketpet.jpeg",*/
        status: "soon"
    }
];
