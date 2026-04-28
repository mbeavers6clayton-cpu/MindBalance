function displayLastModified() {
    let lastMod = document.lastModified;

    document.getElementById("lastModified").innerHTML =
        "Last Updated: " + lastMod;
}