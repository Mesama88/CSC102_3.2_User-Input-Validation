function validate()
{
    var firstName = document.getElementById("firstNameString").value; //Define a variable called first name and set it equal to the input firstNameString from HTML.
    var lastName = document.getElementById("lastNameString").value; //Define a variable called last name and set it equal to the input lastNameString from HTML.
    var empNum = document.getElementById("employeeID").value; //Define a variable called first name and set it equal to the input employee ID from HTML.
    var fullName = firstName + " " + lastName; //Define a new variable as a concatenation.

//I have arbitrarily decided that the minimum characters in someones name is 6 characters. I don't believe in upper limits for names so I only evaluate on the low side.
    if (fullName.length <=6)
    {
        document.getElementById("nameStatus").innerHTML = "Please enter your full First name and full Last Name to proceed.";
    }
    else // If you made it this far, you must be passing.
    {
        document.getElementById("nameStatus").innerHTML = "Welcome back " + fullName;
    }
    
//I have arbitrarily decided that the acceptable employee ID range is 600,000 to 699,999.
    if (empNum > 699999) //Ensure our employee ID isn't greater than 699,999.
    {
        document.getElementById("empNumStatus").innerHTML = "Sus bro, this number is too high.";
    }
    else if ((empNum < 600000)) //Ensure our employee ID isn't less than 600,000
    {
        document.getElementById("empNumStatus").innerHTML = "Sus bro, this number is too low.";
    }
    else //If the number isn't out of range, it must be good (Or there is some witchcraft going on).
    {
        document.getElementById("empNumStatus").innerHTML = "Your Employee ID has been accepted."
    }
}
