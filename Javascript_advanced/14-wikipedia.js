function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Callback lorsque la requête est complètement chargée
            callback(xhr.response.query.pages[21721040].extract);
        }
    };

    xhr.send();
}

queryWikipedia(createElement);