import initialLoad from "./components/loadPage";
import loadContactPage from "./components/contact";
import loadServices from "./components/services";
import "./style.css";

//select menu items
const homeTab = document.getElementById('Home');
const servicesTab = document.getElementById('services');
const contactTab = document.getElementById('contact');
const div = document.getElementById('content');
const menuItems = document.querySelectorAll('a');

console.log(menuItems);

menuItems.forEach((listItem) => {
    listItem.addEventListener('click', function() {
       menuItems.forEach((listItem) => {
        listItem.classList.remove('active');
       })
        listItem.classList.add('active');
    })
})


servicesTab.addEventListener('click', function(e){
    div.innerHTML = '';
    loadServices();
});

homeTab.addEventListener('click', function(e){
    div.innerHTML = '';
    initialLoad();
});

contactTab.addEventListener('click', function(e){
    div.innerHTML = '';
    loadContactPage();
});

//test
//test


//add eventlisteners to buttons


initialLoad();



