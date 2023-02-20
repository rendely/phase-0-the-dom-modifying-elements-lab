// // Write your code here!
// 1) no longer has DOM node 'main#main'
const main = document.querySelector('main#main');
main.remove();

// 2) has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

// 3) the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = 'victory';

// 4) the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
newHeader.textContent = 'Matthew is the champion';
