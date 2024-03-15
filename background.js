chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url) {
        if(tab.url.includes("jbv=")){
            const queryParameters = tab.url.split("?")[1];
            const urlParameters = new URLSearchParams(queryParameters);
            
            console.log(queryParameters)
            chrome.tabs.sendMessage(tabId, {
                type: "NewBrowse",
            });
        }
    }
});

importScripts("apiServiceWorker.js")