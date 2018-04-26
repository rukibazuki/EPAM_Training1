container = document.getElementsByClassName("container")[1];
newElement = document.createElement("h1");
newElement.innerHTML = 'Новый элемент.';

function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild);
}
prepend(container, newElement);


