// --- COMIENZO DEL SCRIPT.JS ---

// Datos para el carrusel fullscreen con imágenes de internet
const menCarouselItems = [
    { 
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80", 
        title: "HOMBRE | ESTILO DEFINITIVO",
        model: "Innovación y Diseño",
        price: "Descubre"
    },
    { 
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
        title: "HOMBRE | PASIÓN DEPORTIVA",
        model: "Máximo Rendimiento",
        price: "Explora Ya"
    },
    { 
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", 
        title: "HOMBRE | AVENTURA URBANA",
        model: "Conquista la Ciudad",
        price: "Ver Colección"
    },
    { 
        image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
        title: "HOMBRE | CLÁSICOS MODERNOS",
        model: "Iconos Atemporales",
        price: "Tu Legado"
    },
    { 
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
        title: "HOMBRE | EDICIÓN LIMITADA",
        model: "Exclusividad Pura",
        price: "Solo Aquí"
    }
];

const womenCarouselItems = [
    { 
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf427de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", 
        title: "MUJER | ELEGANCIA URBANA",
        model: "Sofisticación Diaria",
        price: "Inspírate"
    },
    { 
        image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", 
        title: "MUJER | FUERZA Y ESTILO",
        model: "Diseños que Empoderan",
        price: "Descubre"
    },
    { 
        image: "https://images.unsplash.com/photo-1612290429078-d879a0e7c36d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        title: "MUJER | COMODIDAD ABSOLUTA",
        model: "Para Todos Tus Pasos",
        price: "Ver Ahora"
    },
    { 
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", 
        title: "MUJER | LOOKS ATREVIDOS",
        model: "Marca la Diferencia",
        price: "Tu Impacto"
    },
    { 
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80", 
        title: "MUJER | VERSATILIDAD CHIC",
        model: "De Día y de Noche",
        price: "Colección"
    }
];

// Modelos disponibles por género
const menModels = [
    { id: "airforce1", name: "Air Force 1", image: "imagenes/IMG_4608.jpg" },
    { id: "airJordan1Low", name: "Air Jordan 1 Low", image: "imagenes/796BC0A8-44FC-4C28-9FC5-7D704995CDBA.jpg" },
    { id: "lvTrainer", name: "LV Trainer", image: "imagenes/IMG_4731.jpg" },
    { id: "nb530", name: "New Balance 530", image: "imagenes/IMG_4788.jpg" },
    { id: "newBalance1000", name: "New Balance 1000", image: "imagenes/423AC9BF-63A5-4428-A701-4BD151ADA2A6.jpg" },
    { id: "airMaxPlus", name: "Nike Air Max Plus", image: "imagenes/IMG_4761.jpg" },
    { id: "adi2000", name: "Adidas Adi2000", image: "imagenes/IMG_4590.jpg" },
    { id: "adidasCampus", name: "Adidas Campus", image: "imagenes/EBA6D913-34E9-4E9D-9F54-B21FF6E32AF6.jpg" },
    { id: "adidasOtros", name: "Adidas Varios", image: "imagenes/IMG_4584.jpg" },
    { id: "alexanderMcQueen", name: "Alexander McQueen", image: "imagenes/IMG_4502.jpg" }
];

const womenModels = [
    { id: "airforce1w", name: "Air Force 1", image: "imagenes/IMG_4617.jpg" },
    { id: "airJordan1Low", name: "Air Jordan 1 Low", image: "imagenes/796BC0A8-44FC-4C28-9FC5-7D704995CDBA.jpg" }, 
    { id: "lvTrainer", name: "LV Trainer", image: "imagenes/IMG_4731.jpg" }, 
    { id: "nb530", name: "New Balance 530", image: "imagenes/IMG_4788.jpg" }, 
    { id: "newBalance1000", name: "New Balance 1000", image: "imagenes/423AC9BF-63A5-4428-A701-4BD151ADA2A6.jpg" },
    { id: "airMaxPlus", name: "Nike Air Max Plus", image: "imagenes/IMG_4761.jpg" },
    { id: "adi2000", name: "Adidas Adi2000", image: "imagenes/IMG_4590.jpg" }, 
    { id: "adidasCampus", name: "Adidas Campus", image: "imagenes/EBA6D913-34E9-4E9D-9F54-B21FF6E32AF6.jpg" },
    { id: "adidasOtros", name: "Adidas Varios", image: "imagenes/IMG_4584.jpg" },
    { id: "alexanderMcQueen", name: "Alexander McQueen", image: "imagenes/IMG_4502.jpg" }
];

