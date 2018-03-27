var gbpValue;
var usdValue;
var eurValue;

$(document).ready(function() {
    const apikey = "3294a89da7c5a56d2d1531d480deacfa"
    
    $.ajax({
        url: "http://data.fixer.io/api/latest?access_key="+apikey,
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            gbpValue = json.rates.GBP ;
            usdValue = json.rates.USD ;
            eurValue = json.rates.EUR ;
            
        },
        fail: function(error) {
            console.log(error);
        }
    });
});

$('input[type=radio][toAmount]').change(function() {
    calculate();
});

function calculate() {
    if (isNaN($("#fromAmount").val())) 
    {
        alert("Input must be a number")
    }
    else {
        // from Eur 
        if ($('option:selected').is("#fromEur")) {
            if ($('option:selected').is("#toUsd"))
                $("#toAmount").val($("#fromAmount").val() * usdValue);
            else if ($('option:selected').is("#toGbp"))
                $("#toAmount").val($("#fromAmount").val() * gbpValue);
            else
                $("#toAmount").val($("#fromAmount").val())
        }
        // from USD
        else if ($('option:selected').is("#fromUsd")) {
            console.log("USD");
            if ($('option:selected').is("#toGbp"))
                $("#toAmount").val($("#fromAmount").val() / usdValue * gbpValue);
            else if ($('option:selected').is("#toEur"))
                $("#toAmount").val($("#fromAmount").val() / usdValue);
            else
                $("#toAmount").val($("#fromAmount").val())
        }
        // from GBP
        else if ($('option:selected').is("#fromGbp")) {
            console.log("GBP");
            if ($('option:selected').is("#toUsd"))
                $("#toAmount").val($("#fromAmount").val() / gbpValue * usdValue);
            else if ($('option:selected').is("#toEur"))   
                $("#toAmount").val($("#fromAmount").val() / gbpValue);
            else
                $("#toAmount").val($("#fromAmount").val())
        }
    }
}