document.getElementById("estrte_input_field").contentEditable = "true";
document.getElementById("estrte_input_field").focus();
$('#estrte_input_cont').keyup(function(event){
    estrte_color_editing = false;
		if($('#estrte_input_cont').html().indexOf('<div class="table_spec_form">') == -1){
if(estrte_fragments_log.length > 0){
       existingHTML = estrte_fragments_log[0].post_edit;;
	}else{
       var existingHTML = document.getElementById("estrte_content_wrapper").innerHTML;
	}
    var newHTML =  $('#estrte_content_wrapper').html();
 new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "edit"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	document.getElementById("estrte_content").value = newInputText;

	return;
	}else{
	}
});