const af1Desc = "Un ícono del baloncesto que trascendió la cancha para convertirse en una leyenda del estilo urbano. Comodidad, durabilidad y un look atemporal.";
const aj1LowDesc = "Las Air Jordan 1 Low ofrecen un trozo de historia y tradición Jordan con comodidad durante todo el día. Elige tus colores, luego sal a la calle con este modelo icónico.";
const nb530Desc = "Las New Balance 530 recuperan el aspecto de una de nuestras zapatillas de running clásicas. Esta zapatilla informal combina el estilo de diario con la tecnología moderna, como la amortiguación ABZORB en la mediasuela para ofrecer una comodidad superior.";
const nb1000Desc = "Las New Balance 1000 son unas zapatillas de running retro que combinan un diseño nostálgico con comodidad moderna, perfectas para el día a día.";
const airMaxPlusDesc = "Las Nike Air Max Plus, también conocidas como TNs, ofrecen una experiencia Air innovadora con una estabilidad increíble y una amortiguación cómoda. Su diseño icónico inspirado en las puestas de sol y las palmeras sigue siendo un referente de estilo audaz.";
const lvTrainerDesc = "Las zapatillas LV Trainer son un icono de la colección de calzado de Louis Vuitton. Inspiradas en las zapatillas de baloncesto vintage, presentan detalles elaborados y la distintiva firma de la Maison.";
const adi2000Desc = "Las Adidas Adi2000 recuperan la estética audaz del skate de principios de los 2000. Con una silueta robusta y detalles llamativos, ofrecen comodidad y un estilo retro inconfundible.";
const adidasCampusDesc = "Un icono atemporal de la cultura urbana, las Adidas Campus han influido en la moda, la música y el skate. Un diseño sencillo con un estilo inconfundible.";
const adidasOtrosDesc = "Descubre una variedad de zapatillas Adidas con diseños únicos y la calidad característica de la marca.";
const alexanderMcQueenDesc = "Las zapatillas Oversized de Alexander McQueen son un ícono de la moda contemporánea, reconocibles por su suela exagerada y diseño minimalista pero audaz. Un statement de lujo y estilo.";


