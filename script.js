
var City = "";
//var data = localStorage.getItem(City);

var Weather = function () {
    if (City) {
        $('.city').empty();
        $('.icon').empty();
        $('.status').empty();
        $('.temp').empty();
        $('.date').empty();
        $('.wind').empty();
        $('.humidity').empty();
    }
    City = $('.search').val().trim();

   
    localStorage.setItem(City, JSON.stringify(City));

    localStorage.getItem(City).setItem('.append')

    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&appid=4c5793fc59034c04babb0d0021abfcc3`, function (data) {
        console.log(data);
    

        var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temp = Math.floor(data.main.temp);
        var status = data.weather[0].description;
        var city = data.name;
        var date = data.dt;
        var wind = Math.floor(data.wind.speed);
        var humidity = data.main.humidity;



        $('.city').append(city);
        $('.icon').attr('src', icon);
        $('.status').append(status);
        $('.temp').append(temp + ('\u2109'));
        $('.date').append(date);
        $('.wind').append('wind:' + wind + 'mph');
        $('.humidity').append('humidity:' + humidity + '%');

        forcast();

    })
}
$('#searchBtn').click(Weather)

var forcast = function () {

    if (City) {
        $('.datec').empty();
        $('.iconc').empty();
        $('.tempc').empty();
        $('.humidic').empty();
    }

    $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?q=${City}&units=imperial&appid=4c5793fc59034c04babb0d0021abfcc3`, function (data) {
        console.log(data);

        var date1 = data.list[3].dt_txt;
        var date2 = data.list[11].dt_txt;
        var date3 = data.list[19].dt_txt;
        var date4 = data.list[27].dt_txt;
        var date5 = data.list[35].dt_txt;
        var icon1 = "http://api.openweathermap.org/img/w/" + data.list[3].weather[0].icon + ".png";
        var icon2 = "http://api.openweathermap.org/img/w/" + data.list[11].weather[0].icon + ".png";
        var icon3 = "http://api.openweathermap.org/img/w/" + data.list[19].weather[0].icon + ".png";
        var icon4 = "http://api.openweathermap.org/img/w/" + data.list[27].weather[0].icon + ".png";
        var icon5 = "http://api.openweathermap.org/img/w/" + data.list[35].weather[0].icon + ".png";
        var temp1 = Math.floor(data.list[3].main.temp);
        var temp2 = Math.floor(data.list[11].main.temp);
        var temp3 = Math.floor(data.list[19].main.temp);
        var temp4 = Math.floor(data.list[27].main.temp);
        var temp5 = Math.floor(data.list[35].main.temp);
        var humidity1 = data.list[3].main.humidity;
        var humidity2 = data.list[11].main.humidity;
        var humidity3 = data.list[19].main.humidity;
        var humidity4 = data.list[27].main.humidity;
        var humidity5 = data.list[35].main.humidity;




        $('#date1').append(date1);
        $('#date2').append(date2);
        $('#date3').append(date3);
        $('#date4').append(date4);
        $('#date5').append(date5);
        $('#icon1').attr('src', icon1);
        $('#icon2').attr('src', icon2);
        $('#icon3').attr('src', icon3);
        $('#icon4').attr('src', icon4);
        $('#icon5').attr('src', icon5);
        $('#temp1').append(temp1 + ('\u2109'));
        $('#temp2').append(temp2 + ('\u2109'));
        $('#temp3').append(temp3 + ('\u2109'));
        $('#temp4').append(temp4 + ('\u2109'));
        $('#temp5').append(temp5 + ('\u2109'));
        $('#humidity1').append('humidity:' + humidity1 + '%');
        $('#humidity2').append('humidity:' + humidity2 + '%');
        $('#humidity3').append('humidity:' + humidity3 + '%');
        $('#humidity4').append('humidity' + humidity4 + '%');
        $('#humidity5').append('humidity' + humidity5 + '%');
    })

}
