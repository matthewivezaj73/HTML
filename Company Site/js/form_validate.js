/**Matthew Ivezaj
    10/19/2020
    IT413
    github repo: https://github.com/mivezah/it413_mivezaj/blob/master/Week4/CreateASimpleWebsite/js/form_validate.js
**/
function validateform()
{
    //Creating variables.
    var return_value = true;
    var error_string = "";
    //Begin processing the first name.
    if(document.forms["my_form"].first_name.value == "") 
    {
        error_string += "Please fill in your First Name Value\n";
        return_value = false;
    }
    //If the first name is provided, makes sure that the entry is inbetween 3 characters and 10 characters.
    if(document.forms["my_form"].first_name.value != "" && document.forms["my_form"].first_name.value.length < 3 || document.forms["my_form"].first_name.value.length > 10)
    {
        error_string += "First Name must be between three and ten characters long!\n";
        return_value = false; 
    }
    //Begin processing the last name.
    if(document.forms["my_form"].last_name.value == "") 
    {
        error_string += "Please fill in your Last Name Value\n";
        return_value = false;
    }
    //If the last name is provided, makes sure that the entry is inbetween 2 characters and 15 characters.
    if(document.forms["my_form"].last_name.value != "" && document.forms["my_form"].last_name.value.length < 2|| document.forms["my_form"].last_name.value.length > 15)
    {
        error_string += "Last Name must be between two and fifteen characters long!\n";
        return_value = false; 
    }
    //Processes the Address if given, else passes.
    if(document.forms["my_form"].address.value == "") 
    {
        return_value = true;
    }
    //If the address is provided, makes sure that the entry is inbetween 8 characters and 25 characters.
    if(document.forms["my_form"].address.value != "" && document.forms["my_form"].address.value.length < 8 || document.forms["my_form"].address.value.length > 25)
    {
        error_string += "The address must be between eight and twenty-five characters long!\n";
        return_value = false; 
    }
    //Begin processing the Phone Number.
    if(document.forms["my_form"].phone_number.value == "") 
    {
        error_string += "Please fill in your phone number\n";
        return_value = false;
    }
    //Created checks to see if the phone number is 10 characters or 12 characters with -.
    if(document.forms["my_form"].phone_number.value != "" && document.forms["my_form"].phone_number.value.length != 10 && document.forms["my_form"].phone_number.value.length != 12)
    {
        error_string += "Phone Number must be either ten numerical digits or twelve digits if dashes are included!\n";
        return_value = false; 
    }
    //Begin processing the Inquiry Information, the inquiry cannot be blank.
    if(document.forms["my_form"].inquiry_information.value == "") 
    {
        error_string += "Please fill in the Inquiry Information\n";
        return_value = false;
    }
    //Displaying an alert if no value is entered and if a value is entered, display another message.
    if(error_string != "")
    {
        alert(error_string);
    }
    return return_value;
}