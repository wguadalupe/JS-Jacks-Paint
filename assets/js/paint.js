function configureListeners() {
    let images = document.querySelectorAll('img'); // select img elements  

// iterate over images and add mouseover event listeners 
for (var i = 0; i < images.length; i++) {        
    images[i].addEventListener('mouseover', addOpacity);
  // iterate over images and add mouseover event listeners  

 } 
}

function addOpacity(event) {
    event.target.classList.add('dim');// add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    event.target.classList.remove('dim'); //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            price = 14.99;
            colorName = 'Lime Green';// set variables for price and color name and invoke a function to update the price     
            break;           
        case 'pn2':
            price = 11.14;
            colorName = 'Medium Brown';    
            break;            
        case 'pn3':
            price = 22.99;
            colorName = 'Royal Blue'; 
            break;   
        case 'pn4':
            price = 4.99;
            colorName = 'Solid Black';  
            break;   
        case 'pn5':
            price = 8.22;
            colorName = 'Solid Cyan';       
            break;   
        case 'pn6':
            price = 11.99;
            colorName = 'Solid Purple';         
            break;   
        case 'pn7':
            price = 13.42;
            colorName = 'Solid Red'; 
            break;   
        case 'pn8':
            price = 21.98;
            colorName = 'Solid White';    
            break;   
        case 'pn9':
            price = 14.99;
            colorName = 'Solid Yellow'; 
            break;   
          default:              
    }

    updatePrice(colorName, price);

}

    function updatePrice(colorName, price)  {      
        document.getElementById('color-name').textContent = colorName;
        document.getElementById('color-price').textContent = `$${price}`;

    }
    

