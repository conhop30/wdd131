const themeSelector = document.getElementById("theme-toggle");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
    if (themeSelector == "dark-mode") {
        document.getElement("body").removeClass("light-mode");
        document.getElement("body").addClass("dark-mode");
    }
    else {
        document.getElement("body").removeClass("dark-mode");
        document.getElement("body").addClass("light-mode");
    }
}

