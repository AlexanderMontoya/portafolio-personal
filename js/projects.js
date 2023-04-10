let projects=[
    {
        id: 1,
        name_project: "PokeMontoya",
        description_project: "Juego de memorizacion usando la API de Pokemon, A completar la pokedex!",
        image_project: "pokemontoyav2.jpg",
        habilities: [],
        type_proyect: "personal",
        url_web: "https://alexandermontoya.github.io/pokemontoya/",
        url_repository: "https://github.com/AlexanderMontoya/pokemontoya",
    },
    {
        id: 2,
        name_project: "OnMarket",
        description_project: "Tienda Virtual de productos para el hogar (Laravel)",
        image_project: "OnMarket.jpg",
        habilities: [],
        type_proyect: "instituto",
        url_web: "#",
        url_repository: "https://github.com/AlexanderMontoya/onmarket",
    },
    {
        id: 3,
        name_project: "Slider ManGama - Chan",
        description_project: "Slider usando la API de ManGama-Chan",
        image_project: "Slider-ManGama-Chan.jpg",
        habilities: [],
        type_proyect: "personal",
        url_web: "https://alexandermontoya.github.io/slider-mangamachan/",
        url_repository: "https://github.com/AlexanderMontoya/slider-mangamachan",
    },
    {
        id: 4,
        name_project: "Advice Generator",
        description_project: "Mi primer aplicacion con React, un generador de consejos, añade los que te gusten a tus favoritos",
        image_project: "Advice-Generator.jpg",
        habilities: [],
        type_proyect: "personal",
        url_web: "https://alexandermontoya.github.io/advice-generator/",
        url_repository: "https://github.com/AlexanderMontoya/advice-generator",
    },
    {
        id: 5,
        name_project: "ManGama - Cham",
        description_project: "Aplicacion para leer manga",
        image_project: "mangamachan.jpg",
        habilities: [],
        type_proyect: "instituto",
        url_web: "https://alexandermontoya.github.io/mangama-chan/",
        url_repository: "https://github.com/AlexanderMontoya/Proyecto-Compartido-ManGamachan",
    }
]

const botones_project= document.querySelectorAll('.project__btn');
botones_project.forEach(( cadaBtn, i)=>{
    botones_project[i].addEventListener('click',()=>{
        botones_project.forEach((cadaBtn, o)=>{
            botones_project[o].classList.remove('project__btn--active')
            botones_project[o].disabled=false;
        })
        botones_project[i].classList.add('project__btn--active');
        botones_project[i].disabled=true;
    })
})
        
function viewProjects(type_project){
    const div_projects=document.getElementById('projects__grid');
    let container_projects="";
    projects.forEach(element => {
        if(element.type_proyect==type_project){
            container_projects+=`
            <article class="projects__item">
                <img src="img/${element.image_project}" alt="${element.name_project}" class="projects__picture">
                <div class="projects__details">
                    <h3 class="projects__title">${element.name_project}</h3>
                    <p class="projects__paragraph">${element.description_project}</p>
                    <a class="projects__links${element.url_web!="#"?'':' none'}" href="${element.url_web}"><i class="fa-solid fa-earth-americas"></i> Sitio Web</a>
                    <a class="projects__links${element.url_repository!="#"?'':' none'}" href="${element.url_repository}"><i class="fa-brands fa-github"></i> Repositorio</a>
                </div>
            </article>`;    
        }
        
    });
    div_projects.innerHTML=container_projects;
}

viewProjects('personal');