const getConfig = async () => {
    const url = chrome.runtime.getURL('./config.json');

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

const getAllEpisodes = async (titleId, apiKey, apiHost) => {
    const url = `https://unogsng.p.rapidapi.com/episodes?netflixid=${titleId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.type === "Api.GetEpisodeId") {
        const config = await getConfig()
        allEpisodes = await getAllEpisodes(request.titleId, config.api.key, config.api.host) 
        console.log(allEpisodes)
    } 
});