	  function pasteHtmlAtCaret(html) {
	if(estrte_fragments_log.length > 0){
       var existingHTML = estrte_fragments_log[0].post_edit;
	}else{
       var existingHTML =  document.getElementById("estrte_content_wrapper").innerHTML;
	}
    
        let sel, range;
        if (window.getSelection) {
          // IE9 and non-IE
          sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            el = document.createElement("div");
            el.innerHTML = html;
            el.className = "inserted_div";
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
          }
        } else if (document.selection && document.selection.type != "Control") {
          // IE < 9
          document.selection.createRange().pasteHTML(html);
        }  
        estrte_input_field.focus();
  newHTML = document.getElementById("estrte_content_wrapper").innerHTML;
  new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "text"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Text";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content").value = newInputText;
	return;	
      }

      function addToDiv(event) {
        const emoji = event.target.value;
        const estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
        pasteHtmlAtCaret(emoji);
      }
      function specCharAddToDiv(event) {
        const specChar = event.target.value;
        const estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
        pasteHtmlAtCaret(`${specChar}`);
      }
      function addTableToDiv(event) {
        const estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
        table_html = document.getElementById("table_html_hidden").value;
        pasteHtmlAtCaret(table_html);
      }
      function generateEmojiIcon(emoji) {
        const input = document.createElement("input");
        input.type = "button";
        input.value = emoji;
        input.innerText = {emoji};//caption on button
        input.addEventListener("click", addToDiv);
        return input;
      }
      function generateSpecialcharIcon(specChar) {
        const input = document.createElement("input");
        input.type = "button";
        input.value = specChar;
        input.innerText = specChar;//caption on button
        input.addEventListener("click", specCharAddToDiv);
        return input;
      }
      function setFocus(){
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_input_cont").innerHTML;
	}
document.getElementById("estrte_input_field").contentEditable = true;
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        for(i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = true;
        }
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
           document.getElementById("estrte_content").value = newInputText;
      	}
      function setEditableAndFocus(unix){
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_input_cont").innerHTML;
	}
document.getElementById(unix).contentEditable = true;
      	setTimeout(function(){document.getElementById(unix).focus();}, 100);
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        document.getElementById("estrte_input_cont").addEventListener("click", setFocus);
        document.getElementById(unix).addEventListener("mouseout", setFocus);
        for(i = 0; i < inserted_divsLength; i++){
       	inserted_divs[i].addEventListener("click", setFocus);
        }
      }
      function setDocMode(toSource) {
        doc = document.getElementById("estrte_input_field");
        let content;
     //   if (toSource) {
        if (toHTML) {
          content = document.createTextNode(doc.innerHTML);
          doc.innerHTML = "";
          const pre = document.createElement("pre");
          doc.contentEditable = false;
          pre.id = "sourceText";
          pre.contentEditable = true;
          pre.appendChild(content);
          doc.appendChild(pre);
          document.execCommand("defaultParagraphSeparator", false, "div");
          toHTML = false;
        } else {
          if (document.all) {
            doc.innerHTML = doc.innerText;
          } else {
            content = document.createRange();
            content.selectNodeContents(doc.firstChild);
            doc.innerHTML = content.toString();
          }
          doc.contentEditable = true;
          toHTML = true;
        }
        doc.focus();
      }
