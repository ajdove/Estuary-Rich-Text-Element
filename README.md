Estuary RTE (Rich Text Element) is an input component to be used as part of a HTML form.  It is written completely in vanilla Javascript.

TO INSTALL:
Upload est_rte folder to root folder of project.
On the page with the form which will contain the rich text editor:
i)     In the <head></head> section include:
            <link rel="stylesheet" href="est_rte/css/estrte_style.css">
        It is advisable to include the following in the <head> section in order to compensate for older browsers -
            <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
                     
ii)    At the place where you wish to place the rich text editor input control:
             include - 'est_rte/estrte_form.html'
                            
iii)  At the bottom of the <body> element include:
      <script type="text/javascript" src="est_rte/js/estrte_functions.js"></script>


-----------------------------------------------------------------------------------------------------------


When using a framework you may need to make some appropriate adjustments:
for example:
    when using node.js with express framework and pug as formatting engine - to enable the application to read the estrte files, you need to add the following lines of code to the index 
Javascript file: 
            
            app.use(express.static('est_rte/js'));
            app.use(express.static('est_rte/css'));
            app.use(express.static('est_rte/images'));
       And convert the file - "estrte_form.html" to a .pug file. There are online tools to do this - https://html-to-pug.com/
                     In the resulting .pug file you will need to convert the line - "img(src='est_rte/images/color_select.png' alt='')" to "img(src='/color_select.jpg' alt='')"
                     In "estrte_style.css" in the "select" selector you will need to convert the line - "background: #ffffff url('../images/select_arrow.png') 97% 5px no-repeat" to
      "background: #ffffff url('/select_arrow.png') 97% 5px no-repeat".
      Other similar edits maybe required depending on the content.



-----------------------------------------------------------------------------------------------------------

TO PROCESS THE POSTED INPUT: 
The field containg the content that is posted is the hdden field with name and id - "estrte_content". 

 
-----------------------------------------------------------------------------------------------------------



TO CUSTOMISE:
 The Estuary RTE is highly customisable to suit the theme of the containing web-page. A basic understanding of HTML and CSS is assumed. 
! IT IS HIGHLY RECOMMENDED TO MAKE BACKUP COPIES OF ALL FILES BEFORE MAKING ANY EDITS 

The input field can be renamed to any legal value as long as the name is unique and does not clash with any other names. It is advisable to rename only if absolutely necessary. 
To rename the field, all instances of "estrte_content" must be replaced with the new name in all of the .js files in the "js" folder.

The file "js/estrte_functions.js contains various default values as well as arrays of options for selections. These can be added to and removed as required. These names are hopefully self-explanitary. It is important when editing / adding / removing defaults and options that the same format is used. For example "estrte_default_text_color" must always be in the "red-green-blue" format in order for the functions to operate correctly. 
DO NOT MAKE ANY EDITS BELOW THE LINE THAT READS - "/* DO NOT MAKE ANY EDITS BELOW THIS LINE */"
 
emojis to add to the list can be found online. For example:
   https://texteditor.com/emoji/
to get special characters to add - for example:
   https://www.rapidtables.com/code/text/unicode-characters.html

The file "estrte_form.html" contains the rich text element and the associated toolbar. 
Any features that are not required for your project can be deleted or commented out.

The file "css/estrte_style.css" contains the formatting styles for the rich text element. These can be edited to suit your particular requirements. The settings in the ":root" selector at the top of the file are general settings for the whole project. These are the settings which you will most likely want to edit. Any edits in the :root selector must maintain the same format so that they can be read by other settings in the css file.
Other individual settings can be edited in the css file but always be careful.
 To make the dropdown sections on the toolbar automatically: set "display:inline-block" on the relevant selectors.
To change the images displaying in the toolbar simply replace The image files in the "est_rte/images" . Make sure of course that they are of similar size to the existing ones.