// Datos completos de productos
const products = {
    airforce1: [ 
        { id: 13, brand: "Nike", name: "Air Force 1 '07 White", price: 110, description: af1Desc, images: ["imagenes/IMG_4608.jpg", "imagenes/IMG_4609.jpg"] }, 
        { id: 14, brand: "Nike", name: "Air Force 1 Low Black", price: 110, description: af1Desc, images: ["imagenes/IMG_4613.jpg", "imagenes/FullSizeRender.jpg"] }, 
        { id: 15, brand: "Nike", name: "Air Force 1 High '07", price: 120, description: af1Desc, images: ["imagenes/IMG_4614.jpg"] }, 
        { id: 129, brand: "Nike", name: "Air Force 1 Low Supreme White", price: 250, description: "Edición especial Air Force 1 Low en colaboración con Supreme.", images: ["imagenes/IMG_4603.jpg"] }
    ],
    airforce1w: [ 
        { id: 53, brand: "Nike", name: "Air Force 1 '07 White Mujer", price: 110, description: af1Desc, images: ["imagenes/IMG_4617.jpg", "imagenes/IMG_4619.jpg"] }, 
        { id: 54, brand: "Nike", name: "Air Force 1 Shadow", price: 120, description: af1Desc, images: ["imagenes/IMG_4620.jpg", "imagenes/IMG_4622.jpg"] }, 
        { id: 55, brand: "Nike", name: "Air Force 1 Pixel SE", price: 125, description: af1Desc, images: ["imagenes/IMG_4626.jpg", "imagenes/IMG_4627.jpg"] },
        { id: 130, brand: "Nike", name: "Air Force 1 Low Supreme White (F)", price: 250, description: "Edición especial Air Force 1 Low en colaboración con Supreme.", images: ["imagenes/IMG_4603.jpg"] },
        { id: 145, brand: "Nike", name: "Air Force 1 Low Black (F)", price: 110, description: af1Desc, images: ["imagenes/FullSizeRender.jpg"] } 
    ],
    nb530: [
        { id: 103, brand: "New Balance", name: "New Balance 530 Triple White", price: 115, description: nb530Desc, images: ["imagenes/IMG_4789.jpg"] },
        { id: 104, brand: "New Balance", name: "New Balance 530 White/Silver/Black", price: 110, description: nb530Desc, images: ["imagenes/IMG_4788.jpg"] },
        { id: 105, brand: "New Balance", name: "New Balance 530 White/Silver", price: 105, description: nb530Desc, images: ["imagenes/IMG_4786.jpg"] },
        { id: 106, brand: "New Balance", name: "New Balance 530 Black", price: 110, description: nb530Desc, images: ["imagenes/IMG_4784.jpg"] },
        { id: 107, brand: "New Balance", name: "New Balance 530 White/Navy/Silver", price: 112, description: nb530Desc, images: ["imagenes/IMG_4781.jpg", "imagenes/IMG_4780.jpg"] },
        { id: 108, brand: "New Balance", name: "New Balance 530 White/Green/Silver", price: 118, description: nb530Desc, images: ["imagenes/IMG_4779.jpg", "imagenes/IMG_4777.jpg", "imagenes/IMG_4776.jpg"] },
        { id: 109, brand: "New Balance", name: "New Balance 530 White/Light Grey", price: 108, description: nb530Desc, images: ["imagenes/IMG_4775.jpg"] },
        { id: 110, brand: "New Balance", name: "New Balance 530 Black/White", price: 112, description: nb530Desc, images: ["imagenes/IMG_4770.jpg"] },
        { id: 111, brand: "New Balance", name: "New Balance 530 White/Silver/Beige", price: 115, description: nb530Desc, images: ["imagenes/IMG_4772.jpg"] },
        { id: 112, brand: "New Balance", name: "New Balance 530 Silver/White", price: 110, description: nb530Desc, images: ["imagenes/IMG_4773.jpg"] }
    ],
    newBalance1000: [
        { id: 142, brand: "New Balance", name: "New Balance 1000 Vintage Silver", price: 130, description: nb1000Desc, images: ["imagenes/423AC9BF-63A5-4428-A701-4BD151ADA2A6.jpg"] }
    ],
    airJordan1Low: [
        { id: 143, brand: "Nike", name: "Air Jordan 1 Low Black/Red/White", price: 120, description: aj1LowDesc, images: ["imagenes/796BC0A8-44FC-4C28-9FC5-7D704995CDBA.jpg"] } 
    ],
    airMaxPlus: [
        { id: 113, brand: "Nike", name: "Nike Air Max Plus White/Black", price: 160, description: airMaxPlusDesc, images: ["imagenes/IMG_4765.jpg"] },
        { id: 114, brand: "Nike", name: "Nike Air Max Plus Pearl White", price: 165, description: airMaxPlusDesc, images: ["imagenes/IMG_4767.jpg", "imagenes/IMG_4768.jpg"] },
        { id: 115, brand: "Nike", name: "Nike Air Max Plus Black", price: 170, description: airMaxPlusDesc, images: ["imagenes/IMG_4759.jpg"] },
        { id: 116, brand: "Nike", name: "Nike Air Max Plus Black/White/Red", price: 175, description: airMaxPlusDesc, images: ["imagenes/IMG_4761.jpg"] },
        { id: 117, brand: "Nike", name: "Nike Air Max Plus White", price: 160, description: airMaxPlusDesc, images: ["imagenes/IMG_4763.jpg"] }
    ],
    lvTrainer: [
        { id: 118, brand: "Louis Vuitton", name: "LV Trainer Green", price: 950, description: lvTrainerDesc, images: ["imagenes/IMG_4742.jpg"] },
        { id: 119, brand: "Louis Vuitton", name: "LV Trainer Red", price: 950, description: lvTrainerDesc, images: ["imagenes/IMG_4744.jpg"] },
        { id: 120, brand: "Louis Vuitton", name: "LV Trainer White/Grey", price: 900, description: lvTrainerDesc, images: ["imagenes/IMG_4729.jpg"] },
        { id: 121, brand: "Louis Vuitton", name: "LV Trainer Black/White", price: 980, description: lvTrainerDesc, images: ["imagenes/IMG_4731.jpg", "imagenes/IMG_4734.jpg"] },
        { id: 122, brand: "Louis Vuitton", name: "LV Trainer Grey/White", price: 920, description: lvTrainerDesc, images: ["imagenes/IMG_4735.jpg", "imagenes/IMG_4737.jpg"] },
        { id: 123, brand: "Louis Vuitton", name: "LV Trainer Blue Monogram Denim", price: 1100, description: lvTrainerDesc, images: ["imagenes/IMG_4738.jpg"] },
        { id: 124, brand: "Louis Vuitton", name: "LV Trainer Brown Monogram", price: 1050, description: lvTrainerDesc, images: ["imagenes/IMG_4740.jpg"] }
    ],
    adi2000: [ 
        { id: 131, brand: "Adidas", name: "Adi2000 Chalk White", price: 120, description: adi2000Desc, images: ["imagenes/IMG_4581.jpg"] },
        { id: 132, brand: "Adidas", name: "Adi2000 Green/White", price: 125, description: adi2000Desc, images: ["imagenes/IMG_4583.jpg"] },
        { id: 133, brand: "Adidas", name: "Adi2000 Black/White", price: 120, description: adi2000Desc, images: ["imagenes/IMG_4590.jpg", "imagenes/IMG_4591.jpg", "imagenes/IMG_4597.jpg"] },
        { id: 134, brand: "Adidas", name: "Adi2000 Light Grey/White", price: 120, description: adi2000Desc, images: ["imagenes/IMG_4594.jpg"] },
        { id: 146, brand: "Adidas", name: "Adi2000 White/Grey/Gum", price: 120, description: adi2000Desc, images: ["imagenes/FullSizeRender(1).jpg"] } 
    ],
    adidasCampus: [
        { id: 144, brand: "Adidas", name: "Adidas Campus Black/White", price: 90, description: adidasCampusDesc, images: ["imagenes/EBA6D913-34E9-4E9D-9F54-B21FF6E32AF6.jpg"] }
    ],
    adidasOtros: [ 
        { id: 135, brand: "Adidas", name: "Adidas FV4759 Multicolor", price: 90, description: adidasOtrosDesc, images: ["imagenes/IMG_4584.jpg"] },
        { id: 136, brand: "Adidas", name: "Adidas Beta 3 Dark Grey", price: 95, description: adidasOtrosDesc, images: ["imagenes/IMG_4596.jpg"] }
    ],
    alexanderMcQueen: [
        { id: 147, brand: "Alexander McQueen", name: "Oversized Sneaker Black", price: 590, description: alexanderMcQueenDesc, images: ["imagenes/IMG_4495.jpg", "imagenes/IMG_4496.jpg", "imagenes/IMG_4502.jpg", "imagenes/IMG_4506.jpg"] }, 
        { id: 148, brand: "Alexander McQueen", name: "Oversized Sneaker White/Black Heel", price: 590, description: alexanderMcQueenDesc, images: ["imagenes/IMG_4508.jpg", "imagenes/IMG_4509.jpg"] },
        { id: 149, brand: "Alexander McQueen", name: "Oversized Sneaker White/Grey Heel", price: 620, description: alexanderMcQueenDesc, images: ["imagenes/IMG_4511.jpg", "imagenes/IMG_4512.jpg"] },
        { id: 150, brand: "Alexander McQueen", name: "Oversized Sneaker White/Dark Red Heel", price: 620, description: alexanderMcQueenDesc, images: ["imagenes/IMG_4513.jpg"] },
        { id: 151, brand: "Alexander McQueen", name: "Oversized Sneaker All White", price: 570, description: alexanderMcQueenDesc, images: ["imagenes/IMG_4498.jpg", "imagenes/IMG_4516.jpg", "imagenes/IMG_4517.jpg", "imagenes/IMG_4520.jpg"] } 
    ]
};

