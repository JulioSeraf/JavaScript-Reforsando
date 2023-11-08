export function SearchCard(props){
    let {id,title,_embedded} = props,
            slug = _embedded.self[0].slug;
    return`
        <article class="post-card">
            <h2>${title}</h2>
            <p>
                <a href="#/${slug}" date-id="${id}">Ver Publicación...</a>"
            </p>
        </article>
    `;
};