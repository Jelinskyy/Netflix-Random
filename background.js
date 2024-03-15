const CheckForBrowse = (tabId, tab) => {
    if(tab.url) {
        if(tab.url.includes("/browse?jbv=")){
            const titleId = tab.url.split("?")[1].substr(4);
            chrome.tabs.sendMessage(tabId, {
                type: "NewBrowse",
                titleId: titleId
            });
        }

        if(tab.url.includes("netflix.com/title/")){
            const stripedurl = tab.url.split("/");
            titleId = stripedurl[stripedurl.length-1]
            chrome.tabs.sendMessage(tabId, {
                type: "NewBrowse",
                titleId: titleId
            });
        }
    }
}

chrome.tabs.onUpdated.addListener(CheckForBrowse);
chrome.runtime.onMessage.addListener((request, sender, response) => {
    if(request.type === "Page.Refreshed"){
        CheckForBrowse(sender.tab.id, sender.tab)
    }
});

importScripts("apiServiceWorker.js");