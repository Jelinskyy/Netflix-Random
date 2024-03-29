(() => {
    chrome.runtime.onMessage.addListener((message, sender, response) => {
        if (message.type === "NewBrowse") {
            newBrowseLoaded(message.titleId);
        } 
    });

    chrome.runtime.onMessage.addListener((message, sender, response) => {
        if (message.type === "Api.SelectRandomEpisode") {
            console.log(message.result)
        } 
    });

    const newBrowseLoaded = (titleId) => {
        const randomButtonExists = document.getElementById("randomBtn");

        if(!randomButtonExists) {
            const randomButton = document.createElement("button");

            randomButton.className = "color-supplementary hasIcon round ltr-126oqy";
            randomButton.id = "randomBtn";

            const buttonInnerDiv = document.createElement("div");
            buttonInnerDiv.className = "ltr-1st24vv";

            const iconPlaceholder = document.createElement("div");
            iconPlaceholder.className = "small ltr-iyulz3";

            const icon = document.createElement("h3");
            icon.className = "ltr-4z3qvp e1svuwfo1";
            icon.innerText = "☈";

            const btnContainer = document.getElementsByClassName("buttonControls--container")[0];
            btnContainer.appendChild(randomButton);
            randomButton.appendChild(buttonInnerDiv);
            buttonInnerDiv.appendChild(iconPlaceholder);
            iconPlaceholder.appendChild(icon);

            randomButton.addEventListener("click", () => {selectRandomEpisode(titleId)});
        }
    }

    const selectRandomEpisode = async (titleId) => {
        chrome.runtime.sendMessage(
            {
                type: "Api.SelectRandomEpisode",
                titleId: titleId
            }
        );
    }

    //Making sure that function'll be triggered after page refresh  
    chrome.runtime.sendMessage({type: "Page.Refreshed"})
})();
