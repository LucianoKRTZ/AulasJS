// var estrutura = ``;

// for (let i = 0; i < 1000000; i++) {
//     estrutura += `<li> Valor '${i}</li>`;
// }
//  var est = '<ul>';
//  est += estrutura;
//  est += '</ul>';

//  document.querySelector('body').innerHTML = est;

let post = {
    title : 'Título da minha pagina',
    excerpt : 'Introdução do meu texto',
    body : 'Conteudo do meu texto',
    tag : [
        'Tag 1',
        'Tag 2',
        'Tag 3',
        'Tag 4'
    ]
} = post;

let {
    title,
    excerpt,
    body,
    tag

} = post;

var postHtml = `
    <article>
        <header>
            <h1>${title}</h1>
        </header>
        <section>
            <div>${excerpt}</div>
            <div>${body}</div>
        </section>
        <footer>
            <ul>
                    ${tags.map( tag => `<li>${tag}</li>`).join('\n')}
            </ul>
        </footer>
    </article>

    `;
    document.querySelector('body').innerHTML = postHtml;