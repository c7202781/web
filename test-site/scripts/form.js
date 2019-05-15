function validateForm()
{
    if (document.myForm.fname.value == "" || document.myForm.fname.value == null) 
    {
    	alert( "Please provide your First name!" ); 
        document.myForm.fname.focus() ; 
        return false;
    }
    if (document.myForm.lname.value == "" || document.myForm.lname.value == null) 
    {
    	alert( "Please provide your Last name!" ); 
        document.myForm.lname.focus() ; 
        return false;
    }
    if (document.myForm.email.value == "" || document.myForm.email.value == null) 
    {
    	alert( "Please provide your Email!" ); 
        document.myForm.email.focus() ; 
        return false;
    }
    var x=document.myForm.password.value;
    if (x === "" || x===null) 
    {
    	alert( "Please provide your Password!" ); 
        document.myForm.password.focus() ; 
        return false;
    }
    if (document.myForm.Days.value == "Days") 
    {
    	alert( "Please select a day!" ); 
        document.myForm.Days.focus() ; 
        return false;
    }
    if (document.myForm.Months.value == "Months") 
    {
    	alert( "Please select a month!" ); 
        document.myForm.Months.focus() ; 
        return false;
    }
    if (document.myForm.Years.value == "Years") 
    {
    	alert( "Please select a year!" ); 
        document.myForm.Years.focus() ; 
        return false;
    }
    {
	    var radios = document.getElementsByName("gender");
	    var formValid = false;
	    var i = 0;
	    while (!formValid && i < radios.length) {
	        if (radios[i].checked) formValid = true;
	        i++;        
	    }
	    if (!formValid) alert("Must check some option!");
	    return formValid;
    }
    return( true );
}