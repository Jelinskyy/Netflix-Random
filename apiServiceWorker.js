chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === "GetConfig") {
        const url = chrome.runtime.getURL('./config.json');

        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)
            chrome.tabs.sendMessage(sender.tab.id, {
                type: "GetConfig",
                result: result
            })
        } catch (error) {
            console.error(error);
        }
    } 
});