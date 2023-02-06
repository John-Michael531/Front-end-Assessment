var max_fields = 25; //maximum input boxes allowed

var wrapper = $(".input_fields_wrap"); //Fields wrapper
var add_button = $(".add_field_button"); //Add button ID

var x = 1; //initlal text box count
var y = 1
function countCharacters() {
    var value = $("#inpLine").val();
    var length = value.length;
    ;
    if (length >= 40) {
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            y++;
            length = 0;
            $(wrapper).append('<div><h4>Line ' + y + '<input type="text" maxlength="40" name="mytext' + y + '" id="mytext' + y + '" class= "inpLine" placeholder="Line ' + x + '" onkeypress="countChar(' + y + ')" /><input type="button" name="btnRemove_1" value="X" class="remove_field" onclick="removeItem()" /></h4></div>'); //add input box
            $('mytext' + y).focus();
            document.getElementById('mytext' + y).focus();
            document.getElementById('txtArea').innerHTML = value;
        }
    }

};


function countChar(x) {
    var value = $("#mytext" + y).val();
    var textArea = $("#txtArea").val();
    var length = value.length;

    if (length >= 40) {
        if (x < max_fields) { //max input box allowed
            y++; //text box increment
            $(wrapper).append('<div><h4>Line ' + y + '<input type="text" maxlength="40" name="mytext' + y + '" id="mytext' + y + '" class= "inpLine" placeholder="Line ' + y + '" onkeypress="countChar(' + y + ')" /><input type="button" name="btnRemove_1" value="X" class="remove_field" onclick="removeItem()"  /></h4></div>'); //add input box
            $('mytext' + y).focus();
            document.getElementById('mytext' + y).focus();
            document.getElementById('txtArea').innerHTML = textArea + ' ' + value;
            $("#txtArea").css("font-size", "8pt");
            $("#mytext" + y).css("background-color", "lightgray");
        }
    }

};

function newLine() {//max input box allowed
    if (y == 1) {
        y++; //text box increment
        $(wrapper).append('<div><h4>Line ' + y + '<input type="text" maxlength="40" name="mytext' + y + '" id="mytext' + y + '" class= "inpLine" placeholder="Line ' + y + '" onkeypress="countChar(' + y + ')" /><input type="button" name="btnRemove_1" value="X" class="remove_field" onclick="removeItem()"  /></h4></div>'); //add input box
        $('mytext' + y).focus();
        document.getElementById('mytext' + y).focus();
        document.getElementById('txtArea').innerHTML = textArea + ' ' + value;
        $("#txtArea").css("font-size", "8pt");
        $("#mytext" + y).css("background-color", "lightgray");
    }
    else {
        x++; //text box increment
        y++;
        length = 0;
        $(wrapper).append('<div><h4>Line ' + x + '<input type="text" maxlength="40" name="mytext' + x + '" id="mytext' + x + '" class= "inpLine" placeholder="Line ' + x + '" onkeypress="countChar(' + x + ')" /><input type="button" name="btnRemove_1" value="X" class="remove_field" onclick="removeItem()" /></h4></div>'); //add input box
        $('mytext' + x).focus();
        document.getElementById('mytext' + x).focus();
        document.getElementById('txtArea').innerHTML = value;
    }
}


function removeItem() {
    $(wrapper).on("click", ".remove_field", function (e) {
        if (confirm('Are you sure?')) {
            e.preventDefault(); $(this).parent('h4').remove();
            e.preventDefault(); $(this).parent('div').remove(); 
            e.preventDefault(); $(this).parent('div').remove(); 
            x--;
            y--;
        }
    });
}