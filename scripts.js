const items = [
    {
        id: 1,
        imagem: "img/weg.svg",
        nome: "WEG",
        ramo: "Bens de Capital",
        descricao: "Líder global em equipamentos elétricos e automação.",
        fundacao: "1961",
        sede: "Jaraguá do Sul - SC"
    },
    {
        id: 2,
        imagem: "img/petrobras.svg",
        nome: "Petrobras",
        ramo: "Petróleo e Energia",
        descricao: "Uma das maiores empresas de energia do mundo.",
        fundacao: "1953",
        sede: "Rio de Janeiro - RJ"
    },
    {
        id: 3,
        imagem: "img/o-boticario.svg",
        nome: "O Boticário",
        ramo: "Perfumaria e Cosméticos",
        descricao: "Marca brasileira reconhecida pela sustentabilidade e inovação.",
        fundacao: "1977",
        sede: "Curitiba - PR"
    },
    {
        id: 4,
        imagem: "img/renner.svg",
        nome: "Renner",
        ramo: "Moda",
        descricao: "Referência nacional em varejo de moda.",
        fundacao: "1922",
        sede: "Porto Alegre - RS"
    },
    {
        id: 5,
        imagem: "img/ambev.svg",
        nome: "Ambev",
        ramo: "Cervejaria",
        descricao: "Uma das maiores produtoras de bebidas do mundo.",
        fundacao: "1999",
        sede: "São Paulo - SP"
    },
];

// CARROSSEL DINÂMICO 
const carouselContainer = document.getElementById("carouselContainer");
if (carouselContainer) {
    items.slice(0, 5).forEach((item, index) => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-item");
        if (index === 0) slide.classList.add("active");

        slide.innerHTML = `
            <a href="detalhes.html?id=${item.id}" class="carousel-card-link">
                <div class="carousel-card">
                    <img src="${item.imagem}" class="carousel-img" alt="${item.nome}">
                    <div class="carousel-caption">
                        <h5>${item.nome}</h5>
                        <p>${item.descricao}</p>
                    </div>
                </div>
            </a>
        `;
        carouselContainer.appendChild(slide);
    });
}

// PÁGINA INICIAL/CARDS
const container = document.getElementById("cardsContainer");
if (container) {
    items.forEach(item => {
        const card = document.createElement("a");
        card.href = `detalhes.html?id=${item.id}`;
        card.classList.add("card-link");
        card.innerHTML = `
            <article class="card">
                <img class="card-img" src="${item.imagem}" alt="Logo ${item.nome}">
                <div class="card-body">
                    <h3 class="card-title">${item.nome}</h3>
                    <p class="card-desc">${item.descricao}</p>
                </div>
            </article>
        `;
        container.appendChild(card);
    });
}

// PÁGINA DE DETALHES
const params = new URLSearchParams(window.location.search);
const itemId = params.get("id");

if (itemId) {
    const item = items.find(i => i.id === Number(itemId));
    if (item) {
        const detalhesSection = document.getElementById("detalhes-item");
        detalhesSection.innerHTML = `
            <div class="detalhes-card">
                <img src="${item.imagem}" alt="Logo ${item.nome}" class="detalhes-imagem">
                <div class="detalhes-info">
                    <h2>${item.nome}</h2>
                    <p><strong>Ramo:</strong> ${item.ramo}</p>
                    <p><strong>Fundação:</strong> ${item.fundacao}</p>
                    <p><strong>Sede:</strong> ${item.sede}</p>
                    <p><strong>Descrição:</strong> ${item.descricao}</p>
                </div>
            </div>
        `;

        const fotosContainer = document.getElementById("fotosContainer");
        for (let i = 1; i <= 4; i++) {
            const img = document.createElement("img");
            img.src = item.imagem;
            img.alt = `${item.nome} - imagem ${i}`;
            fotosContainer.appendChild(img);
        }
    } else {
        document.getElementById("detalhes-item").innerHTML = `<p>Item não encontrado.</p>`;
    }
}


