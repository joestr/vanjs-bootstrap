const setCustomStyle = (document: Document) => {
    /* Hack to get login elements in center */
    document.getElementsByTagName("html")[0].style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.display = "flex";
    document.body.style.alignItems = "center";
    document.body.classList.add("text-center");
    let layoutElement = document.getElementById("layout");
    if (layoutElement != null) {
        layoutElement.style.width = "100%";
        layoutElement.style.maxWidth = "330px";
        layoutElement.style.margin = "auto";
    }
}
  
const resetCustomStyle = (document: Document) => {
    document.getElementsByTagName("html")[0].style.height = "";
    document.body.style.height = "";
    document.body.style.display = "";
    document.body.style.alignItems = "";
    document.body.classList.remove("text-center");
    let layoutElement = document.getElementById("layout");
    if (layoutElement != null) {
        layoutElement.style.width = "";
        layoutElement.style.maxWidth = "";
        layoutElement.style.margin = "";
    }
}

export { resetCustomStyle, setCustomStyle }