let currentGender = 'men';
let currentModel = menModels[0]?.id || ''; 
let currentPage = 1;
let currentSlide = 0;
let autoSlideInterval;
const itemsPerPage = 9; 

// Para el popup de producto
let currentPopupImages = [];
let currentPopupImageIndex = 0;

// Para el carrusel de modelos
let modelSlideElement;
let currentModelTransformPosition = 0; 
let originalModelData = [];       
let modelItemFullWidth = 0;       
let numClonesStart = 0; 
let isModelCarouselTransitioning = false; 
const CLONE_COUNT = 3; 

// Para Lazy Loading con IntersectionObserver
let imageObserver;

function setupImageObserver() {
    const options = {
        root: null, 
        rootMargin: '0px 0px 200px 0px', 
        threshold: 0.01 
    };

    imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded'); 
                }
                observer.unobserve(img); 
            }
        });
    }, options);
}


function createCarouselSlides() {
    const carouselContainer = document.getElementById('fullscreenCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    
    carouselContainer.querySelectorAll('.carousel-slide').forEach(slide => slide.remove());
    if (dotsContainer) dotsContainer.innerHTML = ''; // Verificar si existe
    
    const slidesData = currentGender === 'men' ? menCarouselItems : womenCarouselItems;
    
    slidesData.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'carousel-slide';
        slideElement.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')`; // Ajustar opacidad del overlay
        slideElement.innerHTML = `
            <div class="carousel-content">
                <h3 class="carousel-title">${slide.title}</h3>
                <div class="carousel-model">${slide.model}</div>
                <div class="carousel-price">${slide.price}</div>
            </div>
        `;
        const nextButton = carouselContainer.querySelector('.carousel-next');
        if (nextButton) {
            carouselContainer.insertBefore(slideElement, nextButton);
        } else {
             carouselContainer.appendChild(slideElement); 
        }
        
        if (dotsContainer) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.onclick = () => goToSlide(index);
            dotsContainer.appendChild(dot);
        }
    });
    
    const allSlides = document.querySelectorAll('#fullscreenCarousel .carousel-slide');
    const allDots = document.querySelectorAll('#carouselDots .carousel-dot');
    
    if (allSlides.length > 0) {
        allSlides[0].classList.add('active');
        if (allDots.length > 0 && allDots[0]) allDots[0].classList.add('active');
    }
    
    startAutoSlide();
}

