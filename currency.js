$(document).ready(function() {
    const apikey = "3294a89da7c5a56d2d1531d480deacfa"
    
    $.ajax({
        url: "http://data.fixer.io/api/latest?access_key="+apikey,
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            var gbpValue = json.rates.GBP ;
            var usdValue = json.rates.USD ;
        },
        fail: function(error) {
            console.log(error);
        }
    })
});
