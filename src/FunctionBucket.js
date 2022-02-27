export function getUrlParameters(url) {
    var regex = /[?&]([^=#]+)=([^&#]*)/g
    const params = {}
    let match = null
    while (match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params
}