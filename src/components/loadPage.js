const initialLoad = () => {
    //* Creating elements 
    const contentDiv = document.getElementById('content');
    const operationHoursDiv = document.createElement('div');
    const titleH1 = document.createElement('h1');
    const img = new Image(300, 300);
    const introParagraph = document.createElement('p');
    const hoursList = document.createElement('ul');
    const hoursLabel = document.createElement('p');
    

    const hoursOfOperation = ['Monday: 10:00am to 4:00pm', 'Tuesday: 10:00am to 4:00pm', 'Wednesday: 10:00am to 4:00pm', 'Thursday: 10:00am to 4:00pm', 'Friday: 10:00am to 4:00pm', 'Saturday: Appointment Only', 'Sunday: Appointment Only'];
 //* Adding inner text to elements
    img.src = './assets/nails.jpg';

    titleH1.innerHTML = 'Nails by Jenn';
    introParagraph.innerHTML = 'Welcome to nails by Jenn, My name is Jennifer and I am a nail tech based in San Diego, CA. Please Visit the Services page to check out my work. ';
    //* List creation 
   
    hoursOfOperation.forEach((day) =>{
        let li = document.createElement('li');
        li.innerText = day;
        hoursList.appendChild(li);
    })

    hoursLabel.innerText = 'Hours:';

   
//* Adding CSS classes
    hoursLabel.classList.add('hourLabel');
    operationHoursDiv.classList.add('operationHours');
    hoursList.classList.add('daysList');
   introParagraph.classList.add('introP');
   
    //!Appending elements to divs

    contentDiv.appendChild(titleH1);
    operationHoursDiv.appendChild(img);
    contentDiv.appendChild(introParagraph);
    contentDiv.appendChild(operationHoursDiv);

    //* Append Hours list and label
    operationHoursDiv.appendChild(hoursLabel);
    operationHoursDiv.appendChild(hoursList);
    
    
    

}
//export file
export default initialLoad;