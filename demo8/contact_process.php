<?php
	
		$to = "sakshamguesthouse@gmail.com";
		$name = $_POST['name'];	
		$mobile = $_POST['mobile'];
		$subject = $_POST['subject'];	
		$query = $_POST['message'];		
		$message = '<table role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
						<tbody>
						<tr>
						<td style="padding: 20px 0 30px 0;">
						<table style="border-collapse: collapse; border: 1px solid #cccccc;" border="0" width="600" cellspacing="0" cellpadding="0" align="center">
						<tbody>
						<tr>
						<td style="padding: 40px 0 30px 0;" align="center" bgcolor="#70bbd9"><img style="display: block;" src="https://cdn.dribbble.com/users/4874/screenshots/2031709/messageincoming.gif" alt="Creating Email Magic." width="300" height="230" /></td>
						</tr>
						<tr>
						<td style="padding: 40px 30px 40px 30px;" bgcolor="#ffffff">
						<table style="border-collapse: collapse;" border="0" width="100%" cellspacing="0" cellpadding="0">
						<tbody>
						<tr>
						<td style="color: #153643; font-family: Arial, sans-serif;">
						<h1 style="font-size: 24px; margin: 0;">Hii You got the new query</h1>
						</td>
						</tr>
						<tr>
						<td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
						<p style="margin: 0;">&nbsp;Name : "'.$name.'"</p>
						<p style="margin: 0;">&nbsp;Email : "''"</p>
						<p style="margin: 0;">&nbsp;Mobile : "'.$mobile.'"</p>
						<p style="margin: 0;">&nbsp;Service: "'.$subject.'"</p>
						<p style="margin: 0;">&nbsp;Message: "'.$query.'"</p>
						</td>
						</tr>
						</tbody>
						</table>
						</td>
						</tr>
						<tr>
						<td style="padding: 30px 30px;" bgcolor="#ee4c50">
						<table style="border-collapse: collapse; width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
						<tbody>
						<tr>
						<td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px; width: 99.8141%;">
						<p style="margin: 0px; text-align: center;">&reg; Happy Business.</p>
						</td>
						</tr>
						</tbody>
						</table>
						</td>
						</tr>
						</tbody>
						</table>
						</td>
						</tr>
						</tbody>
						</table>';
		
	
	if($name && $mobile && $query)
	{
		// Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		
		mail($to,$mobile,$message,$headers);
		echo "1";
	}
	else
	{
	echo "2";	
	}	
	
	
	   
	  

?>