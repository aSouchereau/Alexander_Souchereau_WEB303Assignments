/*
	WEB 303 Assignment 1 - jQuery
	Alexander Souchereau W0632604
*/

$(document).ready(function () {


	$('input#yearly-salary').add('input#percent').keyup(function (e) { 		// keyup event for both input boxes | keyup updates after each keystroke providing better user experience than change event
		
		// get user input from text box value
		let $salary = $('input#yearly-salary').val();
		let $percent = $('input#percent').val();	
		
		if (isNaN($salary) == false && isNaN($percent) == false) // User input must be a number
		{
			if($percent <= 100 && $percent >= 0) // Inputed percent must be between 0 and 100
			{
				let $mathResult = $salary * $percent / 100;
				let $dollarAllowance = $mathResult.toFixed(2);
				console.log($dollarAllowance);
				$('span#amount').text('$' + $dollarAllowance);
			}
			else // Display error message and reset inputs
			{
				alert('Error: Cannot enter more than 100%');
				$('input').val('');
				$dollarAllowance = 0;
				$('span#amount').text('$' + $dollarAllowance);
			}
		}
		else
		{
			alert('Error: Input was not a number');
			$('input').val('');
			$dollarAllowance = 0;
			$('span#amount').text('$' + $dollarAllowance);
		}

	});
});