function createModelsCarousel() {
    modelSlideElement = document.getElementById('modelsSlide');
    const modelsContainer = document.querySelector('.models-container'); 
    if (!modelSlideElement || !modelSlideElement.parentElement || !modelsContainer) return;

    const currentModelsList = currentGender === 'men' ? menModels : womenModels;
    originalModelData = [...currentModelsList]; 

    const modelsTitle = document.getElementById('modelsTitle');
    if (modelsTitle) {
        modelsTitle.textContent = `MODELOS DESTACADOS - ${currentGender === 'men' ? 'HOMBRE' : 'MUJER'}`;
    }

    modelSlideElement.innerHTML = ''; 
    const modelPrevNav = modelsContainer.querySelector('.model-nav.model-prev');
    const modelNextNav = modelsContainer.querySelector('.model-nav.model-next');

    if (originalModelData.length === 0) {
        modelSlideElement.innerHTML = '<p style="text-align:center; color: var(--text-subtle-color); width:100%;">No hay modelos para mostrar.</p>';
        if(modelPrevNav) modelPrevNav.style.display = 'none';
        if(modelNextNav) modelNextNav.style.display = 'none';
        modelItemFullWidth = 0; 
        return;
    }
    
    const tempItem = document.createElement('div');
    tempItem.className = 'model-item';
    tempItem.style.visibility = 'hidden'; 
    tempItem.style.position = 'absolute'; 
    tempItem.innerHTML = `<div class="model-image"><img src="${originalModelData[0].image}" alt=""></div><div class="model-name">Test</div>`;
    modelSlideElement.appendChild(tempItem); 
    const itemStyle = window.getComputedStyle(tempItem);
    const itemWidth = tempItem.offsetWidth;
    const marginLeft = parseFloat(itemStyle.marginLeft) || 0;
    const marginRight = parseFloat(itemStyle.marginRight) || 0;
    const gapStyle = window.getComputedStyle(modelSlideElement).gap;
    const gap = gapStyle === 'normal' || !gapStyle || gapStyle === '0px' ? 15 : parseInt(gapStyle);
    
    modelItemFullWidth = itemWidth + marginLeft + marginRight + gap;
    if (originalModelData.length === 1) {
        modelItemFullWidth = itemWidth + marginLeft + marginRight;
    }
    modelSlideElement.removeChild(tempItem); 
    modelSlideElement.innerHTML = ''; 

    const containerWidth = modelsContainer.clientWidth;
    const visibleItemsRoughly = Math.floor(containerWidth / modelItemFullWidth);
    effectiveCloneCount = originalModelData.length > 1 ? Math.min(originalModelData.length, Math.max(1, visibleItemsRoughly + 1)) : 0;

    let itemsToRender = [];
    numClonesStart = 0;
    if (originalModelData.length > 1 && effectiveCloneCount > 0 ) { 
        numClonesStart = effectiveCloneCount;
        for (let i = 0; i < numClonesStart; i++) {
            itemsToRender.push(originalModelData[originalModelData.length - numClonesStart + i]);
        }
    }
    
    itemsToRender.push(...originalModelData); 

    if (originalModelData.length > 1 && effectiveCloneCount > 0) {
        for (let i = 0; i < effectiveCloneCount; i++) {
            itemsToRender.push(originalModelData[i]);
        }
    }
        
    itemsToRender.forEach((modelData) => {
        const modelItem = document.createElement('div');
        modelItem.className = 'model-item';
        if (modelData.id === currentModel) {
            modelItem.classList.add('active');
        }
        
        modelItem.dataset.modelId = modelData.id;
        modelItem.onclick = () => selectModel(modelData.id);
        modelItem.innerHTML = `
            <div class="model-image">
                <img data-src="${modelData.image}" alt="${modelData.name}" class="lazy-image">
            </div>
            <div class="model-name">${modelData.name}</div>
        `;
        modelSlideElement.appendChild(modelItem);
        if (imageObserver) { 
            const imgElement = modelItem.querySelector('.lazy-image');
            if(imgElement) imageObserver.observe(imgElement);
        }
    });
    
    const canScroll = originalModelData.length > 0 && modelItemFullWidth * originalModelData.length > containerWidth;
    if(modelPrevNav) modelPrevNav.style.display = canScroll ? 'flex' : 'none';
    if(modelNextNav) modelNextNav.style.display = canScroll ? 'flex' : 'none';

    currentModelTransformPosition = numClonesStart * modelItemFullWidth;
    updateModelsCarouselPosition(true); 
}

function updateModelsCarouselPosition(instant = false) {
    if (modelSlideElement) {
        if (instant) {
            isModelCarouselTransitioning = true; 
            modelSlideElement.style.transition = 'none';
        }
        modelSlideElement.style.transform = `translateX(-${currentModelTransformPosition}px)`;
        if (instant) {
            void modelSlideElement.offsetWidth;
            modelSlideElement.style.transition = 'transform 0.4s ease-in-out';
            setTimeout(() => { isModelCarouselTransitioning = false; }, 50); 
        }
    }
}

function handleModelCarouselLooping() {
    if (isModelCarouselTransitioning || !modelSlideElement || originalModelData.length === 0 || modelItemFullWidth === 0 || numClonesStart === 0 ) { 
        isModelCarouselTransitioning = false; 
        return; 
    }

    const originalContentWidth = originalModelData.length * modelItemFullWidth;
    const startOfOriginalsVisualPos = numClonesStart * modelItemFullWidth;
    const firstEndCloneVisualPos = (numClonesStart + originalModelData.length) * modelItemFullWidth;

    let jumped = false;
    if (currentModelTransformPosition < startOfOriginalsVisualPos) {
        currentModelTransformPosition += originalContentWidth; 
        updateModelsCarouselPosition(true); 
        jumped = true;
    } 
    else if (currentModelTransformPosition >= firstEndCloneVisualPos) {
        currentModelTransformPosition -= originalContentWidth; 
        updateModelsCarouselPosition(true);
        jumped = true;
    }
    
    if (!jumped) { 
        isModelCarouselTransitioning = false;
    }
}


function prevModel() {
    if (!modelSlideElement || originalModelData.length === 0 || modelItemFullWidth === 0 || isModelCarouselTransitioning) return;
    
    const container = modelSlideElement.parentElement;
    if (!container || (originalModelData.length * modelItemFullWidth <= container.clientWidth && numClonesStart === 0)) {
      isModelCarouselTransitioning = false; 
      return; 
    }
    
    isModelCarouselTransitioning = true; 
    currentModelTransformPosition -= modelItemFullWidth;
    updateModelsCarouselPosition();
    
    if (numClonesStart > 0) { 
        modelSlideElement.removeEventListener('transitionend', prevModelTransitionEndHandler); 
        modelSlideElement.addEventListener('transitionend', prevModelTransitionEndHandler, { once: true });
    } else {
        setTimeout(() => { isModelCarouselTransitioning = false; }, 400); 
    }
}
function prevModelTransitionEndHandler() { handleModelCarouselLooping(); }


