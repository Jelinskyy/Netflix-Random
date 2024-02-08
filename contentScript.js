(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;
    
        if (type === "NewBrowse") {
            newBrowseLoaded();
        } 
    });

    const newBrowseLoaded = () => {
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

            randomButton.addEventListener("click", selectRandomEpisode);
        }
    }

    const selectRandomEpisode = () => {
        const episodes = [];
        const episodeSelectorList = document.getElementsByClassName("episodeSelector-container")[0];

        for(const child of episodeSelectorList.children){
            if(child.classList.contains("episode-item")){
                episodes.push(child);
            }
        }

        console.log(episodes)
        episodes[Math.floor(Math.random() * episodes.length)].click();
    }

    //Making sure that function'll be triggered after page refresh  
    newBrowseLoaded();
})();
