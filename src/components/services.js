// list services 


const loadServices = () => {
    //*Creating needed elements 
    const priceListDiv = document.createElement('div');
    const prices = [{'service': 'Manicure', 'price': 30.00}, {'service': 'Gel Manicure', 'price': 45.00}, {'service': 'Spa Manicure', 'price': 55.00}, {'service': 'Acrylic Full Set', 'price': 55.00}, {'service': 'Gel Full Set', 'price': 65.00}, {'service': 'Full Set Forms', 'price': 75.00}, {'service': 'Dip Full Set', 'price': 50.00}, {'service': 'Refill', 'price': 20.00}, {'service': 'Gel Refill', 'price': 30.00}];
    const priceListItemsDiv = document.createElement('div');
    const priceList = document.createElement('ul');
    const priceH1 = document.createElement('h1');

    //*edit elements 
    priceH1.innerHTML = 'Price List';

    prices.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item.service + ' ......... ' +  '$' + item.price;
        priceList.appendChild(li);
        console.log(li)
    })

    //!Adding Classes to elements 
    priceListDiv.classList.add('priceListBox');
    priceList.classList.add('priceListItems');





    //*appending element to div 
    const div = document.getElementById('content');
    
    div.appendChild(priceH1);
    div.appendChild(priceListDiv);
    priceListDiv.appendChild(priceList);
    

    
}
//test

export default loadServices;