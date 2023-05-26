const initialLoad = () => {
    const div = document.getElementById('content');
    const h1 = document.createElement('h1');
    const img = new Image(400, 400);
    const p = document.createElement('p');
 
    img.src = './assets/nails.jpg';

    h1.innerHTML = 'Nails by Jenn';
    p.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam itaque distinctio consectetur vel molestias molestiae, mollitia impedit voluptatibus cum? Et magnam sunt reprehenderit. At magni perferendis voluptatibus esse veniam consequatur!';

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
    

}
//export file
export default initialLoad;