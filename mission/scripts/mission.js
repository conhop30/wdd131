const themeSelector = document.querySelector("select");

themeSelector.addEventListener("change", (changeTheme) => {
    changeTheme();
})

function changeTheme() {
    if (themeSelector == "dark") {
        themeSelector = "dark";
    }
    else {
        themeSelector = "light";
        const image = document.getElementById("image");
    }
}

