
container = document.getElementsByClassName('container')[0];

function deleteTextNodes(element) {
    for(var i = 0; i < element.childNodes.length; i++) {
        if(element.childNodes[i].nodeType === 3) {
            element.removeChild(element.childNodes[i]);
            i--;
        } else {
            deleteTextNodes(element.childNodes[i]);
        }
    }
}
deleteTextNodes(container);