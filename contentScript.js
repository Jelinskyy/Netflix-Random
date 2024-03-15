(() => {
    chrome.runtime.onMessage.addListener((message, sender, response) => {
        if (message.type === "NewBrowse") {
            newBrowseLoaded();
        } 
    });

    chrome.runtime.onMessage.addListener((message, sender, response) => {
        if (message.type === "GetConfig") {
            console.log(message.result)
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

    const selectRandomEpisode = async () => {
        chrome.runtime.sendMessage(
            {type: "GetConfig"}
        );

        // const url = 'https://unogsng.p.rapidapi.com/episodes?netflixid=81091393';
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': config["api"]["key"],
        //         'X-RapidAPI-Host': config["api"]["host"]
        //     }
        // };
        
        // try {
        //     const response = await fetch(url, options);
        //     const result = await response.text();
        //     console.log(result);
        // } catch (error) {
        //     console.error(error);
        // }
    }

    //Making sure that function'll be triggered after page refresh  
    newBrowseLoaded();
})();
