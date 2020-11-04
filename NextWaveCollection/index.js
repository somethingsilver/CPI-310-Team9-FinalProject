// Pull Data From Database

// Using Code for learning and testing below vvv
// Got from: https://stackoverflow.com/questions/23359372/connect-html-page-with-sql-server-using-javascript
var userID = document.getElementById("UserID").nodeValue;

$.ajax({
    type: "GET",
    url: "..." + userID,
    crossDomain: true,
    dataType: 'jsonp',
    success: function jsondata(data)
        {
            var parsedata = JSON.parse(JSON.stringify(data));
            var logindata = parsedata["Status"];

            if("sucess" == logindata)
            {
                alert("success");
            }
            else
            {
                alert("failed");
            }
            
        }

});

// Prompt Create Account

// Prompt Testing
var promptUser = prompt("Enter username ", "");
if(promptUser != null)
{
    alert("Welcome, " + promptUser);
}

// Store Account Information