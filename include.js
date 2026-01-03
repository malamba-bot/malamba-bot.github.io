async function loadHTML(id, file) {
    const el = document.getElementById(id);
    //Get elements by id
    const res = await fetch(file);
    // fetch file
    el.innerHTML = await res.text();
    //Replace html in element with files fetched
}

loadHTML("header-placeholder", "Partials/header.html");
loadHTML("footer-placeholder", "Partials/footer.html");

