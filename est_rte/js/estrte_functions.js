const estrte_number_of_table_row_options = 18;
const estrte_number_of_table_column_options = 8;
const estrte_table_padding_options = 4;
const estrte_cell_spacing_options = 4;
const estrte_border_options = 4;
const estrte_default_text_color = "75, 75,75";
const estrte_default_background_color = "255, 255, 255";
const estrte_default_font = "Arial";
const estrte_default_font_size = "16";
const estrte_animation_dur = 148; // number of milliseconds for toggle elements such as "show colors" ans "show emojis" to open / close.
const estrte_emoji_categories = ["symbols", "faces", "people", "animals", "nature", "activity", "objects", "food", "travel"];
var estrte_textColor = getComputedStyle(document.getElementById("estrte_color_monitor")).getPropertyValue('--text-color');
var estrte_textColorArray = estrte_textColor.substring(estrte_textColor.indexOf('(') + 1, estrte_textColor.indexOf(')')).split(",");

let estrte_select_colour_div_html = '<div class="table_spec_form" id="link_spec_form"><div class="spec_features_head">Colours<div class="close_window" title="Close" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
estrte_select_colour_div_html +='<div class="estrte_color_pallette" id="estrte_color_pallette">';
estrte_select_colour_div_html += '<div class="estrte_colorRowCont"><div id="estrte_setColorRow"></div>';
estrte_select_colour_div_html += '<div class="estrte_LowerSetColorRow" id="estrte_lowerSetColorRow"></div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_slidecontainer" contentEditable = false><label for="redComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Red</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[0];
estrte_select_colour_div_html += '" step=1 class="slider" name="redComp" id="redComp" inputmode="none" oninput="estrte_setColor(\'red\')">';
estrte_select_colour_div_html += '<label for="greenComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Green</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[1];
estrte_select_colour_div_html += '" step=1 class="slider" name="greenComp" id="greenComp" inputmode="none" oninput="estrte_setColor(\'green\')">';
estrte_select_colour_div_html += '<label for="blueComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Blue</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[2];
estrte_select_colour_div_html += '" step=1 class="slider" name="blueComp" id="blueComp" inputmode="none" oninput="estrte_setColor(\'blue\')">';
estrte_select_colour_div_html += '<label for="shadeComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Shade</label><input type="range" class="estrte_toolbar_slider" min="0" max="100" value="50" step=1 class="slider" name="shadeComp" id="shadeComp" inputmode="none" oninput="estrte_setColor(\'shade\')">';
estrte_select_colour_div_html += '<input type="hidden" name="tempRed" id="tempRed" value="u" /><input type="hidden" name="tempGreen" id="tempGreen" value="u" /><input type="hidden" name="tempBlue" id="tempBlue" value="u" />';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_colorPickerDivLower" id="estrte_colorPickerDivLower"><label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelColor" onclick="estrte_setColor(\'color\')">Set Color</label>';
estrte_select_colour_div_html += '<label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelBgColor" onclick="estrte_setBackgroundColor()">Set Background</label></div><div class="close_window" title="Close" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div>d</div>';

            let table_html = '<div class="table_spec_form" id="table_spec_form"><div class="spec_features_head">Table Properties<span class="close_window" title="Close" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Heading</label></div><div class="table_spec_input"><input type="text" name="table_caption" id="table_caption" /></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Rows</label></div><div class="table_spec_input"><select name="no_of_rows_select" id="no_of_rows_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Columns</label></div><div class="table_spec_input"><select name="no_of_columns_select" id="no_of_columns_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Border</label></div><div class="table_spec_input"><select name="border_select" id="border_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Spacing</label></div><div class="table_spec_input"><select name="cellspacing_select" id="cellspacing_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Padding</label></div><div class="table_spec_input"><select name="cellpadding_select" id="cellpadding_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Headers</label></div><div class="table_spec_input"><select name="select_headers" id="select_headers"><option value="">None</option><option value="firstRow">First Row</option><option value="firstColumn">First Column</option><option value="both">Both</option></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label class="addTableButton" unselectable="on" onclick="add_table()">Add</label></div></div><div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';




let link_html = '<div class="table_spec_form" id="link_spec_form"><div class="spec_features_head">Add Link<span class="close_window" title="Close" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Text</label></div><div class="table_spec_input"><input type="text" name="link_text" id="link_text" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>URL</label></div><div class="table_spec_input"><input type="text" name="link_url" id="link_url" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><div class="table_spec_input"><label class="addTableButton" unselectable="on" onclick="add_link()">Add</label></div></div></div><div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';


