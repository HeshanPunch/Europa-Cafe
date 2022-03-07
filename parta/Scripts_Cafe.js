// adapted from: https://www.codespeedy.com/how-to-display-current-date-and-time-using-javascript/
function getDate(){
    var cDate=new Date();
    document.getElementById("todayDate").innerHTML = cDate.toString();
}


function printOnPage1(){
    
    // print the customer information
    document.getElementById("printcustomerinfo").innerHTML="<br>" + (document.getElementById("firstName").value) + " " + (document.getElementById("lastName").value) + "<br>" + (document.getElementById("tel").value) + "<br>" + "Pickup time: " + (document.getElementById("pickup").value) + "<br>";
    
    var orderprint = "Order:" + "<br>";
    var ordersum = 0.0;
    

    var margqty = document.getElementById("marg").value;      
    var quattrqty = document.getElementById("quattro").value;
    var capriqty = document.getElementById("capri").value;
   
  
    var schnitqty = document.getElementById("schnit").value; 
    var mixqty = document.getElementById("mix").value;
    var beefqty = document.getElementById("beef").value;
  
    var coffeeqty = document.getElementById("coffee").value;
    var latteqty = document.getElementById("latte").value;
    var drinkqty = document.getElementById("drink").value;
    
    //Pizzas
    
    if(margqty > 0)
    {
        orderprint += margqty + " Margherita " + "$" + parseFloat(margqty*12).toFixed(2) + "<br>";
        ordersum += parseFloat(margqty*12);
    }
    if(quattrqty > 0) 
    {
        orderprint += quattrqty + " Quattro Formaggi " + "$" + parseFloat(quattrqty*12.50).toFixed(2) + "<br>";
        ordersum += parseFloat(quattrqty*12.50);
    }
    if(capriqty > 0)
    {
        orderprint += capriqty + " Capricciosa " + "$" + parseFloat(capriqty*13).toFixed(2) + "<br>";
        ordersum += parseFloat(capriqty*13);
    }

 
    if(schnitqty > 0)//Sandwiches
    {
        orderprint += schnitqty + " Schnitzel " + "$" + parseFloat(schnitqty*8.50).toFixed(2) + "<br>";
        ordersum +=parseFloat(schnitqty*8.50);
    }    
    if(mixqty > 0)
    {
        orderprint += mixqty + " Mixed Grill  " + "$" + parseFloat(mixqty*9.50).toFixed(2) + "<br>";
        ordersum += parseFloat(mixqty*9.50);
    } 
    if(beefqty > 0) 
    {
        orderprint += beefqty + " Big Beef on a Bun " + "$" + parseFloat(beefqty*10).toFixed(2) + "<br>";
        ordersum += parseFloat(beefqty*10);
    }  

    if(coffeeqty > 0) //Beverages
    {
        orderprint += coffeeqty + " Coffee " + "$" + parseFloat(coffeeqty*2).toFixed(2) + "<br>";
        ordersum += parseFloat(coffeeqty*2);
    }
    if(latteqty > 0)
    {
        orderprint += latteqty + " Latte " + "$" + parseFloat(latteqty*2.50).toFixed(2) + "<br>";
        ordersum += parseFloat(latteqty*2.50);
    }    
    if(drinkqty > 0)
    {
        orderprint += drinkqty + " Soft drink " + "$" + parseFloat(drinkqty*1.75).toFixed(2) + "<br>";
        ordersum += parseFloat(drinkqty*1.75);
    }
    var totalstring = "Total Cost: $"+ ordersum.toFixed(2);

    document.getElementById("printorder").innerHTML= orderprint;
    document.getElementById("printtotal").innerHTML= totalstring;
    
}