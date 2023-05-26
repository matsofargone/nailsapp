import initialLoad from "./components/loadPage";
import loadContactPage from "./components/contact";
import loadServices from "./components/services";

//select menu items
const homeTab = document.getElementById('Home');
const servicesTab = document.getElementById('services');
const contactTab = document.getElementById('contact');
const div = document.getElementById('content');

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


//add eventlisteners to buttons


initialLoad();