function nextModel() {
    if (!modelSlideElement || originalModelData.length === 0 || modelItemFullWidth === 0 || isModelCarouselTransitioning) return;

    const container = modelSlideElement.parentElement;
    if (!container || (originalModelData.length * modelItemFullWidth <= container.clientWidth && numClonesStart === 0)) {
      isModelCarouselTransitioning = false;
      return; 
    }

    isModelCarouselTransitioning = true;
    currentModelTransformPosition += modelItemFullWidth;
    updateModelsCarouselPosition();

    if (numClonesStart > 0) {
        modelSlideElement.removeEventListener('transitionend', nextModelTransitionEndHandler); 
        modelSlideElement.addEventListener('transitionend', nextModelTransitionEndHandler, { once: true });
    } else {
        setTimeout(() => { isModelCarouselTransitioning = false; }, 400);
    }
}
function nextModelTransitionEndHandler() { handleModelCarouselLooping(); }


function selectModel(modelId) {
    currentModel = modelId; 
    currentPage = 1;

    if (modelSlideElement) {
        const allModelItemsInCarousel = modelSlideElement.querySelectorAll('.model-item');
        allModelItemsInCarousel.forEach(item => {
            item.classList.toggle('active', item.dataset.modelId === modelId);
        });
    }
    renderShoes();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('#fullscreenCarousel .carousel-slide');
    const dots = document.querySelectorAll('#carouselDots .carousel-dot');
    
    if (slides.length === 0) return;

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    
    slides.forEach(slide => slide.classList.remove('active'));
    if (dots.length > 0) dots.forEach(dot => dot.classList.remove('active')); // Verificar si hay dots
    
    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    if (dots.length > 0 && dots[currentSlide]) dots[currentSlide].classList.add('active'); // Verificar si hay dots
    
    startAutoSlide(); 
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function filterGender(gender) {
    currentGender = gender;
    const currentGenderModels = currentGender === 'men' ? menModels : womenModels;
    currentModel = currentGenderModels[0]?.id || ''; 
    
    currentPage = 1;
    currentSlide = 0; 
    
    document.querySelectorAll('.gender-filter button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(gender === 'men' ? 'masculinas' : 'femeninas'));
    });
    
    applyConditionalLightThemeBackground(); // Aplicar fondo condicional

    createCarouselSlides(); 
    createModelsCarousel(); 
    if(currentModel) {
      selectModel(currentModel); 
    } else { 
      const catalog = document.getElementById('shoeCatalog');
      if (catalog) catalog.innerHTML = '<p style="text-align:center; grid-column: 1 / -1; padding: 20px;">No hay modelos disponibles para esta categoría.</p>';
      updatePagination(); 
    }
}

function renderShoes() {
    const catalog = document.getElementById('shoeCatalog');
    if (!catalog) return;
    catalog.querySelectorAll('.lazy-image').forEach(img => {
        if(imageObserver && img.hasAttribute('data-src')) imageObserver.unobserve(img);
    });
    catalog.innerHTML = '';
    
    const shoes = products[currentModel] || [];
    
    if (shoes.length === 0 && currentModel !== '') {
        catalog.innerHTML = `<p style="text-align:center; grid-column: 1 / -1; padding: 20px;">No hay zapatillas disponibles para el modelo seleccionado.</p>`;
        updatePagination(); 
        return;
    }
    if (currentModel === '' || shoes.length === 0) { 
         catalog.innerHTML = `<p style="text-align:center; grid-column: 1 / -1; padding: 20px;">Selecciona un modelo o no hay zapatillas para esta categoría.</p>`;
        updatePagination();
        return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, shoes.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const shoe = shoes[i];
        const mainShoeImage = (shoe.images && shoe.images.length > 0) ? shoe.images[0] : 'imagenes/placeholder.png'; 
        const card = document.createElement('div');
        card.className = 'shoe-card';
        card.innerHTML = `
            <div class="shoe-image" onclick="openProductPopup(${shoe.id})">
                <img data-src="${mainShoeImage}" alt="${shoe.name}" class="lazy-image">
            </div>
            <div class="shoe-info">
                <div class="shoe-brand">${shoe.brand}</div>
                <div class="shoe-name">${shoe.name}</div>
                <div class="shoe-price">$${shoe.price.toFixed(2)}</div>
                <button class="shoe-button" onclick="openProductPopup(${shoe.id})">VER VIDEO</button>
            </div>
        `;
        catalog.appendChild(card);
        const lazyImageElement = card.querySelector('.lazy-image');
        if (lazyImageElement && imageObserver) { 
            imageObserver.observe(lazyImageElement);
        }
    }
    updatePagination(); 
}

function updatePagination() {
    const shoesForPagination = products[currentModel] || []; 
    const totalPages = Math.ceil(shoesForPagination.length / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;

    const prevButton = paginationContainer.querySelector('button:first-child');
    const nextButton = paginationContainer.querySelector('button:last-child');
    
    const pageNumberButtons = paginationContainer.querySelectorAll('button:not(:first-child):not(:last-child)');
    pageNumberButtons.forEach(btn => btn.remove());
        
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.classList.toggle('active', i === currentPage);
        pageButton.onclick = () => {
            currentPage = i;
            renderShoes();
        };
        if (nextButton) {
            paginationContainer.insertBefore(pageButton, nextButton);
        } else if (prevButton) { 
             paginationContainer.appendChild(pageButton);
        } else { 
            paginationContainer.appendChild(pageButton);
        }
    }
    
    if (prevButton) prevButton.disabled = currentPage === 1 || totalPages === 0;
    if (nextButton) nextButton.disabled = currentPage === totalPages || totalPages === 0;
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderShoes();
    }
}

