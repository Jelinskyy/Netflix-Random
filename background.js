chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url) {
        if(tab.url.includes("/browse?jbv=")){
            const titleId = tab.url.split("?")[1].substr(4);
            chrome.tabs.sendMessage(tabId, {
                type: "NewBrowse",
                titleId: titleId
            });
        }
    }
});

importScripts("apiServiceWorker.js")