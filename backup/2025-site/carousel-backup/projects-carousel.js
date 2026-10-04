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
            keyResult: "Demonstrated that LLMs can outperform traditional models like ARIMA and Prophet in specific zero-shot scenarios, establishing a new benchmark for evaluation.",
            tags: ["Time Series", "LLMs", "Zero-Shot Learning", "ARIMA", "Prophet", "Python"],
            id: "llm-forecasters",
            link: "https://github.com/VittorioRossi/llms-for-ts",
            image: "assets/images/forecasting-preview.png", // Placeholder for future image
            buttons: [
                { text: "Read Thesis", url: "assets/pdf/cv_flux_prediction.pdf", primary: true },
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

    // Initialize carousel functionality first to create infinite array
    initializeCarousel();

    // --- 3. TILE CREATION FUNCTION ---
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

    // --- 5. INTEGRATED CAROUSEL FUNCTIONALITY ---
    function initializeCarousel() {
        const container = document.getElementById('projects-container');
        const prevBtn = document.getElementById('prev-arrow');
        const nextBtn = document.getElementById('next-arrow');
        const dotsContainer = document.getElementById('carousel-dots');
        
        if (!container || !prevBtn || !nextBtn || !dotsContainer) {
            console.error('Carousel elements not found');
            return;
        }

        let currentIndex = 0;
        const totalProjects = projectsData.length;

        // --- INFINITE CAROUSEL SETUP ---
        // Create infinite array by duplicating projects to ensure smooth looping
        let infiniteProjects = [];
        let actualCurrentIndex = 0; // Real index in original projectsData
        const BUFFER_SIZE = 2; // Number of items to duplicate on each side

        function createInfiniteArray() {
            infiniteProjects = [];
            
            // Add buffer items from the end
            for (let i = totalProjects - BUFFER_SIZE; i < totalProjects; i++) {
                infiniteProjects.push({ ...projectsData[i], isClone: true, originalIndex: i });
            }
            
            // Add all original items
            for (let i = 0; i < totalProjects; i++) {
                infiniteProjects.push({ ...projectsData[i], isClone: false, originalIndex: i });
            }
            
            // Add buffer items from the beginning
            for (let i = 0; i < BUFFER_SIZE; i++) {
                infiniteProjects.push({ ...projectsData[i], isClone: true, originalIndex: i });
            }
            
            // Set starting position to first real item (after buffer)
            currentIndex = BUFFER_SIZE;
            actualCurrentIndex = 0;
        }

        function populateInfiniteTiles() {
            // Clear existing tiles
            container.innerHTML = '';
            
            // Generate tiles for infinite array
            infiniteProjects.forEach((project, index) => {
                const projectElement = createProjectTile(project, index);
                container.appendChild(projectElement);
            });
        }

        function checkAndResetPosition() {
            // If we're at the beginning buffer, jump to the end of real items
            if (currentIndex < BUFFER_SIZE) {
                currentIndex = totalProjects + (currentIndex);
                container.style.transform = '';
                setTimeout(() => updateProjectPositions(), 10);
            }
            // If we're at the end buffer, jump to the beginning of real items
            else if (currentIndex >= totalProjects + BUFFER_SIZE) {
                currentIndex = BUFFER_SIZE + (currentIndex - totalProjects - BUFFER_SIZE);
                container.style.transform = '';
                setTimeout(() => updateProjectPositions(), 10);
            }
            
            // Update actual current index for dot navigation
            actualCurrentIndex = ((currentIndex - BUFFER_SIZE) + totalProjects) % totalProjects;
        }

        // --- CAROUSEL CONFIGURATION ---
        // Abstract configuration for easy dimension changes
        // To modify project dimensions, simply update the values below:
        const carouselConfig = {
            breakpoints: {
                large: { minWidth: 1200, tileWidth: 650, spacing: 120 },     // Wider tiles for large screens (1200px+)
                medium: { minWidth: 768, tileWidth: 580, spacing: 100 },     // Wider tiles for medium screens (768px-1199px)
                small: { minWidth: 0, tileWidth: 500, spacing: 80 }          // Wider tiles for small screens (<768px)
            },
            // Minimum padding from screen edges to prevent overflow
            minPadding: 40
        };

        // Helper function to get responsive dimensions
        function getResponsiveDimensions(viewportWidth) {
            const { breakpoints, minPadding } = carouselConfig;
            
            let config;
            if (viewportWidth >= breakpoints.large.minWidth) {
                config = breakpoints.large;
            } else if (viewportWidth >= breakpoints.medium.minWidth) {
                config = breakpoints.medium;
            } else {
                config = breakpoints.small;
            }
            
            // Ensure tile width doesn't exceed viewport minus padding
            const maxTileWidth = viewportWidth - (minPadding * 2);
            const tileWidth = Math.min(config.tileWidth, maxTileWidth);
            
            return {
                tileWidth,
                spacing: config.spacing,
                containerWidth: viewportWidth
            };
        }

        // Helper function to update carousel configuration (for easy dimension changes)
        function updateCarouselConfig(newConfig) {
            Object.assign(carouselConfig, newConfig);
            updateProjectPositions(); // Reapply with new dimensions
        }

        // Expose configuration functions globally for debugging/customization
        window.updateCarouselDimensions = updateCarouselConfig;
        window.getCarouselConfig = () => carouselConfig;
        window.getCurrentDimensions = () => getResponsiveDimensions(window.innerWidth);
        
        // Test animation function
        window.testCarouselAnimation = () => {
            console.log('🧪 Testing carousel animation...');
            const originalIndex = currentIndex;
            goNext();
            setTimeout(() => {
                goPrevious();
                setTimeout(() => {
                    currentIndex = originalIndex;
                    updateProjectPositions();
                }, 1000);
            }, 1000);
        };
        
        // Test depth scaling specifically
        window.testDepthScaling = () => {
            const tiles = document.querySelectorAll('.project-tile');
            console.log('🔍 Testing depth scaling manually...');
            
            tiles.forEach((tile, index) => {
                console.log(`Tile ${index}:`, {
                    classes: tile.className,
                    computedTransform: getComputedStyle(tile).transform,
                    computedOpacity: getComputedStyle(tile).opacity,
                    computedFilter: getComputedStyle(tile).filter
                });
            });
        };

        // Debug infinite carousel state
        window.debugInfiniteCarousel = () => {
            console.log('🔄 Infinite Carousel Debug:', {
                currentIndex,
                actualCurrentIndex,
                totalProjects,
                infiniteArrayLength: infiniteProjects.length,
                bufferSize: BUFFER_SIZE,
                infiniteProjects: infiniteProjects.map((p, i) => ({
                    index: i,
                    title: p.title.substring(0, 20) + '...',
                    isClone: p.isClone,
                    originalIndex: p.originalIndex
                }))
            });
        };
        
        // Debug function to log current carousel state
        window.debugCarousel = () => {
            const dims = getResponsiveDimensions(window.innerWidth);
            const highlightedTiles = document.querySelectorAll('.highlight-project-animation');
            const regularTiles = document.querySelectorAll('.project-tile:not(.highlight-project-animation)');
            const allTiles = document.querySelectorAll('.project-tile');
            
            console.log('🎠 Carousel Debug Info:', {
                viewport: window.innerWidth,
                config: carouselConfig,
                currentDimensions: dims,
                currentIndex,
                totalProjects,
                highlightedTilesCount: highlightedTiles.length,
                regularTilesCount: regularTiles.length,
                tileClasses: Array.from(allTiles).map((tile, index) => ({
                    index,
                    classes: tile.className,
                    computedTransform: getComputedStyle(tile).transform,
                    computedOpacity: getComputedStyle(tile).opacity,
                    isHighlighted: tile.classList.contains('highlight-project-animation')
                }))
            });
        };

        // Create navigation dots
        function createDots() {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalProjects; i++) {
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dot.addEventListener('click', () => goToProject(i));
                dotsContainer.appendChild(dot);
            }
        }

        // Update project positions and effects using abstracted configuration
        function updateProjectPositions() {
            const projectTiles = container.querySelectorAll('.project-tile');
            const viewportWidth = window.innerWidth;
            
            // Get responsive dimensions from configuration
            const { tileWidth, spacing, containerWidth } = getResponsiveDimensions(viewportWidth);
            
            // Calculate offset to center the current project in the middle of the viewport
            const centerOffset = (containerWidth - tileWidth) / 2;
            const translateX = centerOffset - (currentIndex * (tileWidth + spacing));
            
            // Apply transformations
            container.style.transform = `translateX(${translateX}px)`;
            container.style.gap = `${spacing}px`;
            
            // Apply responsive dimensions and depth effects to all tiles
            projectTiles.forEach((tile, index) => {
                // Set uniform width for all tiles (both primary and non-primary, highlighted and regular)
                tile.style.width = `${tileWidth}px`;
                tile.style.maxWidth = `${tileWidth}px`; // Override any CSS max-width constraints
                tile.style.minWidth = `${tileWidth}px`; // Ensure consistent width
                tile.style.flexShrink = '0'; // Prevent shrinking
                
                // Apply depth-based classes
                const distance = Math.abs(index - currentIndex);
                tile.classList.remove('center', 'side', 'far');
                
                if (distance === 0) {
                    tile.classList.add('center');
                } else if (distance === 1) {
                    tile.classList.add('side');
                } else {
                    tile.classList.add('far');
                }
            });
            
            updateDots();
        }

        // Update active dot based on actual current index
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === actualCurrentIndex);
            });
        }

        // Go to specific project (for dot navigation)
        function goToProject(index) {
            currentIndex = BUFFER_SIZE + index;
            actualCurrentIndex = index;
            updateProjectPositions();
        }

        // Navigation handlers for infinite carousel
        function goNext() {
            currentIndex++;
            updateProjectPositions();
            // Check if we need to reset position after animation
            setTimeout(checkAndResetPosition, 50);
        }

        function goPrevious() {
            currentIndex--;
            updateProjectPositions();
            // Check if we need to reset position after animation
            setTimeout(checkAndResetPosition, 50);
        }



        // Event listeners
        prevBtn.addEventListener('click', goPrevious);
        nextBtn.addEventListener('click', goNext);

        // Keyboard navigation - only left/right arrows
        document.addEventListener('keydown', (e) => {
            // Only respond to carousel navigation when focused on projects section
            if (!document.querySelector('#projects:hover') && document.activeElement.id !== 'projects') return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    goPrevious();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    goNext();
                    break;
            }
        });

        // Mouse wheel navigation when over projects section
        const projectsSection = document.getElementById('projects');
        projectsSection.addEventListener('wheel', (e) => {
            // Only respond to horizontal scroll
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                if (e.deltaX > 10) {
                    goNext();
                } else if (e.deltaX < -10) {
                    goPrevious();
                }
            }
        });

        // Touch/swipe support on projects section
        let startX = 0;
        let startY = 0;

        projectsSection.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        projectsSection.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Only handle horizontal swipes for navigation
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    goNext();
                } else {
                    goPrevious();
                }
            }
        });

        // Window resize handler to maintain centering and responsiveness
        window.addEventListener('resize', () => {
            // Debounce resize events for better performance
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(() => {
                updateProjectPositions();
            }, 100);
        });

        // Initialize infinite carousel
        createInfiniteArray();
        populateInfiniteTiles();
        createDots();
        
        // Set initial index to highlighted project in infinite array
        const highlightedIndex = projectsData.findIndex(project => project.highlight);
        if (highlightedIndex !== -1) {
            currentIndex = BUFFER_SIZE + highlightedIndex;
            actualCurrentIndex = highlightedIndex;
        }
        
        // Force initial positioning to ensure all tiles get proper dimensions
        updateProjectPositions();
        
        // Force a final dimension update after a brief delay to override any CSS conflicts
        setTimeout(() => {
            updateProjectPositions();
        }, 50);
    }

});
