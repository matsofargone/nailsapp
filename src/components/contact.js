// contact me page
import initialLoad from "./loadPage";

const loadContactPage = () => {
    const div = document.getElementById('content');
    const h1 = document.createElement('h1');
    const contactForm = document.createElement('form');
    const emailInput = document.createElement('input');
    const submit = document.createElement('button');
    const formTitle = document.createElement('label');
    const formItems = document.createElement('div');

    div.appendChild(h1);
    div.appendChild(contactForm);

    //*
    contactForm.setAttribute("method", "post");
    formTitle.innerHTML = 'Please submit your email to be contacted';

    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");
    emailInput.setAttribute("placeholder", "E-mail");
    emailInput.attributes.required = "required";
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.innerText = 'Submit';
    
    formItems.classList.add('formItems');


    contactForm.appendChild(formItems);
    formItems.appendChild(formTitle);
    formItems.appendChild(emailInput);
    formItems.appendChild(submit);
    submit.disabled = true;


    
    h1.innerHTML = 'Contact Me'; 

    
    

    
}


//test

//export file
export default loadContactPage;