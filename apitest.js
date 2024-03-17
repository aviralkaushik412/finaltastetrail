const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d2503482499fa744d95c766dae9b58e5",
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });