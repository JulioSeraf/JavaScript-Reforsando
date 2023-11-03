export function PostCard(props){
    let {title,_embedded,date,slug } = props,
        dateFormat = new Date(date).toLocaleString(),
        img = _embedded["wp:featuredmedia"]?_embedded["wp:featuredmedia"][0].source_url:"app/assets/favicon.png";
    return `
        <article class="post-card">
            <img src="${img}" alt="${title}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" target="_black" rel="noopener">Ver Publicación</a>
            </p>
        </article>
    `;
};