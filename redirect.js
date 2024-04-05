var redirect = function(file) {
    var url = window.location.href;
    var urlParts = url.split('/');
    urlParts.pop();

    window.location.href = urlParts.join('/') + '/' + file;
}