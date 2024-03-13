/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

window.onload = function() {
    let twitterLink = document.querySelector(".blog-sidebar div:nth-of-type(3) li:nth-of-type(2)");
    twitterLink.remove()
}


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

function removeParent() {
    let links = document.querySelectorAll("a");
    for (const link of links) {
        if (link.innerHTML == "Continua a leggere") {
        link.addEventListener("click", () => link.parentElement.remove())
        }
    }
}

removeParent()

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

function authorAlert() {
    let author = document.querySelectorAll(".blog-post-meta a");

    for (const link of author) {
    link.addEventListener("mouseover", () => alert(link.innerHTML));
    }
}

authorAlert()
