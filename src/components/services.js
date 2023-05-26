// list services 


const loadServices = () => {
    const h1 = document.createElement('h1');

    h1.innerHTML = 'Services';

    const div = document.getElementById('content');

    div.appendChild(h1);
}
//test

export default loadServices;