var toHTML = true;
var estrte_fragments_log = [];
var estrte_undo_log = [];
new_log = {};
var estrte_newStyle = "none";
var estrte_clearedNew = "no";
style_added = false;
var estrte_colorSelected = 'no';
var estrte_action = "";
var tempColorCounter = 0;
var newSoFar = "";
var formatOn = '';
var newInputText = "";
var estrte_prevAdd = 'no';
var table_spec_active = false;
var link_spec_active = false;
var estrte_to_focus = '';
var estrte_color_editing = false;
function estrte_set_current_style(styleToAdd, newValue){
	alert(styleToAdd + " - " + newValue);
	$("#estrte_input_field").css(styleToAdd, newValue);
}
function estrte_add_style(styleToAdd, newValue){
    estrte_color_editing = false;
  	estrte_prevDelete = 'no';
  	estrte_prevAdd = 'no';
    document.getElementById('estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = newValue;
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
      parentElementId =  window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{ 
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.innerHTML;
existingSegment = selectedTextString;
  var regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			if(selectedText == ''){     // if no text selected
				sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
document.getElementById("estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        for(i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        }
            el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.style = styleToAdd + ":" + newValue + ";";
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);

              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById(unix).contentEditable = true;
setTimeout(setEditableAndFocus(unix), 200);

            style_added = true;
          }
			}else{ // if some text selected
    newNode = document.createElement('div');
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.setAttribute("style", styleToAdd + ":" + newValue + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                   
    var newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	var segmentToEdit = document.getElementById(unix).innerHTML;
        var regExp = new RegExp(styleToAdd, 'g');
    var newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;	
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = document.getElementById("estrte_content_wrapper").innerHTML; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
	var pre_edit_value = estrte_fragments_log[0].pre_edit;
	var post_edit_value = estrte_fragments_log[0].post_edit;
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			
			existingHTML = $('#estrte_content_wrapper').html();
 }
 
function estrte_format(styleToAdd){
    estrte_color_editing = false;
  	estrte_prevDelete = 'no';
  	estrte_prevAdd = 'no';
    document.getElementById('estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = "";
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
	  anchorNode = window.getSelection().anchorNode.parentElement;
      parentElementId = window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = window.getSelection().anchorNode.parentElement.outerHTML;
      parentStyle = window.getSelection().anchorNode.parentElement.style;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
	     anchorNode = window.getSelection().anchorNode.parentElement;
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = document.getSelection().anchorNode.parentElement.outerHTML;
      parentStyle = window.getSelection().anchorNode.parentElement.style;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
	     anchorNode = window.selection().anchorNode.parentElement;
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = window.selection().anchorNode.parentElement.outerHTML;
      parentStyle = window.selection().anchorNode.parentElement.style;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.outerHTML;
existingSegment = selectedTextString;
  var regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			var existingFormat = 'style="' + styleToAdd +':' + newValue + ';"';
				if(parentOuterHTML.indexOf(existingFormat) != -1){
	//				newValue = normal;
				}  
			if(selectedText == ''){   // if no text selected
document.getElementById("estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        for(i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        }
        var already = false;
				sel = window.getSelection();
            	var initialFocus = unix;
          if (sel.getRangeAt && sel.rangeCount) {
            if(parentElementTagName.toLowerCase() != styleToAdd){  //  if chosen format is not already
          var thisResult = ancestor(document.getElementById(parentElementId), styleToAdd);
        		if(thisResult == null){ // if not a descendant of a styleToAdd
				            range = sel.getRangeAt(0);
            range.deleteContents();
            el = document.createElement(styleToAdd);
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
document.getElementById("format" + styleToAdd).style.fontWeight = "bold";
			}else{ // if is a descendant of a styleToAdd
				var thisFirstElementChild = thisResult.firstElementChild;
				var thisFirstElementChildTagName = thisResult.firstElementChild.tagName;
				var thisFirstElementChildStyle = thisResult.firstElementChild.style.cssText;
		            range = sel.getRangeAt(0);
            range.deleteContents();
            el = document.createElement(thisFirstElementChildTagName);
            el.innerHTML = '';
            el.id = unix;
            el.style = thisFirstElementChildStyle;
            el.className = "inserted_div";
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
    $(node).insertAfter(document.getElementById(thisResult.id));
            
              
              var childCounter = 1;
            while(thisFirstElementChild.firstElementChild != null){
            var firstElementChildTagName = thisFirstElementChild.firstElementChild.tagName;
            var firstElementChildStyle = thisFirstElementChild.firstElementChild.style.cssText;
            thisFirstElementChild = thisFirstElementChild.firstElementChild;
            childEl = document.createElement(firstElementChildTagName);   //  working on these few lines   Need to declare tag name
            childEl.innerHTML = '';
            childEl.id = unix + childCounter;
            initialFocus = unix + childCounter;
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            var docFrag = document.createDocumentFragment();
            childNode = childEl;
              lastNode = docFrag.appendChild(childNode);
              document.getElementById(unix + childCounter - 1).appendChild(childNode);
              childCounter ++;
            }
              
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
document.getElementById("format" + styleToAdd). style.fontWeight ="normal";
              }
			}else{  // if chosen format is already
			thisResult = document.getElementById(parentElementId);
            el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            var docFrag = document.createDocumentFragment();  // The createDocumentFragment() method creates an offscreen node.
            node = el;
              lastNode = docFrag.appendChild(node);
    $(node).insertAfter(document.getElementById(parentElementId));
              var childCounter = 1;
            while(thisResult.firstElementChild != null){
            var thisFirstElementChild = thisResult.firstElementChild;
            var firstElementChildTagName = thisFirstElementChild.firstElementChild.tagName;
            var firstElementChildStyle = thisFirstElementChild.firstElementChild.style.cssText;
            thisFirstElementChild = thisFirstElementChild.firstElementChild;
            childEl = document.createElement(firstElementChildTagName);
            childEl.innerHTML = '';
            childEl.id = unix + childCounter;
            var initialFocus = childEl.id;
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            var docFrag = document.createDocumentFragment();
            childNode = childEl;
              lastNode = docFrag.appendChild(childNode);
              document.getElementById(unix + childCounter - 1).appendChild(childNode);
              childCounter ++;
            }
document.getElementById("format" + styleToAdd).style.fontWeight = "normal";
			}
		}
              sel.addRange(range);
            style_added = true;
document.getElementById(initialFocus).contentEditable = true;
setTimeout(setEditableAndFocus(initialFocus), 200);
		
	
	}else{  // end if no text  selected
	if(parentElementTagName.toLowerCase() != styleToAdd.toLowerCase()){
    newNode = document.createElement(styleToAdd);
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
    var newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	var segmentToEdit = document.getElementById(unix).innerHTML;
        var regExp = new RegExp(styleToAdd, 'g');
    var newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
		}else{
		var toReplace = parentOuterHTML;
		var replaceWith = document.getElementById(parentElementId).innerHTML;
		newInputText = document.getElementById("estrte_content_wrapper").innerHTML.replace(toReplace, replaceWith);
		}
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = newInputText; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
	var pre_edit_value = estrte_fragments_log[0].pre_edit;
	var post_edit_value = estrte_fragments_log[0].post_edit;
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			
			existingHTML = $('#estrte_input_field').html();
 }
 
function estrte_setColor(todo){
  	estrte_prevDelete = 'no';
  	estrte_prevAdd = 'no';
 	var red = document.getElementById("redComp").value;
 	var green = document.getElementById("greenComp").value;
 	var blue = document.getElementById("blueComp").value;
     if(estrte_action == "set_background"){
     	estrte_setBackgroundColor();
     }else{
  	if(todo == 'shade'){
    if(document.getElementById("tempRed").value != 'u'){
    	var tempRed = document.getElementById("tempRed").value;
    }else{
    	var tempRed = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != 'u'){
    	var tempGreen = document.getElementById("tempGreen").value;
    }else{
    	var tempGreen = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != 'u'){
    	var tempBlue = document.getElementById("tempBlue").value;
    }else{
    	var tempBlue = document.getElementById("blueComp").value;
    }
 		console.log(tempRed + " - " + tempGreen + " - " + tempBlue);
      var shade = document.getElementById("shadeComp").value / 50;
  	document.getElementById("tempRed").value = tempRed;
 	document.getElementById("tempGreen").value = tempGreen;
 	document.getElementById("tempBlue").value = tempBlue;
 	if(shade <= 1){
red = tempRed * shade;
green = tempGreen * shade;
blue = tempBlue * shade; 
	}else{
red = 255 -((225 - tempRed) * (2 - shade));
green = 255 -((225 - tempGreen) * (2 - shade));
blue = 255 -((225 - tempBlue) * (2 - shade)); 
 		}
 		console.log(shade + " - " + tempRed + " - " + tempGreen + " - " + tempBlue);
  	}else{
    document.getElementById("tempRed").value = "u";
 	document.getElementById("tempGreen").value = "u";
 	document.getElementById("tempBlue").value = "u";
  	}
 	document.getElementById("redComp").value = red;
 	document.getElementById("greenComp").value = green;
 	document.getElementById("blueComp").value = blue;
 	var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
     
    document.getElementById('estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix = Math.round(+date / 1000) + Math.floor(Math.random() * 1000);
if(estrte_colorSelected == 'no'){
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
      parentElementId =  window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{ 
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.innerHTML;
existingSegment = selectedTextString;
  var regExp = new RegExp(' ', 'g');
			
			if(selectedText == ''){
document.getElementById("estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        for(i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        }
				if(estrte_color_editing){
					console.log("estrte_color_editing " + estrte_color_editing);
				document.getElementById(estrte_color_editing).style.color = newColor;
				setTimeout(setEditableAndFocus(estrte_color_editing), 10);
				}else{
				sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.style = "color:" + newColor + ";";
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById(unix).contentEditable = true;
            style_added = true;
          }
          if(document.getElementById(unix)){
estrte_to_focus = unix;
				}else{
				}
				}
setTimeout(setEditableAndFocus(estrte_to_focus), 10);
estrte_color_editing = estrte_to_focus;
			}else{
				
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    	
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
	
    newNode = document.createElement('div');
                    newNode.setAttribute("class", "inserted_div");
                    newNode.setAttribute("id", unix);
                    newNode.setAttribute("style", "color:" + newColor + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                   
    var newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	var segmentToEdit = document.getElementById(unix).innerHTML;
        var regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    var newSegmentToEdit = segmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/color\:\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = newInputText; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
	var pre_edit_value = estrte_fragments_log[0].pre_edit;
	var post_edit_value = estrte_fragments_log[0].post_edit;
			}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			
			existingHTML = $('#estrte_content_wrapper').html();
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
		    newDivColor = newSoFar;
	}else{ // end if estrte_colorSelected == no?
    var regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    var newEditedDivColor = newDivColor.replace(regExp, newColor);  	
    var newNewInputText = newInputText.replace(newDivColor, newEditedDivColor); 
           document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = document.getElementById("estrte_content_wrapper").innerHTML;
	estrte_fragments_log[0].post_edit = newEditedDivColor;
}  
}
}
 
 function estrte_add_paragraph(){
    estrte_color_editing = false;
 	    document.getElementById('estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
      parentElementId =  window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = window.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = document.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{ 
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
      parentOuterHTML = window.selection().anchorNode.parentElement.outerHTML;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.outerHTML;
existingSegment = selectedTextString;
  var regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			if(selectedText == ''){
				sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
document.getElementById("estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementsByClassName("inserted_div");
          inserted_divsLength = inserted_divs.length;
        for(i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        }  
        
         
         var inserted_elements = document.getElementsByClassName("inserted_div");
         var first_layer_inserted_elements = new Array();
            for(i=0; i<inserted_elements.length; i++){
         		first_layer_inserted_elements.unshift(inserted_elements[i]);
         		if(inserted_elements[i].parentElement.id == "estrte_input_field"){
         			var insertAfterElement = inserted_elements[i];
         		}
         }
         //console.log(first_layer_inserted_elements.length + " first layer inserted elements");
            el = document.createElement("p");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            var docFrag = document.createDocumentFragment();  // The createDocumentFragment() method creates an offscreen node.
            node = el;
              lastNode = docFrag.appendChild(node);  
        if(first_layer_inserted_elements.length > 0){
    $(node).insertAfter(insertAfterElement);
			}else{
        
            range.insertNode(docFrag);
			}
document.getElementById(unix).contentEditable = true;
setTimeout(setEditableAndFocus(unix), 200);
          }
			}else{
    newNode = document.createElement('p');
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                   
    var newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	var segmentToEdit = document.getElementById(unix).innerHTML;
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = newInputText; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
	var pre_edit_value = estrte_fragments_log[0].pre_edit;
	var post_edit_value = estrte_fragments_log[0].post_edit;
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			
			existingHTML = $('#estrte_input_field').html();
}
 
function estrte_undo(){
    estrte_color_editing = false;
	var editFrom = estrte_fragments_log[0].post_edit;
	var editTo = estrte_fragments_log[0].pre_edit;
           document.getElementById("estrte_content_wrapper").innerHTML = editTo;
           document.getElementById("estrte_content").value = document.getElementById("estrte_content_wrapper").innerHTML;
 estrte_fragments_log.shift();
 if(estrte_fragments_log.length == 0){
 	document.getElementById("estrte_undo").style.display = "none";
 }else{
document.getElementById("estrte_undo").style.display = "inline-block";
document.getElementById("estrte_undo").innerHTML = "Undo";
	}
new_undo_log = {"pre_edit": editFrom, "post_edit": editTo, "type_of_edit": "Edit"}; 
	estrte_undo_log.unshift(new_undo_log);
	var redoLength = estrte_undo_log.length;
 if(estrte_undo_log.length == 0){
 	document.getElementById("estrte_redo").style.display = "none";
 }else{
 	document.getElementById("estrte_redo").innerHTML = "Redo ";
 	document.getElementById("estrte_redo").style.display = "inline-block";
	}
           document.getElementById("estrte_content_wrapper").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
           document.getElementById("estrte_input_cont").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
}
function estrte_redo(){
    estrte_color_editing = false;
	 editTo = estrte_undo_log[0].post_edit;
	 editFrom = estrte_undo_log[0].pre_edit;
           document.getElementById("estrte_content_wrapper").innerHTML = editFrom;
           document.getElementById("estrte_content").value = document.getElementById("estrte_content_wrapper").innerHTML; 
 estrte_undo_log.shift();
 if(estrte_undo_log.length == 0){
 	document.getElementById("estrte_redo").style.display = "none";
 }else{
 	document.getElementById("estrte_redo").innerHTML = "Redo";
 	document.getElementById("estrte_redo").style.display = "inline-block";
	}	
new_log = {"pre_edit": editTo, "post_edit": editFrom, "type_of_edit": "Edit"}; 
estrte_fragments_log.unshift(new_log);
 if(estrte_fragments_log.length == 0){
 	document.getElementById("estrte_undo").style.display = "none";
 }else{ 
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	}
        document.getElementById("estrte_input_field").addEventListener("click", setFocus);
			existingHTML = $('#estrte_content_wrapper').html();
	        tempAfterDelete = $('#estrte_content_wrapper').html();
           document.getElementById("estrte_content_wrapper").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
           document.getElementById("estrte_input_cont").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
}
function show_select_table(){
    estrte_color_editing = false;
	if(! table_spec_active){
		table_spec_active = true;
    document.getElementById('estrte_docFrag').innerHTML = "";
    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
      parentElementId =  window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{ 
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.innerHTML;
existingSegment = selectedTextString;
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
				sel = window.getSelection();
            el = document.createElement("div");
            var table_html = '<div class="table_spec_form" id="table_spec_form"><div id="table_spec_heading">Table Properties<span class="close_window" title="Close" onclick="close_add_table()">x</span></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Heading</label></div><div class="table_spec_input"><input type="text" name="table_caption" id="table_caption" /></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Rows</label></div><div class="table_spec_input"><select name="no_of_rows_select" id="no_of_rows_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Columns</label></div><div class="table_spec_input"><select name="no_of_columns_select" id="no_of_columns_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Border</label></div><div class="table_spec_input"><select name="border_select" id="border_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Spacing</label></div><div class="table_spec_input"><select name="cellspacing_select" id="cellspacing_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Padding</label></div><div class="table_spec_input"><select name="cellpadding_select" id="cellpadding_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Headers</label></div><div class="table_spec_input"><select name="select_headers" id="select_headers"><option value="">None</option><option value="firstRow">First Row</option><option value="firstColumn">First Column</option><option value="both">Both</option></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label id="addTableButton" unselectable="on" onclick="add_table(' + unix + ')">Add</label></div></div></div>';
            el.innerHTML = table_html;
            el.id = "table_spec_" + unix;
            el.className = "table_spec_div";
				if((parentElementId != 'estrte_input_field') && (parentElementId != 'estrte_content_wrapper')){
					let thisLastSibling;
				firstChild = document.getElementById("estrte_input_field").firstChild;
				if(firstChild != null){
			let lastSibling = firstChild;
			let thisChild = firstChild;
                       	thisLastSibling = lastSibling;
			    while(lastSibling = thisChild.nextSibling){
			    	thisChild = lastSibling;
                       if((lastSibling != undefined) && (lastSibling != null)){
                       	thisLastSibling = lastSibling;
                       }
                                  }
      $(el).insertAfter(thisLastSibling);
				}else{
	  document.getElementById("estrte_input_field").appendChild(el);
				}

				}else{
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
		}
	}

for (i = 1; i <= estrte_number_of_table_column_options; i++) {
  document.getElementById("no_of_columns_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (i = 1; i <= estrte_number_of_table_row_options; i++) {
  document.getElementById("no_of_rows_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (i = 1; i <= estrte_border_options; i++) {
  document.getElementById("border_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (i = 1; i <= estrte_table_padding_options; i++) {
  document.getElementById("cellpadding_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (i = 1; i <= estrte_cell_spacing_options; i++) {
  document.getElementById("cellspacing_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}

              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			//console.log(estrte_fragments_log);
			
			existingHTML = $('#estrte_input_field').html();
	}
}
function add_table(){
    estrte_color_editing = false;
    var insertAfterElement = '';
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
	
    const date = new Date();
var unix = Math.round(+date / 1000);
	var no_of_rows = parseInt(document.getElementById("no_of_rows_select").value);
	var no_of_columns = parseInt(document.getElementById("no_of_columns_select").value);
	var table_caption = document.getElementById("table_caption").value;
	var table_headings = document.getElementById("select_headers").value;
	var border = document.getElementById("border_select").value;
	var cellspacing = document.getElementById("cellspacing_select").value;
	var cellpadding = document.getElementById("cellpadding_select").value;
	var rows_loop_start = 1;
	var first_row = "";
	//console.log(no_of_columns + " - " + no_of_rows + " - " + table_caption + " - " + table_headings);
	table_html = '<table class="input_table" style="overflow-x:auto;border:' + border + ';cellspacing=' + cellspacing + ';cellpadding=' + cellpadding + ';"><tbody><div class="table_header" id="table_header' + unix + '">' + table_caption + '</div>';
	if((table_headings == "firstRow") || (table_headings == "both")){
		rows_loop_start++;
		table_html += '<tr>';
	for (j = 1; j <= no_of_columns; j++) {
			table_html += '<th></th>';
		}
		table_html += '</tr>';
	}
	for (i = rows_loop_start; i <= no_of_rows; i++) {
		table_html += '<tr>';
	for (j = 1; j <= no_of_columns; j++) {
		if((j == 1) && ((table_headings == "firstColumn") || (table_headings == "both"))){
			table_html += '<th></th>';
		}else{
			table_html += '<td></td>';
		}
		}
		table_html += '</tr>';
	}
		table_html += '</tbody></table>';

   inserted_divs = document.getElementsByClassName("inserted_div");
   var first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
          if(inserted_divsLength == 0){
          	if(document.getElementById("estrte_input_field").children.length > 0){
             insertAfterElement = document.getElementById("estrte_input_field").firstChild;
          	}
          }else{
        for(let i = 0; i < inserted_divsLength; i++){
                  insertAfterElement = inserted_divs[i];
                  first_layer_inserted_elements.unshift(inserted_divs[i]);
        }  
        }

            el = document.createElement("div");
            el.innerHTML = table_html;
            el.id = unix;
            el.className = "inserted_div";
            node = el;
            if(insertAfterElement == ''){
            document.getElementById("estrte_input_field").appendChild(node);
            }else{
    $(node).insertAfter(insertAfterElement);
	}
    
	var cellWidth = getComputedStyle(document.getElementsByTagName("td")[0]).getPropertyValue('width');
	cellWidth = cellWidth.substring(0, cellWidth.indexOf("px"));
	document.getElementById("table_header" + unix).style.width = (cellWidth * no_of_columns) + "px";

    inserted_divs = document.getElementsByClassName("inserted_div");
   var first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 var styledElement = inserted_divs[inserted_divsLength - 2]

            el = document.createElement("div");
            el.innerHTML = '<span>-</span>';
            el.id = unix + 11;
            el.className = "inserted_div";
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            node = el;
    $(node).insertAfter(insertAfterElement);
setTimeout(setEditableAndFocus(unix + 11), 200);

			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = newInputText; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
 	table_spec_active = false;
 	estrte_show_table_spec_div();
}
function show_select_link(){
    estrte_color_editing = false;
	if(! link_spec_active){
link_spec_active = true;
       document.getElementById('estrte_docFrag').innerHTML = "";
    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{
      parentElementId =  window.getSelection().anchorNode.parentElement.id;
      parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
      parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            }  else{
         parentElementId =  document.getSelection().anchorNode.parentElement.id;
         parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	var selectionNull = true;
	            } else{ 
         parentElementId =  document.selection().anchorNode.parentElement.id;
         parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
         parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
selectedTextString = selectedText.toString();
selectedTextOuterHTML = selectedText.innerHTML;
existingSegment = selectedTextString;
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
				sel = window.getSelection();
            el = document.createElement("div");
            var link_html = '<div class="table_spec_form" id="link_spec_form"><div id="table_spec_heading">Add Link<span class="close_window" title="Close" onclick="close_add_link()">x</span></div>';
            link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Text</label></div><div class="table_spec_input"><input type="text" name="link_text" id="link_text" /></div></div>';
            link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>URL</label></div><div class="table_spec_input"><input type="text" name="link_url" id="link_url" /></div></div>';
            link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label id="addTableButton" unselectable="on" onclick="add_link(' + unix + ')">Add</label></div></div></div>';
            el.innerHTML = link_html;
            el.id = "link_spec_" + unix;
            el.className = "table_spec_div";
				if((parentElementId != 'estrte_input_field') && (parentElementId != 'estrte_content_wrapper')){
					let thisLastSibling;
				firstChild = document.getElementById("estrte_input_field").firstChild;
				if(firstChild != null){
			let lastSibling = firstChild;
			let thisChild = firstChild;
                       	thisLastSibling = lastSibling;
			    while(lastSibling = thisChild.nextSibling){
			    	thisChild = lastSibling;
                       if((lastSibling != undefined) && (lastSibling != null)){
                       	thisLastSibling = lastSibling;
                       }
                                  }
      $(el).insertAfter(thisLastSibling);
				}else{
	  document.getElementById("estrte_input_field").appendChild(el);
				}

				}else{
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var docFrag = document.createDocumentFragment();
            node = el;
              lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
		}
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
			number_of_edits = estrte_fragments_log.length;
			//console.log(estrte_fragments_log);
			
			existingHTML = $('#estrte_input_field').html();
}
}

function add_link(){
    estrte_color_editing = false;
    var insertAfterElement = '';
    var date = new Date();
var unix = Math.round(+date / 1000);
	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
	var link_text = document.getElementById("link_text").value;
	var link_url = document.getElementById("link_url").value;
var link_html = '<a href=' + link_url + '>' + link_text + '</a>';
    
    
    
   inserted_divs = document.getElementsByClassName("inserted_div");
   var first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
          if(inserted_divsLength == 0){
          	if(document.getElementById("estrte_input_field").children.length > 0){
             insertAfterElement = document.getElementById("estrte_input_field").firstChild;
          	}
          }else{
        for(let i = 0; i < inserted_divsLength; i++){
                  insertAfterElement = inserted_divs[i];
                  first_layer_inserted_elements.unshift(inserted_divs[i]);
        }  
	}

            el = document.createElement("div");
            el.innerHTML = link_html;
            el.id = unix;
            el.className = "inserted_div";
            node = el;
            if(insertAfterElement == ''){
            document.getElementById("estrte_input_field").appendChild(node);
            }else{
    $(node).insertAfter(insertAfterElement);
	}
    
    inserted_divs = document.getElementsByClassName("inserted_div");
   var first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 var styledElement = inserted_divs[inserted_divsLength - 2]

            el = document.createElement("div");
            el.innerHTML = '<span>-</span>';
            el.id = unix + 11;
            el.className = "inserted_div";
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            alert(insertAfterElement.id + " - " + styledElement.style.cssText);
            node = el;
    $(node).insertAfter(insertAfterElement);
setTimeout(setEditableAndFocus(unix + 11), 200); 


			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = newInputText; 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Edit";
 	link_spec_active = false;
 	estrte_show_select_link_div();
}
 function  estrte_show_select_color_div(){
    estrte_color_editing = false;
document.getElementById("estrte_select_color_div").innerHTML = estrte_select_colour_div_html;
        estrte_populate_colour_div('');
		$("#estrte_select_color_div").toggle(estrte_toggle_speed);
 }
function estrte_populate_colour_div(holder){
    estrte_color_editing = false;
    for (i = 0; i < estrte_rgb_colors.length; i++) {
                    var unix = new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById("estrte_setColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_rgb_colors[i] + ');background-color:rgb(' + estrte_rgb_colors[i] + ');" onclick="estrte_setSetColor(' + estrte_rgb_colors[i] + ', 10)">Red</label></div>';
  if(estrte_rgb_colors[i] == "255, 255, 255"){
  	document.getElementById(thisId).style.border = 'solid 0.1px #8b8b8b';
  	document.getElementById("estrte_color_monitor").style.border = 'solid 0.3px #8b8b8b';
  }else{
  	document.getElementById("estrte_color_monitor").style.border = "0";
  }
}
for (i = 0; i < estrte_lower_rgb_colors.length; i++) {
                    var unix = new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById("estrte_lowerSetColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_lower_rgb_colors[i] + ');background-color:rgb(' + estrte_lower_rgb_colors[i] + ');" onclick="estrte_setSetColor(' + estrte_lower_rgb_colors[i] + ', 10)">Red</label></div>';
  if(estrte_lower_rgb_colors[i] == "255, 255, 255"){
  	document.getElementById(thisId).style.border = 'solid 0.3px #8b8b8b';
  	document.getElementById("estrte_color_monitor").style.border = 'solid 0.3px #8b8b8b';
  }else{
  	document.getElementById("estrte_color_monitor").style.border = "0";
  }
}
}
function estrte_show_select_estrte_emojis_div(){
    estrte_color_editing = false;
	    $("#estrte_select_estrte_emojis_div").toggle(estrte_toggle_speed);
}
function estrte_show_select_special_characters_div(){
    estrte_color_editing = false;
	    $("#estrte_select_special_chars_div").toggle(estrte_toggle_speed);
}
function estrte_show_table_spec_div(){
	    $("#estrte_table_spec_div").toggle(estrte_toggle_speed);
}
function estrte_show_select_link_div(){
	    $("#estrte_link_spec_div").toggle(estrte_toggle_speed);
}

 function estrte_setShade(){
    var shade = document.getElementById("shadeComp").value / 50;
    if(document.getElementById("tempRed").value != ''){
    	var redValue = document.getElementById("tempRed").value;
    }else{
    	var redValue = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != ''){
    	var greenValue = document.getElementById("tempGreen").value;
    }else{
    	var greenValue = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != ''){
    	var blueValue = document.getElementById("tempBlue").value;
    }else{
    	var blueValue = document.getElementById("blueComp").value;
    }
  	document.getElementById("tempRed").value = redValue;
 	document.getElementById("tempGreen").value = greenValue;
 	document.getElementById("tempBlue").value = blueValue; 
 	if(shade <= 1){
 newRedValue = redValue * shade;
 newGreenValue = greenValue * shade;
 newBlueValue = blueValue * shade; 
	}else{
 newRedValue = 255 -((225 - redValue) * (2 - shade));
 newGreenValue = 255 -((225 - greenValue) * (2 - shade));
 newBlueValue = 255 -((225 - blueValue) * (2 - shade)); 
 		}
 	document.getElementById("redComp").value = newRedValue;
 	document.getElementById("greenComp").value = newGreenValue;
 	document.getElementById("blueComp").value = newBlueValue;
 	var newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
 //	document.getElementById("estrte_color_monitor").style.backgroundColor = document.getElementById("estrte_color_monitor").style.backgroundColor;
           document.getElementById("estrte_content").value = document.getElementById("estrte_input_field").innerHTML;
//     estrte_setColor();
     if(estrte_action == "set_background"){
  document.getElementById("estrte_input_field").style.backgroundColor = newColor;
     } else {
    estrte_setColor();
      }
 }
 
 function estrte_setBackgroundColor(){	if(estrte_fragments_log.length > 0){
       var origInputText = estrte_fragments_log[0].post_edit;
	}else{
       var origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
  	var red = document.getElementById("redComp").value;
 	var green = document.getElementById("greenComp").value;
 	var blue = document.getElementById("blueComp").value;
 	var shade = document.getElementById("shadeComp").value;
 	var preColor = document.getElementById("estrte_input_field").style.backgroundColor;
           document.getElementById("estrte_content").value = document.getElementById("estrte_content_wrapper").innerHTML; 
 	var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById("tempRed").value = red;
 	document.getElementById("tempGreen").value = green;
 	document.getElementById("tempBlue").value = blue;
 	document.getElementById("shadeComp").value = shade;	
 	document.getElementById("estrte_input_field").style.backgroundColor = document.getElementById("estrte_color_monitor").style.backgroundColor;
 	document.getElementById("estrte_input_cont").style.backgroundColor = document.getElementById("estrte_color_monitor").style.backgroundColor;
 	document.getElementById("estrte_content_wrapper").style.backgroundColor = document.getElementById("estrte_color_monitor").style.backgroundColor;
 	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
    new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Background Edit"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo Background Edit";
// 	estrte_action = "set_background";
 }
 
 function estrte_setSetColor(red, green, blue, alpha){
  	document.getElementById("redComp").value = red;
 	document.getElementById("greenComp").value = green;
 	document.getElementById("blueComp").value = blue;
 	var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  	document.getElementById("tempRed").value = red;
 	document.getElementById("tempGreen").value = green;
 	document.getElementById("tempBlue").value = blue;
 	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
 	document.getElementById("shadeComp").value = 50;
    estrte_setContentColor();
}
 
 function estrte_setContentColor(){
 	var red = document.getElementById("redComp").value;
 	var green = document.getElementById("greenComp").value;
 	var blue = document.getElementById("blueComp").value;
 	var newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById("tempRed").value = red;
 	document.getElementById("tempGreen").value = green;
 	document.getElementById("tempBlue").value = blue;
 	document.getElementById("shadeComp").value = 50;
 	estrte_setColor();
 }
 function estrte_setContentShade()
 {
    var shade = document.getElementById("shadeComp").value / 100;
        if(document.getElementById("tempRed").value != ''){
    	var redValue = document.getElementById("tempRed").value;
    }else{
    	var redValue = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != ''){
    	var greenValue = document.getElementById("tempGreen").value;
    }else{
    	var greenValue = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != ''){
    	var blueValue = document.getElementById("tempBlue").value;
    }else{
    	var blueValue = document.getElementById("blueComp").value;
    }
	document.getElementById("tempRed").value = redValue;
 	document.getElementById("tempGreen").value = greenValue;
 	document.getElementById("tempBlue").value = blueValue; 
 newRedValue = redValue * shade;
 newGreenValue = greenValue * shade;
 newBlueValue = blueValue * shade;
  	document.getElementById("redComp").value = newRedValue;
 	document.getElementById("greenComp").value = newGreenValue;
 	document.getElementById("blueComp").value = newBlueValue;
 	var newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
 	estrte_add_style('color', newColor);
 }
 
 function show_category_emojis(category){
	    $("#emojis_show"+ category).toggle(estrte_toggle_speed);
 	}
 function close_add_table(){
document.getElementById("table_spec_form").remove();
 	table_spec_active = false;
}
 function close_add_link(){
document.getElementById("link_spec_form").remove();
 	link_spec_active = false;
}
 function ancestor(node, match){  
  if(!node)
  {
    return null;
  }
  else if(!node.nodeType || typeof(match) != 'string')
  {
    return node;
  }
  if((match = match.split('.')).length === 1)
  {
// 	alert(match);
    match.push(null);
  }
  else if(!match[0])
  {
//  	alert("match at 0 not");
    match[0] = null;
  }
  do
  {
    if
    (
      (
        !match[0]
        ||
        match[0].toLowerCase() == node.nodeName.toLowerCase())
      &&
      (
        !match[1]
        ||
        new RegExp('( |^)(' + match[1] + ')( |$)').test(node.className)
      )
    )
  //  alert("we have a match");
    {
      break;
    }
  }
  while(node = node.parentNode);

  return node;
}
