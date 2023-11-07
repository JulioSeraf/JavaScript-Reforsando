export function PostCard(props){
    let {title,id,_embedded,date,slug } = props,
        dateFormat = new Date(date).toLocaleString(),
        img = _embedded["wp:featuredmedia"]?_embedded["wp:featuredmedia"][0].source_url:"app/assets/favicon.png";

    document.addEventListener('click',(e) => {
        if(!e.target.matches(".post-card a")) return false;
        localStorage.setItem("wpPostId",e.target.dataset.id)    
    });

    return `
        <article class="post-card">
            <img src="${img}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}" target="_black" rel="noopener">Ver Publicación</a>
            </p>
        </article>
    `;
};