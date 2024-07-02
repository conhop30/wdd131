const themeSelector = document.getElement("select");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    if (themeSelector == "dark") {
        document.getElement("body").removeClass("light");
        document.getElement("body").addClass("dark");
    }
    else {
        document.getElement("body").removeClass("dark");
        document.getElement("body").addClass("light");
    }
}

