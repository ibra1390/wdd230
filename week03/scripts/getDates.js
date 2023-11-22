//Getting current year
document.getElementById("year").innerHTML = new Date().getFullYear();

//Getting date the document was last modified
let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = `Last Modification: ${oLastModif}`;