function nextPage() {
    const shoes = products[currentModel] || [];
    const totalPages = Math.ceil(shoes.length / itemsPerPage);
    
    if (currentPage < totalPages) {
        currentPage++;
        renderShoes();
    }
}

function openProductPopup(productId) {
    let selectedProduct = null;
    for (const modelKey in products) {
        if (products[modelKey]) { 
            const found = products[modelKey].find(p => p.id === productId);
            if (found) {
                selectedProduct = found;
                break;
            }
        }
    }
    
    if (!selectedProduct || !selectedProduct.images || selectedProduct.images.length === 0) {
        console.error("Producto no encontrado o sin imágenes:", productId);
        return;
    }
    
    currentPopupImages = selectedProduct.images; 
    currentPopupImageIndex = 0; 

    const popupBody = document.getElementById('popupBody');
    if(!popupBody) return;
    
    const navArrowsHTML = currentPopupImages.length > 1 ? `
        <button class="popup-image-nav popup-image-prev" onclick="showPrevPopupImage()">❮</button>
        <button class="popup-image-nav popup-image-next" onclick="showNextPopupImage()">❯</button>
    ` : '';

    popupBody.innerHTML = `
        <div class="popup-images">
            <div class="main-image-container">
                ${navArrowsHTML}
                <img src="${currentPopupImages[0]}" alt="${selectedProduct.name}" id="popupMainImage">
            </div>
            <div class="thumbnails" id="popupThumbnailsContainer">
                ${generateThumbnailsHTML(selectedProduct)}
            </div>
        </div>
        <div class="popup-details">
            <div class="popup-brand">${selectedProduct.brand}</div>
            <div class="popup-name">${selectedProduct.name}</div>
            <div class="popup-price">$${selectedProduct.price.toFixed(2)}</div>
            <div class="popup-description">${selectedProduct.description || 'Zapatillas de alta calidad con diseño premium.'}</div>
            <button class="popup-button">VER VIDEO</button>
        </div>
    `;
    
    displayPopupImageAtIndex(currentPopupImageIndex); 

    const productPopupElement = document.getElementById('productPopup');
    if (productPopupElement) productPopupElement.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
}

function generateThumbnailsHTML(product) {
    let thumbnailsHTML = '';
    const maxThumbnails = 4; 

    if (product.images && product.images.length > 0) {
        for (let i = 0; i < maxThumbnails; i++) {
            if (i < product.images.length) {
                thumbnailsHTML += `
                    <div class="thumbnail" data-index="${i}" onclick="displayPopupImageAtIndex(${i}, this)">
                        <img src="${product.images[i]}" alt="${product.name} vista ${i + 1}">
                    </div>
                `;
            } else {
                let placeholderText = '';
                if (i === 1) placeholderText = 'Aquí va la 2da imagen';
                else if (i === 2) placeholderText = 'Aquí va la 3ra imagen';
                else if (i === 3) placeholderText = 'Aquí va la 4ta imagen';
                
                thumbnailsHTML += `
                    <div class="thumbnail placeholder">
                       ${placeholderText}
                    </div>
                `;
            }
        }
    } else {
        thumbnailsHTML += '<div class="thumbnail placeholder">No disponible</div>'; 
        for (let i = 1; i < maxThumbnails; i++) { 
            let placeholderText = '';
            if (i === 1) placeholderText = 'Aquí va la 2da imagen';
            else if (i === 2) placeholderText = 'Aquí va la 3ra imagen';
            else if (i === 3) placeholderText = 'Aquí va la 4ta imagen';
            thumbnailsHTML += `<div class="thumbnail placeholder">${placeholderText}</div>`;
        }
    }
    return thumbnailsHTML;
}

function displayPopupImageAtIndex(index, clickedThumbnailElement = null) {
    if (!currentPopupImages || currentPopupImages.length === 0) return;

    currentPopupImageIndex = index;
    const mainImage = document.getElementById('popupMainImage');
    if (mainImage) {
        mainImage.src = currentPopupImages[currentPopupImageIndex]; 
    }

    const thumbnailsContainer = document.getElementById('popupThumbnailsContainer');
    if (thumbnailsContainer) {
        const allThumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
        allThumbnails.forEach(thumb => thumb.classList.remove('active'));

        const targetThumbnail = clickedThumbnailElement || thumbnailsContainer.querySelector(`.thumbnail[data-index="${currentPopupImageIndex}"]`);
        if (targetThumbnail && !targetThumbnail.classList.contains('placeholder')) {
            targetThumbnail.classList.add('active');
        }
    }
}

