function send() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    actual_answer = parseInt(num1) * parseInt(num2);
    question_number = "<h4>" + num1 + " X " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}