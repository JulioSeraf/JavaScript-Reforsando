export function Post(props){
    let {title,content,_embedded,date} = props,
    dateFormat = new Date(date).toLocaleString(),
    img = _embedded["wp:featuredmedia"]?_embedded["wp:featuredmedia"][0].source_url:"app/assets/favicon.png";
    return  `
    <section class="post-page">
        <img src="${img}" alt="${title.rendered}">
        <aside>
        <h2>${title.rendered}</h2>
        <time datetime="${date}">${dateFormat}</time>
        </aside>
        <hr>
        <article>${content.rendered
        }</article>
    </section>`;
}