/*  Styles included  */
const estrte_styles = ['font-family', 'font-size', 'font-weight', 'font-style', 'color'];
/* formats */
const estrte_formats = ['font-weight', 'font-style', 'text-decoration'];
/* Fonts in dropdown select */
const estrte_fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];
/* Font sizes in dropdown select */
const estrte_font_sizes = ["10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "36", "42", "48", "60", "72", "84", "96", "108", "126", "144", "168", "192", "216", "238", "260", "288"];
const estrte_rgb_colors = ["255, 0, 0", "255, 118, 0", "255, 255, 0", "0, 255, 0", "0, 0, 255", "238, 130, 238", "255, 255, 255", "125, 125, 125"];
const estrte_lower_rgb_colors = [ "125, 0, 0", "155, 78, 0", "155, 155, 0", "0, 125, 0", "0, 0, 125", "106, 90, 205", "180, 180, 180", "0, 0, 0"];
const xestrte_emojis = ['&#128512;', '&#128525;', '&#128151;'];
const estrte_special_chars = ['e\u02e3', '\u2720', '\u2724', '\u00A2', '\u20AC', '\u00A5', '\u20B9', '\u20A8', '\u20B1', '\u20A9', '\u0E3F', '\u20AB', '\u20AA', '\u2022', '\u25E6', '\u2219', '\u2023', '\u2043', '\u00B0', '\u221E', '\u00A9', '\u00AE', '\u2117', '\u2122', '\u2120', '\u25E0', '\u25E1', '\u2591', '\u2592', '\u2593', '\u2702', '\u03B1', '\u03B2', '\u03B3', '\u03B4', '\u03B5', '\u03B6', '\u03B7', '\u03B8', '\u03B9', '\u03BA', '\u03BB', '\u03BC', '\u03BD', '\u03BE', '\u03BF', '\u03C0', '\u03C1', '\u03C3', '\u03C4', '\u03C5', '\u03C6', '\u03C7', '\u03C8', '\u03C9', '\u0391', '\u0392', '\u0393', '\u0394', '\u0395', '\u0396', '\u0397', '\u0398', '\u0399', '\u039A', '\u039B', '\u039C', '\u039D', '\u039E', '\u039F', '\u03A0', '\u03A1', '\u03A3', '\u03A4', '\u03A5', '\u03A6', '\u03A7', '\u03A8', '\u03A9', '\u27BD', '\u27BE', 'U+1F3FC', '\u27BF', '\u27BB', '\u27BA', '\u27B9', '\u27B3', '\u27B2', '\u27B0', '\u27B6', '\u27B7'];
//if line below can be commented out - the styles iof the containing web page will be applied;
document.getElementById("estrte_input_field").style = "font-family:" + estrte_default_font + ";font-size:" + estrte_default_font_size + "px;color:rgb(" + estrte_default_text_color + ");background-color:rgb(" + estrte_default_background_color + ");";
document.getElementById("estrte_input_cont").style = "background-color:rgb(" + estrte_default_background_color + ");";
document.getElementById("estrte_content_wrapper").style = "background-color:rgb(" + estrte_default_background_color + ");";
const estrte_inoutFieldWidth = "100%";
const estrte_inoutFieldHeight = "284px";
  const estrte_emojis = [
        {
         emoji: "👍",  category: "general", title: "Thumbs Up"
        },
        {
         emoji: "🙂",  category: "general", title: "Smiling"
        },
        {
         emoji: "👍",  category: "symbols", title: "Thumbs Up"
        },
        {
          emoji: "👎", category: "symbols", title: "Thumbs Down"
        },
        {
          emoji: "💪️", category: "symbols", title: "Muscles"
        },
        {
          emoji: "👈️", category: "symbols", title: "Pointing Right"
        },
        {
          emoji: "👉️", category: "symbols", title: "Pointing Left"
        },
        {
          emoji: "👆", category: "symbols", title: "Pointing Left"
        },
        {
          emoji: "🖕️", category: "symbols", title: "Finger Up"
        },
        {
          emoji: "👇", category: "symbols", title: "Finger Down"
        },
        {
          emoji: "🖐️", category: "symbols", title: "Wave"
        },
        {
          emoji: "👊", category: "symbols", title: "Fist"
        },
        {
          emoji: "🖐️", category: "symbols", title: ""
        },
        {
          emoji: "👏️", category: "symbols", title: "Clap Hands"
        },
        {
          emoji: "👋", category: "symbols", title: ""
        },
        {
          emoji: "📣", category: "symbols", title: ""
        },
        {
          emoji: "👄", category: "symbols", title: "Red Lips"
        },
        {
          emoji: "♨️", category: "symbols", title: ""
        },
        {
          emoji: "🎵️", category: "symbols", title: "Music"
        },
        {
          emoji: "🎶️", category: "symbols", title: "Music"
        },
        {
          emoji: "💤️", category: "symbols", title: ""
        },
        {
          emoji: "👀️", category: "symbols", title: "Big Eyes"
        },
        {
          emoji: "☢️", category: "symbols", title: ""
        },
        {
          emoji: "💅️", category: "symbols", title: ""
        },
        {
          emoji: "🤝️", category: "symbols", title: ""
        },
        {
          emoji: "👂", category: "symbols", title: ""
        },
        {
          emoji: "📢", category: "symbols", title: ""
        },
        {
          emoji: "❤️", category: "symbols", title: ""
        },
        {
          emoji: "😲️",  category: "faces", title: ""
        },
        {
         emoji: "😂", category: "faces", title: "Laughing"
        },
        {
         emoji: "😡",  category: "faces", title: ""
        },
        {
         emoji: "🤩",  category: "faces", title: ""
        },
        {
          emoji: "🤣️",  category: "faces", title: "Rolling With Laughter"
        },
        {
          emoji: "😎",  category: "faces", title: "Sunglasses"
        },
        {
         emoji: "🤑",  category: "faces", title: ""
        },
        {
         emoji: "😇",  category: "faces", title: "Halo"
        },
        {
          emoji: "🤥",  category: "faces", title: ""
        },
        {
          emoji: "🤪",  category: "faces", title: ""
        },
        {
         emoji: "😊",  category: "faces", title: "Happy"
        },
        {
         emoji: "😡",  category: "faces", title: ""
        },
        {
          emoji: "🤐",  category: "faces", title: ""
        },
        {
          emoji: "😴",  category: "faces", title: ""
        },
        {
          emoji: "🤑",  category: "faces", title: ""
        },
        {
          emoji: "🙄",  category: "faces", title: ""
        },
        {
          emoji: "😘",  category: "faces", title: ""
        },
        {
          emoji: "😖",  category: "faces", title: ""
        },
        {
          emoji: "😭",  category: "faces", title: ""
        },
        {
          emoji: "😓",  category: "faces", title: ""
        },
        {
          emoji: "😱",  category: "faces", title: ""
        },
        {
          emoji: "🤪",  category: "faces", title: ""
        },
        {
          emoji: "🤒",  category: "faces", title: ""
        },
        {
          emoji: "😒",  category: "faces", title: ""
        },
        {
          emoji: "😩",  category: "faces", title: ""
        },
        {
          emoji: "😳",  category: "faces", title: ""
        },
        {
         emoji: "🐝",  category: "nature", title: "Wasp"
        },
        {
          emoji: "🐮",  category: "nature", title: ""
        },
        {
          emoji: "🦋",  category: "nature", title: "Butterfly"
        },
        {
         emoji: "🦉",  category: "nature", title: "Owl"
        },
        {
         emoji: "🐞",  category: "nature", title: "Ladybird"
        },
        {
          emoji: "🌳",  category: "nature", title: "Oak Leaf"
        },
        {
         emoji: "🌎",  category: "nature", title: "The World"
        },
        {
         emoji: "🌈",  category: "nature", title: "Rainbow"
        },
        {
         emoji: "🌤",  category: "nature", title: ""
        },
        {
          emoji: "🌻",  category: "nature", title: "Sunflower"
        },
        {
         emoji: "🥀",  category: "nature", title: ""
        },
        {
         emoji: "🌹",  category: "nature", title: ""
        },
        {
         emoji: "☘️",  category: "nature", title: ""
        },
        {
          emoji: "🌿",  category: "nature", title: ""
        },
        {
          emoji: "🦔",  category: "nature", title: ""
        },
        {
         emoji: "🐳",  category: "nature", title: ""
        },
        {
         emoji: "🦜",  category: "nature", title: ""
        },
        {
         emoji: "🐺",  category: "nature", title: ""
        },
        {
          emoji: "🦢",  category: "nature", title: ""
        },
        {
          emoji: "🦆",  category: "nature", title: ""
        },
        {
         emoji: "🐔",  category: "nature", title: ""
        },
        {
          emoji: "🦅",  category: "nature", title: ""
        },
        {
          emoji: "🐥",  category: "nature", title: ""
        },
        {
         emoji: "🕊",  category: "nature", title: ""
        },
        {
         emoji: "🦃",  category: "nature", title: ""
        },
        {
         emoji: "☄",  category: "nature", title: ""
        },
        {
         emoji: "☃",  category: "nature", title: ""
        },
        {
         emoji: "💧",  category: "nature", title: ""
        },
        {
         emoji: "🎋",  category: "nature", title: ""
        },
        {
         emoji: "✨",  category: "nature", title: ""
        },
        {
         emoji: "🌠",  category: "nature", title: ""
        },
        {
          emoji: "🌦",  category: "animals", title: ""
        },
        {
          emoji: "🦛",  category: "animals", title: ""
        },
        {
          emoji: "🐼",  category: "animals", title: ""
        },
        {
          emoji: "🦄",  category: "animals", title: ""
        },
        {
          emoji: "🐧",  category: "animals", title: ""
        },
        {
          emoji: "🐳",  category: "animals", title: ""
        },
        {
          emoji: "🐪",  category: "animals", title: ""
        },
        {
          emoji: "🐫",  category: "animals", title: ""
        },
        {
         emoji: "🐰",  category: "animals", title: ""
        },
        {
          emoji: "🐬",  category: "animals", title: ""
        },
        {
          emoji: "🐋",  category: "animals", title: ""
        },
        {
          emoji: "🐟",  category: "animals", title: ""
        },
        {
          emoji: "🐠",  category: "animals", title: ""
        },
        {
          emoji: "🦈",  category: "animals", title: ""
        },
        {
          emoji: "🐢",  category: "animals", title: ""
        },
        {
          emoji: "🦀",  category: "animals", title: ""
        },
        {
          emoji: "🦐",  category: "animals", title: ""
        },
        {
          emoji: "🦚",  category: "animals", title: ""
        },
        {
          emoji: "🐴",  category: "animals", title: ""
        },
        {
         emoji: "🐿",  category: "animals", title: ""
        },
        {
         emoji: "🦌",  category: "animals", title: ""
        },
        {
         emoji: "🐏️",  category: "animals", title: ""
        },
        {
          emoji: "🐑",  category: "animals", title: ""
        },
        {
          emoji: "🦈",  category: "animals", title: ""
        },
        {
         emoji: "🏄",  category: "activity", title: ""
        },
        {
         emoji: "🏇",  category: "activity", title: ""
        },
        {
         emoji: "🏌",  category: "activity", title: ""
        },
        {
         emoji: "🚣",  category: "activity", title: ""
        },
        {
         emoji: "🏊",  category: "activity", title: ""
        },
        {
         emoji: "⛹",  category: "activity", title: ""
        },
        {
         emoji: "🏋",  category: "activity", title: ""
        },
        {
         emoji: "🚴",  category: "activity", title: ""
        },
        {
         emoji: "🚵",  category: "activity", title: ""
        },
        {
         emoji: "🤸",  category: "activity", title: ""
        },
        {
         emoji: "🤼",  category: "activity", title: ""
        },
        {
         emoji: "🤹",  category: "activity", title: ""
        },
        {
         emoji: "🎪",  category: "activity", title: ""
        },
        {
         emoji: "🎗",  category: "activity", title: ""
        },
        {
         emoji: "🎫",  category: "activity", title: ""
        },
        {
         emoji: "🎖",  category: "activity", title: ""
        },
        {
         emoji: "🏆",  category: "activity", title: ""
        },
        {
         emoji: "🏅",  category: "activity", title: ""
        },
        {
         emoji: "🥇",  category: "activity", title: ""
        },
        {
         emoji: "⚽",  category: "activity", title: ""
        },
        {
         emoji: "⚾",  category: "activity", title: ""
        },
        {
         emoji: "🏀",  category: "activity", title: ""
        },
        {
         emoji: "🏈",  category: "activity", title: ""
        },
        {
         emoji: "🏉",  category: "activity", title: ""
        },
        {
         emoji: "🎾",  category: "activity", title: ""
        },
        {
         emoji: "🎳",  category: "activity", title: ""
        },
        {
         emoji: "🏏",  category: "activity", title: ""
        },
        {
         emoji: "🏑",  category: "activity", title: ""
        },
        {
         emoji: "🏒",  category: "activity", title: ""
        },
        {
         emoji: "🏓",  category: "activity", title: ""
        },
        {
         emoji: "🏸",  category: "activity", title: ""
        },
        {
         emoji: "🥊",  category: "activity", title: ""
        },
        {
         emoji: "⛳",  category: "activity", title: ""
        },
        {
         emoji: "⛸",  category: "activity", title: ""
        },
        {
         emoji: "🎣",  category: "activity", title: ""
        },
        {
         emoji: "🎽",  category: "activity", title: ""
        },
        {
         emoji: "🎿",  category: "activity", title: ""
        },
        {
         emoji: "🛷",  category: "activity", title: ""
        },
        {
         emoji: "🥌",  category: "activity", title: ""
        },
        {
         emoji: "🎯",  category: "activity", title: ""
        },
        {
         emoji: "🎱",  category: "activity", title: ""
        },
        {
         emoji: "🎮",  category: "activity", title: ""
        },
        {
         emoji: "🎲",  category: "activity", title: ""
        },
        {
         emoji: "🎨",  category: "activity", title: ""
        },
        {
         emoji: "🎼",  category: "activity", title: ""
        },
        {
         emoji: "🎤",  category: "activity", title: ""
        },
        {
         emoji: "🎧",  category: "activity", title: ""
        },
        {
         emoji: "🎷",  category: "activity", title: ""
        },
        {
         emoji: "🎸",  category: "activity", title: ""
        },
        {
         emoji: "🎹",  category: "activity", title: ""
        },
        {
         emoji: "🎺",  category: "activity", title: ""
        },
        {
         emoji: "🎻",  category: "activity", title: ""
        },
        {
         emoji: "🥁",  category: "activity", title: ""
        },
        {
         emoji: "🎬",  category: "activity", title: ""
        },
        {
         emoji: "🏹",  category: "activity", title: ""
        },
        {
         emoji: "💎",  category: "objects", title: ""
        },
        {
         emoji: "👓",  category: "objects", title: ""
        },
        {
         emoji: "🕶",  category: "objects", title: ""
        },
        {
         emoji: "👔",  category: "objects", title: ""
        },
        {
         emoji: "👕",  category: "objects", title: ""
        },
        {
         emoji: "🧣",  category: "objects", title: ""
        },
        {
         emoji: "👗",  category: "objects", title: ""
        },
        {
         emoji: "👘",  category: "objects", title: ""
        },
        {
         emoji: "👛",  category: "objects", title: ""
        },
        {
         emoji: "👜",  category: "objects", title: ""
        },
        {
         emoji: "🎒",  category: "objects", title: ""
        },
        {
         emoji: "👟",  category: "objects", title: ""
        },
        {
         emoji: "👠",  category: "objects", title: ""
        },
        {
         emoji: "👡",  category: "objects", title: ""
        },
        {
         emoji: "👢",  category: "objects", title: ""
        },
        {
         emoji: "👑",  category: "objects", title: ""
        },
        {
         emoji: "👒",  category: "objects", title: ""
        },
        {
         emoji: "🎩",  category: "objects", title: ""
        },
        {
         emoji: "🎓",  category: "objects", title: ""
        },
        {
         emoji: "⛑",  category: "objects", title: ""
        },
        {
         emoji: "💄",  category: "objects", title: ""
        },
        {
         emoji: "💍",  category: "objects", title: ""
        },
        {
         emoji: "🌂",  category: "objects", title: ""
        },
        {
         emoji: "☂",  category: "objects", title: ""
        },
        {
         emoji: "💼",  category: "objects", title: ""
        },
        {
         emoji: "🚦",  category: "objects", title: ""
        },
        {
         emoji: "🚧",  category: "objects", title: ""
        },
        {
         emoji: "⚓",  category: "objects", title: ""
        },
        {
         emoji: "🛍",  category: "objects", title: ""
        },
        {
         emoji: "🏺",  category: "objects", title: ""
        },
        {
         emoji: "🗺",  category: "objects", title: ""
        },
        {
         emoji: "💈",  category: "objects", title: ""
        },
        {
         emoji: "🛢",  category: "objects", title: ""
        },
        {
         emoji: "🛎",  category: "objects", title: ""
        },
        {
         emoji: "⌛",  category: "objects", title: ""
        },
        {
         emoji: "⌚",  category: "objects", title: ""
        },
        {
         emoji: "⏰",  category: "objects", title: ""
        },
        {
         emoji: "⏱",  category: "objects", title: ""
        },
        {
         emoji: "🕰",  category: "objects", title: ""
        },
        {
         emoji: "🌡",  category: "objects", title: ""
        },
        {
         emoji: "🎈",  category: "objects", title: ""
        },
        {
         emoji: "🎉",  category: "objects", title: ""
        },
        {
         emoji: "🎊",  category: "objects", title: ""
        },
        {
         emoji: "🎐",  category: "objects", title: ""
        },
        {
         emoji: "🎀",  category: "objects", title: ""
        },
        {
         emoji: "🎁",  category: "objects", title: ""
        },
        {
         emoji: "🕹",  category: "objects", title: ""
        },
        {
         emoji: "🖼",  category: "objects", title: ""
        },
        {
         emoji: "🎙",  category: "objects", title: ""
        },
        {
         emoji: "📱",  category: "objects", title: ""
        },
        {
         emoji: "☎",  category: "objects", title: ""
        },
        {
         emoji: "📞",  category: "objects", title: ""
        },
        {
         emoji: "🔋",  category: "objects", title: ""
        },
        {
         emoji: "🔌",  category: "objects", title: ""
        },
        {
         emoji: "💻",  category: "objects", title: ""
        },
        {
         emoji: "🖥",  category: "objects", title: ""
        },
        {
         emoji: "🖱",  category: "objects", title: ""
        },
        {
         emoji: "📷",  category: "objects", title: ""
        },
        {
         emoji: "📹",  category: "objects", title: ""
        },
        {
         emoji: "🔍",  category: "objects", title: ""
        },
        {
         emoji: "🕯",  category: "objects", title: ""
        },
        {
         emoji: "💡",  category: "objects", title: ""
        },
        {
         emoji: "✉",  category: "objects", title: ""
        },
        {
         emoji: "📧",  category: "objects", title: ""
        },
        {
         emoji: "📫",  category: "objects", title: ""
        },
        {
         emoji: "📬",  category: "objects", title: ""
        },
        {
         emoji: "📮",  category: "objects", title: ""
        },
        {
         emoji: "🗳",  category: "objects", title: ""
        },
        {
         emoji: "✒",  category: "objects", title: ""
        },
        {
         emoji: "🖌",  category: "objects", title: ""
        },
        {
         emoji: "🖍",  category: "objects", title: ""
        },
        {
         emoji: "📝",  category: "objects", title: ""
        },
        {
         emoji: "📅",  category: "objects", title: ""
        },
        {
         emoji: "🗓",  category: "objects", title: ""
        },
        {
         emoji: "📈",  category: "objects", title: ""
        },
        {
         emoji: "📉",  category: "objects", title: ""
        },
        {
         emoji: "📊",  category: "objects", title: ""
        },
        {
         emoji: "📋",  category: "objects", title: ""
        },
        {
         emoji: "📌",  category: "objects", title: ""
        },
        {
         emoji: "📍",  category: "objects", title: ""
        },
        {
         emoji: "📎",  category: "objects", title: ""
        },
        {
         emoji: "🖇",  category: "objects", title: ""
        },
        {
         emoji: "📏",  category: "objects", title: ""
        },
        {
         emoji: "📐",  category: "objects", title: ""
        },
        {
         emoji: "✂",  category: "objects", title: ""
        },
        {
         emoji: "🔒",  category: "objects", title: ""
        },
        {
         emoji: "🔓",  category: "objects", title: ""
        },
        {
         emoji: "🔐",  category: "objects", title: ""
        },
        {
         emoji: "🔑",  category: "objects", title: ""
        },
        {
         emoji: "🔨",  category: "objects", title: ""
        },
        {
         emoji: "⛏",  category: "objects", title: ""
        },
        {
         emoji: "⚒",  category: "objects", title: ""
        },
        {
         emoji: "🛠",  category: "objects", title: ""
        },
        {
         emoji: "🗡",  category: "objects", title: ""
        },
        {
         emoji: "⚔",  category: "objects", title: ""
        },
        {
         emoji: "🔫",  category: "objects", title: ""
        },
        {
         emoji: "🛡",  category: "objects", title: ""
        },
        {
         emoji: "🔧",  category: "objects", title: ""
        },
        {
         emoji: "🔩",  category: "objects", title: ""
        },
        {
         emoji: "⚙",  category: "objects", title: ""
        },
        {
         emoji: "🗜",  category: "objects", title: ""
        },
        {
         emoji: "⚖",  category: "objects", title: ""
        },
        {
         emoji: "🔗",  category: "objects", title: ""
        },
        {
         emoji: "⛓",  category: "objects", title: ""
        },
        {
         emoji: "⚗",  category: "objects", title: ""
        },
        {
         emoji: "🔬",  category: "objects", title: ""
        },
        {
         emoji: "🔭",  category: "objects", title: ""
        },
        {
         emoji: "📡",  category: "objects", title: ""
        },
        {
         emoji: "💉",  category: "objects", title: ""
        },
        {
         emoji: "💊",  category: "objects", title: ""
        },
        {
         emoji: "🚪",  category: "objects", title: ""
        },
        {
         emoji: "🛋",  category: "objects", title: ""
        },
        {
         emoji: "🚿",  category: "objects", title: ""
        },
        {
         emoji: "🛁",  category: "objects", title: ""
        },
        {
         emoji: "💘",  category: "objects", title: ""
        },
        {
         emoji: "❤",  category: "objects", title: ""
        },
        {
         emoji: "💔",  category: "objects", title: ""
        },
        {
         emoji: "💕",  category: "objects", title: ""
        },
        {
         emoji: "💖",  category: "objects", title: ""
        },
        {
         emoji: "💜",  category: "objects", title: ""
        },
        {
         emoji: "💞",  category: "objects", title: ""
        },
        {
         emoji: "❣",  category: "objects", title: ""
        },
        {
         emoji: "💦",  category: "objects", title: ""
        },
        {
         emoji: "💨",  category: "objects", title: ""
        },
        {
         emoji: "💫",  category: "objects", title: ""
        },
        {
         emoji: "🏁",  category: "objects", title: ""
        },
        {
         emoji: "🚩",  category: "objects", title: ""
        },
        {
         emoji: "🎌",  category: "objects", title: ""
        },
        {
         emoji: "🏴",  category: "objects", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "🧀",  category: "food", title: ""
        },
        {
         emoji: "🥚",  category: "food", title: ""
        },
        {
         emoji: "🥞",  category: "food", title: ""
        },
        {
         emoji: "🍞",  category: "food", title: ""
        },
        {
         emoji: "🥐",  category: "food", title: ""
        },
        {
         emoji: "🥯",  category: "food", title: ""
        },
        {
         emoji: "🥖",  category: "food", title: ""
        },
        {
         emoji: "🥨",  category: "food", title: ""
        },
        {
         emoji: "🍔",  category: "food", title: ""
        },
        {
         emoji: "🍟",  category: "food", title: ""
        },
        {
         emoji: "🌭",  category: "food", title: ""
        },
        {
         emoji: "🍕",  category: "food", title: ""
        },
        {
         emoji: "🥪",  category: "food", title: ""
        },
        {
         emoji: "🌮",  category: "food", title: ""
        },
        {
         emoji: "🌯",  category: "food", title: ""
        },
        {
         emoji: "🍝",  category: "food", title: ""
        },
        {
         emoji: "🍛",  category: "food", title: ""
        },
        {
         emoji: "🥘",  category: "food", title: ""
        },
        {
         emoji: "🍲",  category: "food", title: ""
        },
        {
         emoji: "🍤",  category: "food", title: ""
        },
        {
         emoji: "🥗",  category: "food", title: ""
        },
        {
         emoji: "🥫",  category: "food", title: ""
        },
        {
         emoji: "🥓",  category: "food", title: ""
        },
        {
         emoji: "🍖",  category: "food", title: ""
        },
        {
         emoji: "🥢",  category: "food", title: ""
        },
        {
         emoji: "🥡",  category: "food", title: ""
        },
        {
         emoji: "🍚",  category: "food", title: ""
        },
        {
         emoji: "🍜",  category: "food", title: ""
        },
        {
         emoji: "🥠",  category: "food", title: ""
        },
        {
         emoji: "🥮",  category: "food", title: ""
        },
        {
         emoji: "🍘",  category: "food", title: ""
        },
        {
         emoji: "🍙",  category: "food", title: ""
        },
        {
         emoji: "🍣",  category: "food", title: ""
        },
        {
         emoji: "🍥",  category: "food", title: ""
        },
        {
         emoji: "🍱",  category: "food", title: ""
        },
        {
         emoji: "🍡",  category: "food", title: ""
        },
        {
         emoji: "🍢",  category: "food", title: ""
        },
        {
         emoji: "🍇",  category: "food", title: ""
        },
        {
         emoji: "🍑",  category: "food", title: ""
        },
        {
         emoji: "🍒",  category: "food", title: ""
        },
        {
         emoji: "🍓",  category: "food", title: ""
        },
        {
         emoji: "🥝",  category: "food", title: ""
        },
        {
         emoji: "🍉",  category: "food", title: ""
        },
        {
         emoji: "🍈",  category: "food", title: ""
        },
        {
         emoji: "🍊",  category: "food", title: ""
        },
        {
         emoji: "🍋",  category: "food", title: ""
        },
        {
         emoji: "🍌",  category: "food", title: ""
        },
        {
         emoji: "🍍",  category: "food", title: ""
        },
        {
         emoji: "🥭",  category: "food", title: ""
        },
        {
         emoji: "🥥",  category: "food", title: ""
        },
        {
         emoji: "🍎",  category: "food", title: ""
        },
        {
         emoji: "🍏",  category: "food", title: ""
        },
        {
         emoji: "🌽",  category: "food", title: ""
        },
        {
         emoji: "🍐",  category: "food", title: ""
        },
        {
         emoji: "🥬",  category: "food", title: ""
        },
        {
         emoji: "🥦",  category: "food", title: ""
        },
        {
         emoji: "🍄",  category: "food", title: ""
        },
        {
         emoji: "🍅",  category: "food", title: ""
        },
        {
         emoji: "🥕",  category: "food", title: ""
        },
        {
         emoji: "🌶",  category: "food", title: ""
        },
        {
         emoji: "🍆",  category: "food", title: ""
        },
        {
         emoji: "🥒",  category: "food", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "🥔",  category: "food", title: ""
        },
        {
         emoji: "🍠",  category: "food", title: ""
        },
        {
         emoji: "🥜",  category: "food", title: ""
        },
        {
         emoji: "🍰",  category: "food", title: ""
        },
        {
         emoji: "🎂",  category: "food", title: ""
        },
        {
         emoji: "🧁",  category: "food", title: ""
        },
        {
         emoji: "🥧",  category: "food", title: ""
        },
        {
         emoji: "🍩",  category: "food", title: ""
        },
        {
         emoji: "🍪",  category: "food", title: ""
        },
        {
         emoji: "🍿",  category: "food", title: ""
        },
        {
         emoji: "🍮",  category: "food", title: ""
        },
        {
         emoji: "🍯",  category: "food", title: ""
        },
        {
         emoji: "🍦",  category: "food", title: ""
        },
        {
         emoji: "🍨",  category: "food", title: ""
        },
        {
         emoji: "🍧",  category: "food", title: ""
        },
        {
         emoji: "🍫",  category: "food", title: ""
        },
        {
         emoji: "🍬",  category: "food", title: ""
        },
        {
         emoji: "🍭",  category: "food", title: ""
        },
        {
         emoji: "🍺",  category: "food", title: ""
        },
        {
         emoji: "🍻",  category: "food", title: ""
        },
        {
         emoji: "🥂",  category: "food", title: ""
        },
        {
         emoji: "🍷",  category: "food", title: ""
        },
        {
         emoji: "🍸",  category: "food", title: ""
        },
        {
         emoji: "🍹",  category: "food", title: ""
        },
        {
         emoji: "🍶",  category: "food", title: ""
        },
        {
         emoji: "🥃",  category: "food", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "☕",  category: "food", title: ""
        },
        {
         emoji: "🍵",  category: "food", title: ""
        },
        {
         emoji: "🥛",  category: "food", title: ""
        },
        {
         emoji: "🍼",  category: "food", title: ""
        },
        {
         emoji: "🥤",  category: "food", title: ""
        },
        {
         emoji: "🍴",  category: "food", title: ""
        },
        {
         emoji: "🍽",  category: "food", title: ""
        },
        {
         emoji: "🥣",  category: "food", title: ""
        },
        {
         emoji: "🥄",  category: "food", title: ""
        },
        {
         emoji: "🧂",  category: "food", title: ""
        },
        {
         emoji: "👦",  category: "people", title: ""
        },
        {
         emoji: "👶",  category: "people", title: ""
        },
        {
         emoji: "👧",  category: "people", title: ""
        },
        {
         emoji: "👨",  category: "people", title: ""
        },
        {
         emoji: "👩",  category: "people", title: ""
        },
        {
         emoji: "👴",  category: "people", title: ""
        },
        {
         emoji: "👵",  category: "people", title: ""
        },
        {
         emoji: "👮",  category: "people", title: ""
        },
        {
         emoji: "🕵",  category: "people", title: ""
        },
        {
         emoji: "💂",  category: "people", title: ""
        },
        {
         emoji: "👷",  category: "people", title: ""
        },
        {
         emoji: "🤴",  category: "people", title: ""
        },
        {
         emoji: "👸",  category: "people", title: ""
        },
        {
         emoji: "👳",  category: "people", title: ""
        },
        {
         emoji: "👲",  category: "people", title: ""
        },
        {
         emoji: "🧕",  category: "people", title: ""
        },
        {
         emoji: "🧔",  category: "people", title: ""
        },
        {
         emoji: "👱",  category: "people", title: ""
        },
        {
         emoji: "🤵",  category: "people", title: ""
        },
        {
         emoji: "👰",  category: "people", title: ""
        },
        {
         emoji: "🤰",  category: "people", title: ""
        },
        {
         emoji: "🤱",  category: "people", title: ""
        },
        {
         emoji: "👼",  category: "people", title: ""
        },
        {
         emoji: "🎅",  category: "people", title: ""
        },
        {
         emoji: "🤶",  category: "people", title: ""
        },
        {
         emoji: "🙍",  category: "people", title: ""
        },
        {
         emoji: "🙎",  category: "people", title: ""
        },
        {
         emoji: "🙅",  category: "people", title: ""
        },
        {
         emoji: "💁",  category: "people", title: ""
        },
        {
         emoji: "🙋",  category: "people", title: ""
        },
        {
         emoji: "🙇",  category: "people", title: ""
        },
        {
         emoji: "🤦",  category: "people", title: ""
        },
        {
         emoji: "🤷",  category: "people", title: ""
        },
        {
         emoji: "💆",  category: "people", title: ""
        },
        {
         emoji: "💇",  category: "people", title: ""
        },
        {
         emoji: "🚶",  category: "people", title: ""
        },
        {
         emoji: "🏃",  category: "people", title: ""
        },
        {
         emoji: "💃",  category: "people", title: ""
        },
        {
         emoji: "🕺",  category: "people", title: ""
        },
        {
         emoji: "👯",  category: "people", title: ""
        },
        {
         emoji: "🕴",  category: "people", title: ""
        },
        {
         emoji: "🗣",  category: "people", title: ""
        },
        {
         emoji: "👤",  category: "people", title: ""
        },
        {
         emoji: "👥",  category: "people", title: ""
        },
        {
         emoji: "👫",  category: "people", title: ""
        },
        {
         emoji: "💏",  category: "people", title: ""
        },
        {
         emoji: "💑",  category: "people", title: ""
        },
        {
         emoji: "👪",  category: "people", title: ""
        },
        {
         emoji: "🏎",  category: "travel", title: ""
        },
        {
         emoji: "🏍",  category: "travel", title: ""
        },
        {
         emoji: "🗾",  category: "travel", title: ""
        },
        {
         emoji: "🏔",  category: "travel", title: ""
        },
        {
         emoji: "⛰",  category: "travel", title: ""
        },
        {
         emoji: "🌋",  category: "travel", title: ""
        },
        {
         emoji: "🗻",  category: "travel", title: ""
        },
        {
         emoji: "🏕",  category: "travel", title: ""
        },
        {
         emoji: "🏜",  category: "travel", title: ""
        },
        {
         emoji: "🏝",  category: "travel", title: ""
        },
        {
         emoji: "🏞",  category: "travel", title: ""
        },
        {
         emoji: "🏟",  category: "travel", title: ""
        },
        {
         emoji: "🏛",  category: "travel", title: ""
        },
        {
         emoji: "🏗",  category: "travel", title: ""
        },
        {
         emoji: "🏘",  category: "travel", title: ""
        },
        {
         emoji: "🏠",  category: "travel", title: ""
        },
        {
         emoji: "🏡",  category: "travel", title: ""
        },
        {
         emoji: "🏢",  category: "travel", title: ""
        },
        {
         emoji: "🏣",  category: "travel", title: ""
        },
        {
         emoji: "🏤",  category: "travel", title: ""
        },
        {
         emoji: "🏥",  category: "travel", title: ""
        },
        {
         emoji: "🏦",  category: "travel", title: ""
        },
        {
         emoji: "🏨",  category: "travel", title: ""
        },
        {
         emoji: "🏩",  category: "travel", title: ""
        },
        {
         emoji: "🏪",  category: "travel", title: ""
        },
        {
         emoji: "🏫",  category: "travel", title: ""
        },
        {
         emoji: "🏬",  category: "travel", title: ""
        },
        {
         emoji: "🏭",  category: "travel", title: ""
        },
        {
         emoji: "🏯",  category: "travel", title: ""
        },
        {
         emoji: "🏰",  category: "travel", title: ""
        },
        {
         emoji: "💒",  category: "travel", title: ""
        },
        {
         emoji: "🗼",  category: "travel", title: ""
        },
        {
         emoji: "🗽",  category: "travel", title: ""
        },
        {
         emoji: "⛪",  category: "travel", title: ""
        },
        {
         emoji: "🕌",  category: "travel", title: ""
        },
        {
         emoji: "🕍",  category: "travel", title: ""
        },
        {
         emoji: "⛩",  category: "travel", title: ""
        },
        {
         emoji: "🕋",  category: "travel", title: ""
        },
        {
         emoji: "⛲",  category: "travel", title: ""
        },
        {
         emoji: "⛺",  category: "travel", title: ""
        },
        {
         emoji: "🌁",  category: "travel", title: ""
        },
        {
         emoji: "🌃",  category: "travel", title: ""
        },
        {
         emoji: "🏙",  category: "travel", title: ""
        },
        {
         emoji: "🌄",  category: "travel", title: ""
        },
        {
         emoji: "🌅",  category: "travel", title: ""
        },
        {
         emoji: "🌆",  category: "travel", title: ""
        },
        {
         emoji: "🌇",  category: "travel", title: ""
        },
        {
         emoji: "🌉",  category: "travel", title: ""
        },
        {
         emoji: "🌌",  category: "travel", title: ""
        },
        {
         emoji: "🎠",  category: "travel", title: ""
        },
        {
         emoji: "🎡",  category: "travel", title: ""
        },
        {
         emoji: "🎢",  category: "travel", title: ""
        },
        {
         emoji: "🚂",  category: "travel", title: ""
        },
        {
         emoji: "🚃",  category: "travel", title: ""
        },
        {
         emoji: "🚄",  category: "travel", title: ""
        },
        {
         emoji: "🚅",  category: "travel", title: ""
        },
        {
         emoji: "🚆",  category: "travel", title: ""
        },
        {
         emoji: "🚇",  category: "travel", title: ""
        },
        {
         emoji: "🚈",  category: "travel", title: ""
        },
        {
         emoji: "🚉",  category: "travel", title: ""
        },
        {
         emoji: "🚊",  category: "travel", title: ""
        },
        {
         emoji: "🚝",  category: "travel", title: ""
        },
        {
         emoji: "🚞",  category: "travel", title: ""
        },
        {
         emoji: "🚋",  category: "travel", title: ""
        },
        {
         emoji: "🚌",  category: "travel", title: ""
        },
        {
         emoji: "🚍",  category: "travel", title: ""
        },
        {
         emoji: "🚎",  category: "travel", title: ""
        },
        {
         emoji: "🚐",  category: "travel", title: ""
        },
        {
         emoji: "🚑",  category: "travel", title: ""
        },
        {
         emoji: "🚒",  category: "travel", title: ""
        },
        {
         emoji: "🚓",  category: "travel", title: ""
        },
        {
         emoji: "🚔",  category: "travel", title: ""
        },
        {
         emoji: "🚕",  category: "travel", title: ""
        },
        {
         emoji: "🚖",  category: "travel", title: ""
        },
        {
         emoji: "🚗",  category: "travel", title: ""
        },
        {
         emoji: "🚘",  category: "travel", title: ""
        },
        {
         emoji: "🚚",  category: "travel", title: ""
        },
        {
         emoji: "🚛",  category: "travel", title: ""
        },
        {
         emoji: "🚜",  category: "travel", title: ""
        },
        {
         emoji: "🚲",  category: "travel", title: ""
        },
        {
         emoji: "🛴",  category: "travel", title: ""
        },
        {
         emoji: "🛵",  category: "travel", title: ""
        },
        {
         emoji: "🚏",  category: "travel", title: ""
        },
        {
         emoji: "🛤",  category: "travel", title: ""
        },
        {
         emoji: "⛽",  category: "travel", title: ""
        },
        {
         emoji: "🚨",  category: "travel", title: ""
        },
        {
         emoji: "⛵",  category: "travel", title: ""
        },
        {
         emoji: "🚤",  category: "travel", title: ""
        },
        {
         emoji: "🛳",  category: "travel", title: ""
        },
        {
         emoji: "⛴",  category: "travel", title: ""
        },
        {
         emoji: "🛥",  category: "travel", title: ""
        },
        {
         emoji: "🚢",  category: "travel", title: ""
        },
        {
         emoji: "✈",  category: "travel", title: ""
        },
        {
         emoji: "🛩",  category: "travel", title: ""
        },
        {
         emoji: "🛫",  category: "travel", title: ""
        },
        {
         emoji: "🛬",  category: "travel", title: ""
        },
        {
         emoji: "💺",  category: "travel", title: ""
        },
        {
         emoji: "🚁",  category: "travel", title: ""
        },
        {
         emoji: "🚟",  category: "travel", title: ""
        },
        {
         emoji: "🚠",  category: "travel", title: ""
        },
        {
         emoji: "🚡",  category: "travel", title: ""
        },
        {
         emoji: "🛰",  category: "travel", title: ""
        },
        {
         emoji: "🚀",  category: "travel", title: ""
        },
        {
         emoji: "🛸",  category: "travel", title: ""
        },
        {
         emoji: "⛱",  category: "travel", title: ""
        },
        {
         emoji: "🎆",  category: "travel", title: ""
        },
        {
         emoji: "🎇",  category: "travel", title: ""
        },
        {
         emoji: "🎑",  category: "travel", title: ""
        },
        {
         emoji: "🗿",  category: "travel", title: ""
        },
        {
         emoji: "🛂",  category: "travel", title: ""
        },
        {
         emoji: "🛃",  category: "travel", title: ""
        },
        {
         emoji: "🛄",  category: "travel", title: ""
        },
        {
         emoji: "🛅",  category: "travel", title: ""
        }
     ];

/* DO NOT MAKE ANY EDITS BELOW THIS LINE */

let toHTML = true;
let estrte_fragments_log = [];
let estrte_undo_log = [];
let new_log = {};
let estrte_newStyle = "none";
let estrte_clearedNew = "no";
let style_added = false;
let estrte_colorSelected = 'no';
let estrte_action = "";
let tempColorCounter = 0;
let newSoFar = "";
let formatOn = '';
let estrte_prevAdd = 'no';
let table_spec_active = false;
let link_spec_active = false;
let estrte_color_editing = false;
let estrte_select_estrte_emojis_div_html = '<div class="table_spec_form" id="link_spec_form"><div class="spec_features_head">Emojis<span class="close_window" title="Close" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div><div id="estrte_emojis"></div></div>';
let estrte_emojis_list = '<div id="estrte_emojis_list"><div class="estrte_emojis_category" id="emojisgeneral" inputmode="none" unselectable="on"><div class="estrte_emojis_category_show" id="emojis_showgeneral"></div></div>';
for (let i = 0; i < estrte_emoji_categories.length; i++) {
      var category = estrte_emoji_categories[i];
      estrte_emojis_list += '<div class="estrte_emojis_category" id="emojis'+ category + '" inputmode="none" unselectable="on"><label>' + category + '&nbsp;</label><div class="estrte_emojis_category_show" id="emojis_show'+ category + '"></div></div>';
      }
estrte_emojis_list += '</div>';


function slideDown(value){
    target = document.getElementById("estrte_select_features_div");
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    let toolbar = document.getElementById("estrte_toolbar");
    let targetWidth = window.getComputedStyle(toolbar).width;
  if (display === 'none')
      display = 'block';

    target.style.height = 0;
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.position = "relative";  // can be changed to absolue if 
  //  target.style.width = targetWidth;
    target.style.width = '100%';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = estrte_animation_dur + 'ms';
    target.style.overflow = 'hidden';
    target.style.height = value;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
 //   target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
    target.style.height = 'auto';
  //    target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, estrte_animation_dur);
  }

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

	  function pasteHtmlAtCaret(html) {
	  	let existingHTML;
	  	let newInputText;
	  	let newHTML;
	  	let new_log;
        let estrte_input_field = document.getElementById("estrte_input_field");
	if(estrte_fragments_log.length > 0){
       existingHTML = estrte_fragments_log[0].post_edit;
	}else{
       existingHTML =  document.getElementById("estrte_content_wrapper").innerHTML;
	}
    
        let sel, cursorPos, range;
        let date = new Date();
        let unix = Math.round(+date / 1000);
        if (window.getSelection) {
          // IE9 + and non-IE
          sel = window.getSelection();
          cursorPos = sel;
        parentElementId =  sel.anchorNode.parentElement.id;
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            let el = document.createElement("div");
            el.innerHTML = html;
            el.id = unix;
            el.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
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
    estrte_input_field = document.getElementById("estrte_input_field");
  if(ancestor(cursorPos, estrte_input_field)){
        estrte_input_field.focus();
  newHTML = document.getElementById("estrte_content_wrapper").innerHTML;
    new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "text"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText);
	return;
	}else{
		return;
	}
}

      function addToDiv(event) {
        let emoji = event.target.value;
        let estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
        pasteHtmlAtCaret(emoji);
      }
      function specCharAddToDiv(event) {
        let specChar = event.target.value;
        let estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
        pasteHtmlAtCaret(`${specChar}`);
      }
      function addTableToDiv(event) {
        let estrte_input_field = document.getElementById("estrte_input_field");
        estrte_input_field.focus();
       let table_html = document.getElementById("table_html_hidden").value;
        pasteHtmlAtCaret(table_html);
      }
function generateEmojiIcon(emoji, title) {
        let date = new Date();
        let unix = Math.floor(Math.random() * 90000);
        input = document.createElement("input");
        input.type = "button";
        input.id = unix;
        input.value = emoji;
        input.title = title;
        input.innerText = {emoji};//caption on button
        return input;
}     
function generateSpecialcharIcon(specChar) {
                    const date = new Date();
const unix = Math.round(+date / 1000);
        let input = document.createElement("input");
        input.type = "button";
        input.id = unix;
        input.value = specChar;
        input.innerText = specChar;//caption on button
        input.addEventListener("click", function(){
        let estrte_input_field = document.getElementById("estrte_input_field");
        pasteHtmlAtCaret(`${specChar}`);
        close_select_features_div();
        });
        return input;
      }
function setDocMode(toSource) {
       let doc = document.getElementById("estrte_input_field");
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
      
function estrte_sanitise_input_content(inputHtmlRaw){
  let map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
let inputHtml = inputHtmlRaw.replace(/[&<>"']/g, function(m) { return map[m]; });
inputHtml = inputHtml.replace(/name=&quot;estrte_input_field&quot;/g, '');  
inputHtml = inputHtml.replace(/id=&quot;estrte_input_field&quot;/g, '');  
inputHtml = inputHtml.replace(/id=&quot;estrte_content_wrapper&quot;/g, '');  
inputHtml = inputHtml.replace(/name=&quot;estrte_content_wrapper&quot;/g, '');
inputHtml = inputHtml.replace(/contenteditable=&quot;true&quot;/g, '');
inputHtml = inputHtml.replace(/contenteditable=&quot;false&quot;/g, '');
  return inputHtml;
}

function estrte_remove_placeholder(){
	let existingHTML;
	let newHTML;
	let elList = document.getElementById("estrte_input_field").getElementsByTagName("*");
	for(let i = 0; i < elList.length; i++){
if(elList[i].innerHTML == '<span class="est_placeholder">-</span>'){
		let thisParentElementId = elList[i].id;
existingHTML = document.getElementById(thisParentElementId).innerHTML;
newHTML = existingHTML.replace('<span class="est_placeholder">-</span>', '');
document.getElementById(thisParentElementId).innerHTML = newHTML;
document.getElementById(thisParentElementId).removeEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(thisParentElementId).removeEventListener("touchstart", estrte_remove_placeholder, true);
return;
		}
	}
	//document.getElementById(thisParentElementId).focus();
}
function estrte_set_current_style(styleToAdd, newValue){
	document.getElementById("estrte_input_field").style.styleToAdd = newValue;
}
      
function estrte_add_style(styleToAdd, newValue){
estrte_remove_placeholder();
    estrte_color_editing = false;
  let estrte_prevDelete = 'no';
  let selectedText;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let origInputText;
  let newInputText;
  let range;
  	estrte_prevAdd = 'no';
    document.getElementById('estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = newValue;
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	           selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
			selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            }  else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
			selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.innerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	           range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
			range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
			range = document.selection().getRangeAt(0);
			}
			if(selectedText == ''){     
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
           range = sel.getRangeAt(0);
            range.deleteContents();
document.getElementById("estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;        
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
           let el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.style = styleToAdd + ":" + newValue + ";";
            el.addEventListener("click", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);

             range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById(unix).contentEditable = true;
setTimeout(function(){document.getElementById(unix).focus();}, 200);

	if(estrte_fragments_log.length > 0){
       let origInputText = estrte_fragments_log[0].post_edit;
	}else{
       let origInputText = document.getElementById("estrte_input_cont").innerHTML;
	}
//document.getElementById(unix).contentEditable = true;
//       document.getElementById(unix).focus();

         style_added = true;
          }
			}else{ 
   let newNode = document.createElement('div');
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.setAttribute("style", styleToAdd + ":" + newValue + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                    
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(styleToAdd, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
	}
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML);
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
 }
function estrte_format(styleToAdd){
estrte_remove_placeholder();
  let estrte_color_editing = false;
  let existingHTML;
  let estrte_prevDelete = 'no';
  let selectedText;
  let origInputText;
  let newInputText;
  let range;
  let parentInnerHTML;
  let parentOuterHTML;
  let newValue;
  let parentElementTagName;
  let parentElementId;
  let anchorNode;
  let parentStyle;
  	estrte_prevAdd = 'no';
    document.getElementById('estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	           selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
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
	            	let selectionNull = true;
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
	            	let selectionNull = true;
	            } else{
	    anchorNode = window.selection().anchorNode.parentElement;
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = window.selection().anchorNode.parentElement.outerHTML;
     parentStyle = window.selection().anchorNode.parentElement.style;
		}
	}
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.outerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			let existingFormat = 'style="' + styleToAdd +':' + newValue + ';"';
				if(parentOuterHTML.indexOf(existingFormat) != -1){
				}  
			if(selectedText == ''){
document.getElementById("estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
        let already = false;
			let sel = window.getSelection();
            	let initialFocus = unix;
          if (sel.getRangeAt && sel.rangeCount) {
            if(parentElementTagName.toLowerCase() != styleToAdd){  
          let thisResult = ancestor(document.getElementById(parentElementId), styleToAdd);
        		if(thisResult == null){
				            range = sel.getRangeAt(0);
            range.deleteContents();
           let el = document.createElement(styleToAdd);
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.addEventListener("click", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
document.getElementById("format" + styleToAdd).style.fontWeight = "bold";
			}else{
				let thisFirstElementChild = thisResult.firstElementChild;
				let thisFirstElementChildTagName = thisResult.firstElementChild.tagName;
				let thisFirstElementChildStyle = thisResult.firstElementChild.style.cssText;
		            range = sel.getRangeAt(0);
            range.deleteContents();
           let el = document.createElement(thisFirstElementChildTagName);
            el.innerHTML = '';
            el.id = unix;
            el.style = thisFirstElementChildStyle;
            el.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
    insertAfter(node, document.getElementById(thisResult.id));
            
              
              let childCounter = 1;
            while(thisFirstElementChild.firstElementChild != null){
            let firstElementChildTagName = thisFirstElementChild.firstElementChild.tagName;
            let firstElementChildStyle = thisFirstElementChild.firstElementChild.style.cssText;
            thisFirstElementChild = thisFirstElementChild.firstElementChild;
           let childEl = document.createElement(firstElementChildTagName);   
            childEl.innerHTML = '';
            childEl.id = unix + childCounter;
            initialFocus = unix + childCounter;
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let childNode = childEl;
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
			}else{  
		let thisResult = document.getElementById(parentElementId);
           let el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            let docFrag = document.createDocumentFragment();  
           let node = el;
             let lastNode = docFrag.appendChild(node);
    insertAfter(node, document.getElementById(parentElementId));
              let childCounter = 1;
            while(thisResult.firstElementChild != null){
            let thisFirstElementChild = thisResult.firstElementChild;
            let firstElementChildTagName = thisFirstElementChild.firstElementChild.tagName;
            let firstElementChildStyle = thisFirstElementChild.firstElementChild.style.cssText;
            thisFirstElementChild = thisFirstElementChild.firstElementChild;
           let childEl = document.createElement(firstElementChildTagName);
            childEl.innerHTML = '';
            childEl.id = unix + childCounter;
            let initialFocus = childEl.id;
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let childNode = childEl;
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
setTimeout(function(){document.getElementById(initialFocus).focus();}, 200);
		
	
	}else{
	if(parentElementTagName.toLowerCase() != styleToAdd.toLowerCase()){
   let newNode = document.createElement(styleToAdd);
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
    newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(styleToAdd, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
		}else{
		let toReplace = parentOuterHTML;
		let replaceWith = document.getElementById(parentElementId).innerHTML;
		newInputText = document.getElementById("estrte_content_wrapper").innerHTML.replace(toReplace, replaceWith);
		}
	}
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	//document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText); 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		existingHTML = document.getElementById("estrte_input_field").innerHTML;
 }
function estrte_setColor(todo){
  let estrte_to_focus;
  let estrte_prevDelete = 'no';
  let estrte_prevAdd = 'no';
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let range;
  let unix;
  let newColor;
  let red;
  let green;
  let blue;
 	red = document.getElementById("redComp").value;
 	green = document.getElementById("greenComp").value;
 	blue = document.getElementById("blueComp").value;
     if(estrte_action == "set_background"){
     	estrte_setBackgroundColor();
     }else{
  	if(todo == 'shade'){
  		let tempRed;
  		let tempGreen;
  		let tempBlue;
    if(document.getElementById("tempRed").value != 'u'){
    	tempRed = document.getElementById("tempRed").value;
    }else{
    	tempRed = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != 'u'){
    tempGreen = document.getElementById("tempGreen").value;
    }else{
    	tempGreen = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != 'u'){
    	tempBlue = document.getElementById("tempBlue").value;
    }else{
    	tempBlue = document.getElementById("blueComp").value;
    }
 		console.log(tempRed + " - " + tempGreen + " - " + tempBlue);
      let shade = document.getElementById("shadeComp").value / 50;
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
 	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
     
    document.getElementById('estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    let date = new Date();
unix = Math.round(+date / 1000) + Math.floor(Math.random() * 1000);
if(estrte_colorSelected == 'no'){
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            }  else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.innerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
			
			if(selectedText == ''){
document.getElementById("estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
				if(estrte_color_editing){
				document.getElementById(estrte_color_editing).style.color = newColor;
				}else{
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
document.getElementById( "estrte_input_field").contentEditable = false;
  inserted_divs = document.getElementById( "estrte_input_field").getElementsByClassName("inserted_div");
         inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
   if(parentElementId == undefined){
  inserted_divs = document.getElementById("estrte_input_field").getElementsByClassName("inserted_div");
         inserted_divsLength = inserted_divs.length;
        newRangecont = elementsArray[elementsArray.length - 1];
          elementsArray = ["estrte_input_field"];
        for(let i = 0; i < inserted_divsLength; i++){
            elementsArray.push(inserted_divs[i].id);
					}
         range = document.createRange();
        range.setStart(document.getElementById(elementsArray[elementsArray.length - 1]), document.getElementById(elementsArray[elementsArray.length - 1]).length - 1);
			}else{
            range = sel.getRangeAt(0);
            }
            range.deleteContents();
           let el = document.createElement("div");
            el.innerHTML = '<span class="est_placeholder">-</div>';
            el.id = unix;
            el.className = "inserted_div";
            el.style = "color:" + newColor + ";";
            el.addEventListener("click", {stopPropagation: true});
            el.addEventListener("mousedown", {stopPropagation: true});
            el.addEventListener("touchstart", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById(unix).addEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(unix).addEventListener("touchstart", estrte_remove_placeholder, true);
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
            style_added = true;
          }
//estrte_to_focus = unix;
				}
  inserted_divs = document.getElementById("estrte_input_field").getElementsByClassName("inserted_div");
    inserted_divsLength = inserted_divs.length;
        elementsArray = ["estrte_input_field"];
        for(let i = 0; i < inserted_divsLength; i++){
            elementsArray.push(inserted_divs[i].id);
					}
    estrte_to_focus = elementsArray[elementsArray.length - 1];
document.getElementById(estrte_to_focus).contentEditable = true;
setTimeout(function(){
document.getElementById(estrte_to_focus).focus();
estrte_color_editing = estrte_to_focus;}, 200);
			}else{
				
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    	
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
	
   let newNode = document.createElement('div');
                    newNode.setAttribute("class", "inserted_div");
                    newNode.setAttribute("id", unix);
                    newNode.setAttribute("style", "color:" + newColor + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                   
    newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/color\:\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
//	document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText); 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	let pre_edit_value = estrte_fragments_log[0].pre_edit;
	let post_edit_value = estrte_fragments_log[0].post_edit;
			}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		let existingHTML = document.getElementById("estrte_content_wrapper").innerHTML;
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
		   let newDivColor = newSoFar;
	}else{ 
    let regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    let newEditedDivColor = newDivColor.replace(regExp, newColor);  	
    let newNewInputText = newInputText.replace(newDivColor, newEditedDivColor); 
     //      document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML)
	estrte_fragments_log[0].post_edit = newEditedDivColor;
}  
}
}
 function estrte_add_paragraph(){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let existingHTML;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let parentOuterHTML;
  let selectionNull;
  let inserted_elements;
  let first_layer_inserted_elements;
  let range;
  let inserted_divs
  let docFrag;
    estrte_color_editing = false;
    let insertAfterElement;
 	    document.getElementById('estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix = Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = window.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	selectionNull = true;
	            }  else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = document.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = window.selection().anchorNode.parentElement.outerHTML;
		}
	}
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.outerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			if(selectedText == ''){
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
document.getElementById("estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementsByClassName("inserted_div");
          let inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
            inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
        
         
         inserted_elements = document.getElementsByClassName("inserted_div");
         first_layer_inserted_elements = new Array();
            for(let i=0; i<inserted_elements.length; i++){
         		first_layer_inserted_elements.unshift(inserted_elements[i]);
         		if(inserted_elements[i].parentElement.id == "estrte_input_field"){
         			insertAfterElement = inserted_elements[i];
         		}
         }
            let el = document.createElement("p");
            el.id = unix;
            el.className = "inserted_div";
            el.innerHTML = '<span class="est_placeholder">-</span>';
            el.addEventListener("click", {stopPropagation: true});
            docFrag = document.createDocumentFragment();
            let node = el;
             let lastNode = docFrag.appendChild(node);
        if(first_layer_inserted_elements.length > 0){
    insertAfter(node, insertAfterElement);
			}else{
        
            range.insertNode(docFrag);
			}
document.getElementById(unix).addEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(unix).contentEditable = true;
setTimeout(function(){document.getElementById(unix).focus();}, 200);
          }
          }else{
    let newNode = document.createElement('p');
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);
                   
    let newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
	//document.getElementById("estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText); 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	let pre_edit_value = estrte_fragments_log[0].pre_edit;
	let post_edit_value = estrte_fragments_log[0].post_edit;
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		existingHTML = document.getElementById("estrte_input_field").innerHTML;
}
 
function estrte_undo(){
    estrte_color_editing = false;
	let editFrom = estrte_fragments_log[0].post_edit;
	let editTo = estrte_fragments_log[0].pre_edit;
           document.getElementById("estrte_content_wrapper").innerHTML = editTo;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML)
 estrte_fragments_log.shift();
 if(estrte_fragments_log.length == 0){
 	document.getElementById("estrte_undo").style.display = "none";
 }else{
document.getElementById("estrte_undo").style.display = "inline-block";
document.getElementById("estrte_undo").innerHTML = "Undo";
	}
let new_undo_log = {"pre_edit": editFrom, "post_edit": editTo, "type_of_edit": "Edit"}; 
	estrte_undo_log.unshift(new_undo_log);
	let redoLength = estrte_undo_log.length;
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
	 let editTo = estrte_undo_log[0].post_edit;
	let editFrom = estrte_undo_log[0].pre_edit;
           document.getElementById("estrte_content_wrapper").innerHTML = editFrom;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML) 
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
			let existingHTML = document.getElementById("estrte_content_wrapper").innerHTML;
	        let tempAfterDelete = document.getElementById("estrte_content_wrapper").innerHTML;
           document.getElementById("estrte_content_wrapper").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
           document.getElementById("estrte_input_cont").style.backgroundColor = document.getElementById("estrte_input_field").style.backgroundColor;
}

function add_table(){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let range;
    estrte_color_editing = false;
    let insertAfterElement = '';
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
	
    const date = new Date();
let unix = Math.round(+date / 1000);
	let no_of_rows = parseInt(document.getElementById("no_of_rows_select").value);
	let no_of_columns = parseInt(document.getElementById("no_of_columns_select").value);
	let table_caption = document.getElementById("table_caption").value;
	let table_headings = document.getElementById("select_headers").value;
	let border = document.getElementById("border_select").value;
	let cellspacing = document.getElementById("cellspacing_select").value;
	let cellpadding = document.getElementById("cellpadding_select").value;
	let rows_loop_start = 1;
	let first_row = "";
	let el;
	let table_html = '<table class="input_table" style="overflow-x:auto;border:' + border + ';cellspacing=' + cellspacing + ';cellpadding=' + cellpadding + ';"><tbody><div class="table_header" id="table_header' + unix + '">' + table_caption + '</div>';
	if((table_headings == "firstRow") || (table_headings == "both")){
		rows_loop_start++;
		table_html += '<tr>';
	for (let j = 1; j <= no_of_columns; j++) {
			table_html += '<th></th>';
		}
		table_html += '</tr>';
	}
	for (let i = rows_loop_start; i <= no_of_rows; i++) {
		table_html += '<tr>';
	for (let j = 1; j <= no_of_columns; j++) {
		if((j == 1) && ((table_headings == "firstColumn") || (table_headings == "both"))){
			table_html += '<th></th>';
		}else{
			table_html += '<td></td>';
		}
		}
		table_html += '</tr>';
	}
		table_html += '</tbody></table>';

document.getElementById("estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
        inserted_divs[i].contentEditable = false;
        inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
   let first_layer_inserted_elements = new Array();
          if(inserted_divsLength == 0){
          	if(document.getElementById("estrte_input_field").children.length > 0){
             insertAfterElement = document.getElementById("estrte_input_field").firstChild;
          	}else{
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
           let node = el;
            if(insertAfterElement == ''){
            document.getElementById("estrte_input_field").appendChild(node);
            }else{
    insertAfter(node, insertAfterElement);
	}
    
	let cellWidth = getComputedStyle(document.getElementsByTagName("td")[0]).getPropertyValue('width');
	cellWidth = cellWidth.substring(0, cellWidth.indexOf("px"));
	document.getElementById("table_header" + unix).style.width = (cellWidth * no_of_columns) + "px";

    inserted_divs = document.getElementsByClassName("inserted_div");
        first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 let styledElement = inserted_divs[inserted_divsLength - 2];
            el = document.createElement("div");
            elId = unix.toString() + "b";
            el.id = elId;
            el.className = "inserted_div";
            el.innerHTML = '<span class="est_placeholder">-</div>';
            el.addEventListener("click", {stopPropagation: true});
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            node = el;
    insertAfter(node, insertAfterElement);
document.getElementById(elId).contentEditable = true;
document.getElementById(elId).addEventListener("keydown", estrte_remove_placeholder, true);
setTimeout(function(){document.getElementById(elId).focus();}, 200);

			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText);
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
 	table_spec_active = false;
 	estrte_show_table_spec_div();
 	close_select_features_div();
}

function add_link(){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let range;
  let styledElement
    estrte_color_editing = false;
    let insertAfterElement = '';
    let date = new Date();
let unix = Math.round(+date / 1000);
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
	let link_text = document.getElementById("link_text").value;
	let link_url = document.getElementById("link_url").value;
let link_html = '<a href=' + link_url + '>' + link_text + '</a>';
    
document.getElementById("estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
        inserted_divs[i].contentEditable = false;
        inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById("estrte_input_field").addEventListener("click", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("mousedown", function(){document.getElementById("estrte_input_field").contentEditable = true});
document.getElementById("estrte_input_field").addEventListener("touchstart", function(){document.getElementById("estrte_input_field").contentEditable = true});
   let first_layer_inserted_elements = new Array();
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

           let el = document.createElement("div");
            el.innerHTML = link_html;
            el.id = unix;
            el.className = "inserted_div";
           let node = el;
            if(insertAfterElement == ''){
            document.getElementById("estrte_input_field").appendChild(node);
            }else{
    insertAfter(node, insertAfterElement);
	}
    
   inserted_divs = document.getElementsByClassName("inserted_div");
      first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 styledElement = inserted_divs[inserted_divsLength - 2];

           el = document.createElement("div");
            elId = unix.toString() + "c";
            el.id = elId;
            el.className = "inserted_div";
            el.innerHTML = '<span class="est_placeholder">-</div>';
            el.addEventListener("click", {stopPropagation: true});
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            node = el;
    insertAfter(node, insertAfterElement);
document.getElementById(elId).contentEditable = true;
document.getElementById(elId).addEventListener("keydown", estrte_remove_placeholder, true);
setTimeout(function(){document.getElementById(elId).focus();}, 200);


			document.getElementById("estrte_fontsSelect").value = "";
			document.getElementById("estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML; 
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText);
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
 	link_spec_active = false;
 	estrte_show_select_link_div();
 	close_select_features_div();
}
function  estrte_show_select_color_div(){
//  getCaretPosition(document.getElementById("estrte_input_field"));
    estrte_color_editing = false;
var estrte_textColor = getComputedStyle(document.getElementById("estrte_color_monitor")).getPropertyValue('--text-color');
var estrte_textColorArray = estrte_textColor.substring(estrte_textColor.indexOf('(') + 1, estrte_textColor.indexOf(')')).split(",");
let estrte_select_colour_div_html = '<div class="table_spec_form" id="color_select_form" style="position:relative;" contenteditable="false"  unselectable="on" inputmode="none"><div class="spec_features_head" class="spec_features_head" contenteditable="false"  unselectable="on" inputmode="none">Colours<div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
estrte_select_colour_div_html +='<div class="estrte_color_pallette" id="estrte_color_pallette" contenteditable="false" unselectable="on" inputmode="none">';
estrte_select_colour_div_html += '<div class="estrte_colorRowCont"><div class="estrte_setColorRow" id="estrte_setColorRow" contenteditable="false"  unselectable="on" inputmode="none"></div>';
estrte_select_colour_div_html += '<div class="estrte_lowerSetColorRow" class="estrte_lowerSetColorRow" id="estrte_lowerSetColorRow" contenteditable="false"  unselectable="on" inputmode="none"></div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_slidecontainer" contentEditable = false><label for="redComp" class="estrte_colorLabel" unselectable="on" inputmode="none" contentEditable = false>Red</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[0];
estrte_select_colour_div_html += '" step=1 class="slider" name="redComp" id="redComp" contenteditable="false" unselectable="on" inputmode="none" onchange="estrte_setColor(\'red\')">';
estrte_select_colour_div_html += '<label for="greenComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Green</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[1];
estrte_select_colour_div_html += '" step=1 class="slider" name="greenComp" id="greenComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(\'green\')">';
estrte_select_colour_div_html += '<label for="blueComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Blue</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[2];
estrte_select_colour_div_html += '" step=1 class="slider" name="blueComp" id="blueComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(\'blue\')">';
estrte_select_colour_div_html += '<label for="shadeComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Shade</label><input type="range" class="estrte_toolbar_slider" min="0" max="100" value="50" step=1 class="slider" name="shadeComp" id="shadeComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(\'shade\')">';
estrte_select_colour_div_html += '<input type="hidden" name="tempRed" id="tempRed" value="u" /><input type="hidden" name="tempGreen" id="tempGreen" value="u" /><input type="hidden" name="tempBlue" id="tempBlue" value="u" />';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_colorPickerDivLower" id="estrte_colorPickerDivLower"><label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelColor" onclick="estrte_setColor(\'color\')">Set Color</label>';
estrte_select_colour_div_html += '<label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelBgColor" onclick="estrte_setBackgroundColor()">Set Background</label></div><div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
document.getElementById("estrte_select_features_div").innerHTML = estrte_select_colour_div_html;
let thisTarget = document.getElementById("estrte_select_features_div");
slideDown("520px");

estrte_populate_colour_div('');
 }
function estrte_populate_colour_div(holder){
    estrte_color_editing = false;
    let thisId;
    document.getElementById("estrte_setColorRow" + holder).innerHTML = '';
    document.getElementById("estrte_lowerSetColorRow" + holder).innerHTML = '';
    for (let i = 0; i < estrte_rgb_colors.length; i++) {
                    let unix = new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById("estrte_setColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_rgb_colors[i] + ');background-color:rgb(' + estrte_rgb_colors[i] + ');" unselectable="on" inputmode="none" readonly="readonly" onmousedown="estrte_setSetColor(' + estrte_rgb_colors[i] + ', 10)" ontouchstart="estrte_setSetColor(' + estrte_rgb_colors[i] + ', 10)">C</label></div>';
  if(estrte_rgb_colors[i] == "255, 255, 255"){
  	document.getElementById(thisId).style.border = 'solid 0.1px #8b8b8b';
  	document.getElementById("estrte_color_monitor").style.border = 'solid 0.3px #8b8b8b';
  }else{
  	document.getElementById("estrte_color_monitor").style.border = "0";
  }
}
for (let i = 0; i < estrte_lower_rgb_colors.length; i++) {
                    let unix = new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById("estrte_lowerSetColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_lower_rgb_colors[i] + ');background-color:rgb(' + estrte_lower_rgb_colors[i] + ');" unselectable="on" inputmode="none" readonly="readonly" onmousedown="estrte_setSetColor(' + estrte_lower_rgb_colors[i] + ', 10)" ontouchstart="estrte_setSetColor(' + estrte_lower_rgb_colors[i] + ', 10)">C</label></div>';
}
}
function estrte_show_select_estrte_emojis_div(){
	event.preventDefault();
    estrte_color_editing = false;
slideDown("520px");
document.getElementById("estrte_select_features_div").innerHTML = estrte_select_estrte_emojis_div_html;
        document.getElementById("estrte_emojis").innerHTML += estrte_emojis_list;
estrte_emojis.forEach((emoji) => {
	var category = emoji.category;
	if(category == "general"){
        document.getElementById("emojis_showgeneral").appendChild(generateEmojiIcon(emoji.emoji, emoji.title));
	}else{
        document.getElementById("emojis_show" + category).appendChild(generateEmojiIcon(emoji.emoji, emoji.title));
	}

      });
document.getElementById("estrte_select_features_div").innerHTML += '<div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div>';

let emojiButtons = document.getElementById("estrte_emojis_list").getElementsByTagName("input");
for(let i = 0; i < emojiButtons.length; i++){
	emojiButtons[i].addEventListener("click", function(event){
        let estrte_input_field = document.getElementById("estrte_input_field");
        pasteHtmlAtCaret(emojiButtons[i].value);
        close_select_features_div();
  event.stopPropagation();
        });
}
}  

function estrte_show_select_special_characters_div(){
	event.preventDefault();
    estrte_color_editing = false;
slideDown("520px");
document.getElementById("estrte_select_features_div").innerHTML = '<div class="table_spec_form" id="spec_chars_list"><div class="spec_features_head" class="spec_features_head">Special Chars<span class="close_window" title="Close" inputmode="none" unselectable="on" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div><div class="estrte_special_charsInput" id="estrte_special_chars"></div><div class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div()"><img src="/est_rte/images/close_menu.png" alt="" /></div></div>';
let this_special_select_html = document.getElementById("estrte_select_features_div").innerHTML;
document.getElementById("estrte_select_features_div").innerHTML = this_special_select_html;
estrte_special_chars.forEach((specialChar) => {
       document.getElementById("estrte_special_chars").appendChild(generateSpecialcharIcon(specialChar));
		});
        document.getElementById("estrte_input_field").addEventListener("click", function () {
            close_select_features_div();
        });
}

function estrte_show_table_spec_div(){
slideDown("520px");
document.getElementById("estrte_select_features_div").innerHTML = table_html;
for (let i = 1; i <= estrte_number_of_table_row_options; i++) {
  document.getElementById("no_of_rows_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_border_options; i++) {
  document.getElementById("border_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_table_padding_options; i++) {
  document.getElementById("cellpadding_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_cell_spacing_options; i++) {
  document.getElementById("cellspacing_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_number_of_table_column_options; i++) {
  document.getElementById("no_of_columns_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
}
function estrte_show_select_link_div(){
document.getElementById("estrte_select_features_div").style.display = "block";
	    document.getElementById("estrte_select_features_div").innerHTML = link_html;
}

 function estrte_setShade(){
 	let redValue;
 	let greenValue;
 	let blueValue;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
 	let newColor;
    let shade = document.getElementById("shadeComp").value / 50;
    if(document.getElementById("tempRed").value != ''){
    	redValue = document.getElementById("tempRed").value;
    }else{
    	redValue = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != ''){
    	greenValue = document.getElementById("tempGreen").value;
    }else{
    	greenValue = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != ''){
    	blueValue = document.getElementById("tempBlue").value;
    }else{
    	blueValue = document.getElementById("blueComp").value;
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
 	newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML);
     if(estrte_action == "set_background"){
  document.getElementById("estrte_input_field").style.backgroundColor = newColor;
     } else {
    estrte_setColor('shade');
      }
 }
 
 function estrte_setBackgroundColor(){
 	let origInputText;
 	let newInputText;
 	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	}
  	let red = document.getElementById("redComp").value;
 	let green = document.getElementById("greenComp").value;
 	let blue = document.getElementById("blueComp").value;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
 	let shade = document.getElementById("shadeComp").value;
 	let preColor = document.getElementById("estrte_input_field").style.backgroundColor;
           document.getElementById("estrte_content").value = estrte_sanitise_input_content(document.getElementById("estrte_content_wrapper").innerHTML) 
 	let newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
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
 	document.getElementById("estrte_undo").innerHTML = "Undo";
 }
 
 function estrte_setSetColor(red, green, blue, alpha){
 	let newColor
  	document.getElementById("redComp").value = red;
 	document.getElementById("greenComp").value = green;
 	document.getElementById("blueComp").value = blue;
 	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  	document.getElementById("tempRed").value = red;
 	document.getElementById("tempGreen").value = green;
 	document.getElementById("tempBlue").value = blue;
 	document.getElementById("estrte_color_monitor").style.backgroundColor = newColor;
 	document.getElementById("shadeComp").value = 50;
    estrte_setContentColor();
}
 
 function estrte_setContentColor(){
 	let red = document.getElementById("redComp").value;
 	let green = document.getElementById("greenComp").value;
 	let blue = document.getElementById("blueComp").value;
 	let newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById("tempRed").value = red;
 	document.getElementById("tempGreen").value = green;
 	document.getElementById("tempBlue").value = blue;
 	document.getElementById("shadeComp").value = 50;
 	estrte_setColor();
 }
 function estrte_setContentShade()
 {
 	let redValue;
 	let greenValue;
 	let blueValue;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
    let shade;
    let newColor;
    shade = document.getElementById("shadeComp").value / 100;
        if(document.getElementById("tempRed").value != ''){
    	redValue = document.getElementById("tempRed").value;
    }else{
    	redValue = document.getElementById("redComp").value;
    }
    if(document.getElementById("tempGreen").value != ''){
    	greenValue = document.getElementById("tempGreen").value;
    }else{
    	greenValue = document.getElementById("greenComp").value;
    }
    if(document.getElementById("tempBlue").value != ''){
    	blueValue = document.getElementById("tempBlue").value;
    }else{
    	blueValue = document.getElementById("blueComp").value;
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
 	newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
 	estrte_add_style('color', newColor);
 }

function close_select_features_div(){
let target = document.getElementById("estrte_select_features_div");
target.style.height = "400px";;
target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
target.style.transitionDuration = estrte_animation_dur + 'ms'; /* [1.2] */
target.style.boxSizing = 'border-box'; /* [2] */
target.style.height = target.offsetHeight + 'px'; /* [3] */
target.style.height = 0; /* [4] */
target.style.paddingTop = 0; /* [5.1] */
target.style.paddingBottom = 0; /* [5.2] */
target.style.marginTop = 0; /* [6.1] */
target.style.marginBottom = 0; /* [7.2] */
target.style.overflow = 'hidden'; /* [7] */
window.setTimeout( () => {
  target.style.display = 'none'; /* [8] */
  target.style.removeProperty('height'); /* [9] */
  target.style.removeProperty('padding-top');  /* [10.1] */ 
  target.style.removeProperty('padding-bottom');  /* [10.2] */ 
  target.style.removeProperty('margin-top');  /* [11.1] */ 
  target.style.removeProperty('margin-bottom');  /* [11.2] */ 
  target.style.removeProperty('overflow');  /* [12] */ 
  target.style.removeProperty('transition-duration');  /* [13.1] */ 
  target.style.removeProperty('transition-property');  /* [13.2] */ 
}, estrte_animation_dur);
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
    match.push(null);
  }
  else if(!match[0])
  {
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
    {
      break;
    }
  }
  while(node = node.parentNode);

  return node;
}

document.getElementById("estrte_input_field").contentEditable = "true";
document.getElementById("estrte_input_field").focus();
document.addEventListener("keyup", (function(event){
let existingHTML;
let newInputText;
let newHTML;
let new_log;
    estrte_color_editing = false;
		if(document.getElementById("estrte_input_cont").innerHTML.indexOf('<div class="table_spec_form">') == -1){
if(estrte_fragments_log.length > 0){
       existingHTML = estrte_fragments_log[0].post_edit;
	}else{
       existingHTML = document.getElementById("estrte_content_wrapper").innerHTML;
	}
    newHTML =  document.getElementById("estrte_content_wrapper").innerHTML;
 new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "edit"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById("estrte_undo").style.display = "inline-block";
 	document.getElementById("estrte_undo").innerHTML = "Undo";
	newInputText = document.getElementById("estrte_content_wrapper").innerHTML;
	document.getElementById("estrte_content").value = estrte_sanitise_input_content(newInputText);

	return;
	}else{
	}
}));

for (let i = 0; i < estrte_font_sizes.length; i++) {
  document.getElementById("estrte_fontSizeSelect").innerHTML += '<option value="' + estrte_font_sizes[i] + 'px">' + estrte_font_sizes[i] + "</option>";
}

for (let i = 0; i < estrte_fonts.length; i++) {
  document.getElementById("estrte_fontsSelect").innerHTML += '<option value="' + estrte_fonts[i] + '">' + estrte_fonts[i] + "</option>";
}

document.getElementById("estrte_select_color_label").addEventListener("touchstart", estrte_show_select_color_div, true);
document.getElementById("estrte_select_special_characters_label").addEventListener("touchstart", estrte_show_select_special_characters_div, true);
document.getElementById("estrte_select_emojis_label").addEventListener("touchstart", estrte_show_select_estrte_emojis_div, true);
document.getElementById("estrte_select_color_label").addEventListener("mousedown", estrte_show_select_color_div, true);
document.getElementById("estrte_select_special_characters_label").addEventListener("mousedown", estrte_show_select_special_characters_div, true);
document.getElementById("estrte_select_emojis_label").addEventListener("mousedown", estrte_show_select_estrte_emojis_div, true);
document.getElementById("estrte_input_field").focus();
