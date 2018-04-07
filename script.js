$(document).ready(function(){
    var testNumLength = function(number) {
        if (number.length > 9) {
            totalDiv.text(number.substr (number.length-9,9));
            if (number.length > 15) {
                number = "";
                totalDiv.text("Err");
            }
        }
    };
    var number = "";
    var newNumber = "";
    var operator = "";
    var totalDiv = $("#total");
    totalDiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function() {
        number += $(this).text();
        totalDiv.text(number);
        testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
        operator += $(this).text();
        newNumber = number;
        number = "";
        totalDiv.text("0");
    });
    $("#clear,#clearall").click(function() {
        number("");
        totalDiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newNumber = "";
        }
    });
    $("#equals").click(function(){
        if(operator === "+") {
            number = (parseInt(number,10) + parseInt(newNumber,10)).toString(10);
        } else if(operator === "-") {
            number = (parseInt(number,10) - parseInt(newNumber,10)).toString(10);
        } else if(operator === "/") {
            number = (parseInt(number,10) / parseInt(newNumber,10)).toString(10);
        } else if(operator === "*") {
            number = (parseInt(number,10) * parseInt(newNumber,10)).toString(10);
        }
        totalDiv.text(number);
        number = "";
        newNumber = "";
    });
});