export function Post(props){
    let {title,content} = props;
    return `
    <section class="post-page">
        <img src="" alt="">
        <aside>
        <h2>${title.rendered}</h2>
        <time datetime=""></time>
        </aside>
        <hr>
        <article>${content.rendered
        }</article>
    </section>`;
}