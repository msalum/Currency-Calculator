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

    $("#fromAmount").on("input", function() {
        if (isNaN($("#fromAmount").val())) 
        {
            alert("Input must be a number")
        }
        else {
            if ($('input[toAmount]:checked', '#output').attr("id") == "eur" ){
                $("#result").val($("#fromAmount").val())
            }
            if ($('input[toAmount]:checked', '#output').attr("id") == "usd" ){
                $("#result").val($("#fromAmount").val() * usdValue)
            }
            if ($('input[toAmount]:checked', '#output').attr("id") == "gbp" ){
                $("#result").val($("#fromAmount").val() * gbpValue)
            }
        }
    
    })
    
    $('input[type=radio][toAmount]').change(function() {
        if (isNaN($("#fromAmount").val())) 
        {
            
        }
        else {
            if ($('input[toAmount]:checked', '#output').attr("id") == "eur" ){
                $("#result").val($("#fromAmount").val())
            }
            if ($('input[toAmount]:checked', '#output').attr("id") == "usd" ){
                $("#result").val($("#fromAmount").val() * usdValue)
            }
            if ($('input[toAmount]:checked', '#output').attr("id") == "gbp" ){
                $("#result").val($("#fromAmount").val() * gbpValue)
            }
        }
    
    })








});

