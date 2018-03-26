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

    $("#amount").on("input", function() {
        if (isNaN($("#amount").val())) 
        {
            alert("Input must be a number")
        }
        else {
            if ($('input[name=options]:checked', '#output').attr("id") == "eur" ){
                $("#result").val($("#amount").val())
            }
            if ($('input[name=options]:checked', '#output').attr("id") == "usd" ){
                $("#result").val($("#amount").val() * usdValue)
            }
            if ($('input[name=options]:checked', '#output').attr("id") == "gbp" ){
                $("#result").val($("#amount").val() * gbpValue)
            }
        }
    
    })
    
    $('input[type=radio][name=options]').change(function() {
        if (isNaN($("#amount").val())) 
        {
            
        }
        else {
            if ($('input[name=options]:checked', '#output').attr("id") == "eur" ){
                $("#result").val($("#amount").val())
            }
            if ($('input[name=options]:checked', '#output').attr("id") == "usd" ){
                $("#result").val($("#amount").val() * usdValue)
            }
            if ($('input[name=options]:checked', '#output').attr("id") == "gbp" ){
                $("#result").val($("#amount").val() * gbpValue)
            }
        }
    
    })








});

