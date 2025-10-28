/**
 * Project Section Component
 *
 * This script dynamically generates and manages the project tiles for the portfolio website.
 * It is self-contained and should be included in the main HTML file.
 *
 * Responsibilities:
 * 1. Defines the data for all projects.
 * 2. Creates and injects the HTML for each project tile into a specified container.
 * 3. Implements a "zero-gravity" style fade-in animation on scroll for each tile.
 * 4. Attaches click handlers to each tile for future interactivity (e.g., opening a modal).
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. PROJECT DATA ---
    // An array of objects, where each object represents a project.
    // To add, edit, or remove a project, simply modify this array.
    const projectsData = [
        {
            title: "More Efficient Text Diffusion via Length Prediction",
            category: "Research Publication",
            description: "Developed novel inference technique for Diffusion LLMs using lightweight 1-layer MLP to predict variable sequence length from hidden states at inference time.",
            keyResult: "Achieved significant compute savings without costly model retraining, enabling more efficient text generation for production deployments.",
            tags: ["Diffusion Models", "LLMs", "Deep Learning", "PyTorch"],
            id: "diffusion-llms",
            link: "https://github.com/giacomo-ciro/diffusion-llms",
            image: "assets/images/diffusion-preview.png", // Placeholder for future image
            highlight: true, // Mark this project as highlighted
            buttons: [
                { text: "Read Paper", url: "assets/pdf/more_efficient_text_diffusion_via_length_prediction.pdf", primary: true },
                { text: "See Code on Github", url: "https://github.com/giacomo-ciro/diffusion-llms", primary: false }
            ]
        },
        {
            title: "LLM Forecasters - Zero-Shot Time Series Forecasting",
            category: "BSc Thesis",
            description: "Investigated LLMs as zero-shot forecasting models against traditional methods and developed a novel benchmark to evaluate this emerging capability.",
            keyResult: "Demonstrated that LLMs can outperform traditional models like ARIMA in specific zero-shot scenarios, establishing a new benchmark for evaluation.",
            tags: ["Time Series", "LLMs", "Zero-Shot Learning", "ARIMA", "Python"],
            id: "llm-forecasters",
            link: "https://github.com/VittorioRossi/llms-for-ts",
            image: "assets/images/forecasting-preview.png", // Placeholder for future image
            buttons: [
                { text: "Read Thesis", url: "assets/pdf/undergrad_thesis.pdf", primary: true },
                { text: "See Code on GitHub", url: "https://github.com/VittorioRossi/llms-for-ts", primary: false }
            ]
        },
        {
            title: "CodeGraph - Intelligent Codebase Analysis",
            category: "Full Stack Development",
            description: "Full-stack application that creates structured knowledge graphs of codebases using Neo4j, specifically designed for LLM querying to analyze complex code dependencies.",
            keyResult: "Built comprehensive graph database system that enables semantic code exploration and dependency analysis for large-scale software projects.",
            tags: ["React", "FastAPI", "Neo4j", "Python", "Graph Databases"],
            id: "codegraph",
            link: "https://github.com/VittorioRossi/GraphyDocs",
            image: "assets/images/codegraph-preview.png", // Placeholder for future image
            buttons: [
                { text: "Try Demo", url: "https://github.com/VittorioRossi/GraphyDocs", primary: true },
                { text: "See Code on GitHub", url: "https://github.com/VittorioRossi/GraphyDocs", primary: false }
            ]
        },
        {
            title: "Crowd Flow Estimation via Deep Learning",
            category: "Computer Vision Research",
            description: "Investigated impact of receptive field size on crowd density map estimation using systematic depth variations of VGG19 and ResNet50 encoder-decoder architectures.",
            keyResult: "Comprehensive analysis on ShanghaiTech dataset revealed optimal architecture configurations for crowd density estimation with improved accuracy.",
            tags: ["Computer Vision", "PyTorch", "VGG19", "ResNet50", "Deep Learning"],
            id: "crowd-flow",
            link: "https://github.com/VittorioRossi/crowd-flow-estimation",
            image: "assets/images/crowd-flow-preview.png", // Placeholder for future image
            buttons: [
                { text: "Read reserach", url: "assets/pdf/cv_flux_prediction.pdf", primary: true },
                { text: "See Code on GitHub", url: "https://github.com/VittorioRossi/crowd-flow-estimation", primary: false }
            ]
        }
    ];

    // --- 2. COMPONENT INITIALIZATION ---
    // Finds the container in the HTML and populates it with project tiles.
    const projectsContainer = document.getElementById('projects-container');

    if (!projectsContainer) {
        console.error('Error: The container for projects (#projects-container) was not found.');
        return;
    }



    // --- 4. TILE CREATION FUNCTION ---
    // Creates a single project tile element from a project data object.
    function createProjectTile(project, index) {
        const isHighlighted = project.highlight === true;
        
        const tile = document.createElement('div');
        // Highlighted projects are bigger and have special styling
        const tileClasses = isHighlighted 
            ? 'project-tile glass-card p-0 group overflow-hidden relative highlight-project-animation' 
            : 'project-tile glass-card p-0 group overflow-hidden relative';
        tile.className = tileClasses;
        tile.dataset.projectId = project.id;

        // Apply a staggered delay for a cascading animation effect.
        tile.style.transitionDelay = `${index * 150}ms`;

        // Create visual placeholder for image (can be replaced with actual images later)
        const imageSection = `
            <div class="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700/50">
                <div class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-400/60 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p class="text-xs text-gray-500 font-medium">${project.category}</p>
                </div>
            </div>
        `;

        const tagsHtml = project.tags.map(tag =>
            `<span class="inline-block bg-gray-700/50 text-green-300 text-xs font-medium mr-2 mb-2 px-2 py-1 rounded-full">${tag}</span>`
        ).join('');

        const buttonsHtml = project.buttons.map(button => 
            `<button onclick="window.open('${button.url}', '_blank', 'noopener,noreferrer')" 
                class="${button.primary 
                    ? 'bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/30 primary-btn-animation' 
                    : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:bg-gray-600/50'
                } border ${button.primary ? 'px-3 py-2 text-sm' : 'px-4 py-2 text-sm'} rounded-lg font-medium transition-all duration-300 hover:scale-105">
                ${button.text}
            </button>`
        ).join('');

        // Add highlight badge if project is highlighted
        const highlightBadge = isHighlighted ? `
            <div class="absolute top-4 left-4 z-10">
                <div class="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    HIGHLIGHT
                </div>
            </div>
        ` : '';

        tile.innerHTML = `
            ${highlightBadge}
            ${imageSection}
            <div class="p-6">
                <div class="mb-4">
                    <p class="text-sm font-semibold text-green-400 tracking-wider uppercase mb-2">${project.category}</p>
                    <h3 class="font-display ${isHighlighted ? 'text-3xl' : 'text-2xl'} font-bold text-gray-50 mb-3">${project.title}</h3>
                    <p class="text-gray-300 leading-relaxed mb-4">${project.description}</p>
                </div>
                
                <div class="border-t border-gray-700/30 pt-4 mb-4">
                    <div class="flex items-start mb-3">
                        <span class="text-lg mr-2">🏆</span>
                        <div>
                            <p class="text-sm font-semibold text-green-400 mb-1">Key Result</p>
                            <p class="text-gray-300 text-sm leading-relaxed">${project.keyResult}</p>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-700/30 pt-4 mb-6">
                    <div class="flex items-center mb-3">
                        <span class="text-lg mr-2">🛠️</span>
                        <p class="text-sm font-semibold text-green-400">Tech Stack</p>
                    </div>
                    <div class="mb-4">${tagsHtml}</div>
                </div>

                <div class="flex gap-3 pt-2">
                    ${buttonsHtml}
                </div>
            </div>
        `;
        
        return tile;
    }

    // --- 4. SCROLL ANIMATION ---
    // Uses the Intersection Observer API for efficient scroll detection.
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target); // Stop observing once the animation has triggered.
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the tile is visible.
        rootMargin: "0px 0px -50px 0px" // Start the animation a little before it's fully in view.
    });

    // Attach the observer to each project tile.
    const allTiles = document.querySelectorAll('.project-tile');
    allTiles.forEach(tile => {
        observer.observe(tile);
    });

    // --- 5. GRID POPULATION FUNCTION ---
    function populateProjectsGrid() {
        // Clear existing content
        projectsContainer.innerHTML = '';
        
        // Create and append each project tile
        projectsData.forEach((project, index) => {
            const tile = createProjectTile(project, index);
            projectsContainer.appendChild(tile);
        });

        // Set up scroll animation observer
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        // Observe all tiles for animation
        const allTiles = projectsContainer.querySelectorAll('.project-tile');
        allTiles.forEach(tile => {
            observer.observe(tile);
        });
    }



    // Initialize the grid
    populateProjectsGrid();

});
