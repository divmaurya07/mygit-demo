jQuery(document).ready(function($){

	$(document).on('click', '.phn', function() { 
        location.href='tel:+91-7307692370';
    });
	$(document).on('click', '.cont', function() { 
        location.href='https://wa.me/917307692370?text=Im%20interested%20in%20';
    });


 $(document).on('click', '.place_order', function(){ 
			
			var name = $("#name").val();
			var mobile = $("#mobile").val();
			var subject = $("#mobile").val();		
			var message = $("#message").val();			
			var form_data = new FormData(); 			
					
				
				if(name && mobile && message)		
				   {
					   
					form_data.append('name', name);					
					form_data.append('mobile', mobile);
					form_data.append('subject', subject);
					form_data.append('message', message);	
					
					   
					   $.ajax({
						url: "contact_process.php",
						type: "POST",
						data: form_data,
						dataType:'json', 
						contentType: false,
						cache: false,
						processData:false,
						success: function(data){
						    
							if(data == 1)
							{
								alert("Our Team Will reach you soon. 24x7 Services"); 	
								location.reload();
                         
							}
							if(data == 2)
							{
								alert("something wents wrong"); 	
							}
							
							
						}
					});					   
					  
				   }	
				else
				{					
					 alert("Note : You are missing something.Full Details should be there.");	
				}					
      }); 
	

});	