# WeatherUpThere
Hows the weather up there? a weather dashboard 

# HTMl 

linked JQuery and Bootstrap, then created divs for the search/append section, the current weather display and the 5 day forcast. 

For the 5 day forcast I created 5 divs that will be used as the cards in which to input data from the api. 

Did not end up adding any Bootstrap content to the page, instead created the search bar, cards and divs manually.  

# CSS

Placed the search bar, weather and 5 day forcast using absolute positioning relative to the content container. 

 Added width in percentages to determing how much of the page to take up, also added a minumum width to the search bar so it does not compromise the search bar. 

 Weather and 5 day forcast height were both set to fit-content.
 
 <img width="1065" alt="Screen Shot 2021-04-26 at 10 45 21 PM" src="https://user-images.githubusercontent.com/77827825/116193468-48427000-a6e4-11eb-8271-57edb134b145.png">


 # Javacript 

 Created an empty string variabe named City
 
 <img width="1113" alt="Screen Shot 2021-04-26 at 10 46 23 PM" src="https://user-images.githubusercontent.com/77827825/116193551-64dea800-a6e4-11eb-81e4-4d5ba372028b.png">


 Created a function for the weather card named Weather and set an empty() to reset values for the classes. 

 called the City variable and assigned it the user input value. 

 for each search, set it to local storage, then added the City variable to parameters. 
 
 <img width="464" alt="Screen Shot 2021-04-26 at 10 44 53 PM" src="https://user-images.githubusercontent.com/77827825/116193582-71fb9700-a6e4-11eb-98e8-7130818dbc01.png">


 created variables to target the data and the appending them to the classes coresponding to the html. 

 created a function forcast for the 5 day forcast and repeated the process.

 linked the start button to call the weather function and added the ofrcast function inside to call them both at the same time. 

 check out my hard work! @ https://jjarquin1.github.io/WeatherUpThere/