function showPrevPopupImage() {
    if (!currentPopupImages || currentPopupImages.length <= 1) return; 
    currentPopupImageIndex--;
    if (currentPopupImageIndex < 0) {
        currentPopupImageIndex = currentPopupImages.length - 1; 
    }
    displayPopupImageAtIndex(currentPopupImageIndex);
}

function showNextPopupImage() {
    if (!currentPopupImages || currentPopupImages.length <= 1) return; 
    currentPopupImageIndex++;
    if (currentPopupImageIndex >= currentPopupImages.length) {
        currentPopupImageIndex = 0; 
    }
    displayPopupImageAtIndex(currentPopupImageIndex);
}


function closePopup() {
    const productPopupElement = document.getElementById('productPopup');
    if (productPopupElement) productPopupElement.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    currentPopupImages = []; 
    currentPopupImageIndex = 0;
}

// --- LÓGICA DEL TEMA Y BODY BACKGROUND CONDICIONAL ---
const bodyElement = document.body;
const themeCheckbox = document.getElementById('themeCheckbox'); 

function applyConditionalLightThemeBackground() {
    if (bodyElement.classList.contains('light-theme')) {
        // Obtener el color de la variable CSS directamente
        const menBg = getComputedStyle(document.documentElement).getPropertyValue('--body-bg-light-men').trim();
        const womenBg = getComputedStyle(document.documentElement).getPropertyValue('--body-bg-light-women').trim();

        if (currentGender === 'men') {
            bodyElement.style.backgroundColor = menBg || '#E9E9E9'; // Fallback
        } else if (currentGender === 'women') {
            bodyElement.style.backgroundColor = womenBg || '#E0F2F7'; // Fallback
        }
    } else {
        // En modo oscuro, el body toma --bg-page de :root
        const darkBg = getComputedStyle(document.documentElement).getPropertyValue('--bg-page').trim();
        bodyElement.style.backgroundColor = darkBg || '#121212'; // Fallback
    }
}

function applyTheme(isLight) {
    if (isLight) {
        bodyElement.classList.add('light-theme');
    } else {
        bodyElement.classList.remove('light-theme');
    }
    applyConditionalLightThemeBackground(); // Aplicar fondo condicional después de cambiar clase
    if(themeCheckbox) themeCheckbox.checked = isLight;
}
// --- FIN LÓGICA DEL TEMA ---


document.addEventListener('DOMContentLoaded', () => {
    setupImageObserver(); 

    // Configuración inicial del tema y checkbox
    const savedTheme = localStorage.getItem('theme');
    let isLightModeInitially = false; 
    if (savedTheme) {
        isLightModeInitially = (savedTheme === 'light');
    } else { 
        localStorage.setItem('theme', 'dark'); 
    }
    // No es necesario llamar a applyTheme aquí, ya que filterGender lo hará después de establecer currentGender
    if(themeCheckbox) themeCheckbox.checked = isLightModeInitially;


    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', function() {
            if (this.checked) {
                applyTheme(true);
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme(false);
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Establecer currentGender antes de cualquier lógica que dependa de él
    currentGender = 'men'; // O el género por defecto que prefieras
    // Aplicar el tema y el fondo condicional basado en el género inicial y el tema guardado/por defecto
    applyTheme(isLightModeInitially); // Esto ahora también llamará a applyConditionalLightThemeBackground

    let initialModels = currentGender === 'men' ? menModels : womenModels;
    currentModel = initialModels[0]?.id || ''; 

    document.querySelectorAll('.gender-filter button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(currentGender === 'men' ? 'masculinas' : 'femeninas'));
    });

    createCarouselSlides();
    createModelsCarousel(); 
    if(currentModel) { 
        selectModel(currentModel); 
    }


    const fullscreenCarousel = document.getElementById('fullscreenCarousel');
    if (fullscreenCarousel) {
        fullscreenCarousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        fullscreenCarousel.addEventListener('mouseleave', () => startAutoSlide());
    }

    window.addEventListener('resize', () => {
        if (document.getElementById('modelsSlide')) {
            createModelsCarousel(); 
        }
    });

    const productPopup = document.getElementById('productPopup');
    if (productPopup) {
        productPopup.addEventListener('click', function(e) {
            if (e.target === this) { 
                closePopup();
            }
        });
    }
    const paginationElement = document.querySelector('.pagination');
    if (paginationElement) {
        const prevPageButton = paginationElement.querySelector('button:first-child');
        const nextPageButton = paginationElement.querySelector('button:last-child');
        
        if(prevPageButton && !prevPageButton.onclick) prevPageButton.onclick = prevPage;
        if(nextPageButton && !nextPageButton.onclick) nextPageButton.onclick = nextPage;
    }

    const modelPrevButton = document.querySelector('.model-nav.model-prev');
    const modelNextButton = document.querySelector('.model-nav.model-next');
    if(modelPrevButton) modelPrevButton.onclick = prevModel; 
    if(modelNextButton) modelNextButton.onclick = nextModel; 

    const carouselPrevButton = document.querySelector('.carousel-nav.carousel-prev');
    const carouselNextButton = document.querySelector('.carousel-nav.carousel-next');
    if(carouselPrevButton && !carouselPrevButton.onclick) carouselPrevButton.onclick = prevSlide;
    if(carouselNextButton && !carouselNextButton.onclick) carouselNextButton.onclick = nextSlide;
});