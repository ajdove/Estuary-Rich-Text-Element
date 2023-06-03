const estrte_number_of_table_row_options = 18;
const estrte_number_of_table_column_options = 8;
const estrte_table_padding_options = 4;
const estrte_cell_spacing_options = 4;
const estrte_border_options = 4;
const estrte_default_text_color = "75, 75,75";
const estrte_default_background_color = "255, 255, 255";
const estrte_default_font = "Arial";
const estrte_default_font_size = "16";
const estrte_toggle_speed = 700; // number of milliseconds for toggle elements such as "show colors" ans "show emojis" to open / close.
const estrte_emoji_categories = ["symbols", "faces", "people", "animals", "nature", "activity", "objects", "food", "travel"];

var estrte_textColor = getComputedStyle(document.getElementById("estrte_color_monitor")).getPropertyValue('--text-color');
var estrte_textColorArray = estrte_textColor.substring(estrte_textColor.indexOf('(') + 1, estrte_textColor.indexOf(')')).split(",");

let estrte_select_colour_div_html = '<div class="estrte_color_pallette" id="estrte_color_pallette">';
estrte_select_colour_div_html += '<div class="estrte_colorRowCont"><div id="estrte_setColorRow"></div>';
estrte_select_colour_div_html += '<div class="estrte_LowerSetColorRow" id="estrte_lowerSetColorRow"></div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_slidecontainer" contentEditable = false><label for="redComp" class="estrte_colorLabel" contentEditable = false>Red</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[0];
estrte_select_colour_div_html += '" step=1 class="slider" name="redComp" id="redComp" inputmode="none" oninput="estrte_setColor(\'red\')">';
estrte_select_colour_div_html += '<label for="greenComp" class="estrte_colorLabel" contentEditable = false>Green</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[1];
estrte_select_colour_div_html += '" step=1 class="slider" name="greenComp" id="greenComp" inputmode="none" oninput="estrte_setColor(\'green\')">';
estrte_select_colour_div_html += '<label for="blueComp" class="estrte_colorLabel" contentEditable = false>Blue</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[2];
estrte_select_colour_div_html += '" step=1 class="slider" name="blueComp" id="blueComp" inputmode="none" oninput="estrte_setColor(\'blue\')">';
estrte_select_colour_div_html += '<label for="shadeComp" class="estrte_colorLabel"contentEditable = false>Shade</label><input type="range" class="estrte_toolbar_slider" min="0" max="100" value="50" step=1 class="slider" name="shadeComp" id="shadeComp" oninput="estrte_setColor(\'shade\')">';
//estrte_select_colour_div_html += '<label for="hueComp">Hue</label><input type="range" class="estrte_toolbar_slider" min="0" max="319" value="100" step=1 class="slider" name="hueComp" id="hueComp" oninput="estrte_setHue()">';
estrte_select_colour_div_html += '<input type="hidden" name="tempRed" id="tempRed" value="u" /><input type="hidden" name="tempGreen" id="tempGreen" value="u" /><input type="hidden" name="tempBlue" id="tempBlue" value="u" />';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_colorPickerDivLower" id="estrte_colorPickerDivLower"><label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelColor" onclick="estrte_setColor(\'color\')">Set Color</label>';
estrte_select_colour_div_html += '<label class="estrte_setTextColorLabel" id="estrte_setTextColorLabelBgColor" onclick="estrte_setBackgroundColor()">Set Background</label></div>';
document.getElementById("estrte_select_color_div").innerHTML = estrte_select_colour_div_html;



            var table_html = '<div class="table_spec_form" id="table_spec_form"><div id="table_spec_heading">Table Properties<span class="close_window" title="Close" onclick="close_add_table()">x</span></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Heading</label></div><div class="table_spec_input"><input type="text" name="table_caption" id="table_caption" /></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Rows</label></div><div class="table_spec_input"><select name="no_of_rows_select" id="no_of_rows_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Columns</label></div><div class="table_spec_input"><select name="no_of_columns_select" id="no_of_columns_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Border</label></div><div class="table_spec_input"><select name="border_select" id="border_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Spacing</label></div><div class="table_spec_input"><select name="cellspacing_select" id="cellspacing_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Padding</label></div><div class="table_spec_input"><select name="cellpadding_select" id="cellpadding_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Headers</label></div><div class="table_spec_input"><select name="select_headers" id="select_headers"><option value="">None</option><option value="firstRow">First Row</option><option value="firstColumn">First Column</option><option value="both">Both</option></select></div></div>';
        table_html += '<div class="table_spec_row"><div class="table_spec_caption"></div><div class="table_spec_input"><label id="addTableButton" unselectable="on" onclick="add_table()">Add</label></div></div></div>';
document.getElementById("estrte_table_spec").innerHTML = table_html;

var link_html = '<div class="table_spec_form" id="link_spec_form"><div id="table_spec_heading">Add Link<span class="close_window" title="Close" onclick="close_add_link()">x</span></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Text</label></div><div class="table_spec_input"><input type="text" name="link_text" id="link_text" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>URL</label></div><div class="table_spec_input"><input type="text" name="link_url" id="link_url" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"></div><div class="table_spec_input"><label id="addTableButton" unselectable="on" onclick="add_link()">Add</label></div></div></div>';
document.getElementById("estrte_link_spec").innerHTML = link_html;

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
         emoji: "👍",  category: "general"
        },
        {
         emoji: "🙂",  category: "general"
        },
        {
         emoji: "👍",  category: "symbols"
        },
        {
          emoji: "👎", category: "symbols"
        },
        {
          emoji: "💪️", category: "symbols"
        },
        {
          emoji: "👈️", category: "symbols"
        },
        {
          emoji: "👉️", category: "symbols"
        },
        {
          emoji: "👆", category: "symbols"
        },
        {
          emoji: "🖕️", category: "symbols"
        },
        {
          emoji: "👇", category: "symbols"
        },
        {
          emoji: "🖐️", category: "symbols"
        },
        {
          emoji: "👊", category: "symbols"
        },
        {
          emoji: "🖐️", category: "symbols"
        },
        {
          emoji: "👏️", category: "symbols"
        },
        {
          emoji: "👋", category: "symbols"
        },
        {
          emoji: "📣", category: "symbols"
        },
        {
          emoji: "👄", category: "symbols"
        },
        {
          emoji: "♨️", category: "symbols"
        },
        {
          emoji: "🎵️", category: "symbols"
        },
        {
          emoji: "🎶️", category: "symbols"
        },
        {
          emoji: "💤️", category: "symbols"
        },
        {
          emoji: "👀️", category: "symbols"
        },
        {
          emoji: "☢️", category: "symbols"
        },
        {
          emoji: "💅️", category: "symbols"
        },
        {
          emoji: "🤝️", category: "symbols"
        },
        {
          emoji: "👂", category: "symbols"
        },
        {
          emoji: "📢", category: "symbols"
        },
        {
          emoji: "❤️", category: "symbols"
        },
        {
          emoji: "😲️",  category: "faces"
        },
        {
         emoji: "😂", category: "faces"
        },
        {
         emoji: "😡",  category: "faces"
        },
        {
         emoji: "🤩",  category: "faces"
        },
        {
          emoji: "🤣️",  category: "faces"
        },
        {
          emoji: "😎",  category: "faces"
        },
        {
         emoji: "🤑",  category: "faces"
        },
        {
         emoji: "😇",  category: "faces"
        },
        {
          emoji: "🤥",  category: "faces"
        },
        {
          emoji: "🤪",  category: "faces"
        },
        {
         emoji: "😊",  category: "faces"
        },
        {
         emoji: "😡",  category: "faces"
        },
        {
          emoji: "🤐",  category: "faces"
        },
        {
          emoji: "😴",  category: "faces"
        },
        {
          emoji: "🤑",  category: "faces"
        },
        {
          emoji: "🙄",  category: "faces"
        },
        {
          emoji: "😘",  category: "faces"
        },
        {
          emoji: "😖",  category: "faces"
        },
        {
          emoji: "😭",  category: "faces"
        },
        {
          emoji: "😓",  category: "faces"
        },
        {
          emoji: "😱",  category: "faces"
        },
        {
          emoji: "🤪",  category: "faces"
        },
        {
          emoji: "🤒",  category: "faces"
        },
        {
          emoji: "😒",  category: "faces"
        },
        {
          emoji: "😩",  category: "faces"
        },
        {
          emoji: "😳",  category: "faces"
        },
        {
         emoji: "🐝",  category: "nature"
        },
        {
          emoji: "🐮",  category: "nature"
        },
        {
          emoji: "🦋",  category: "nature"
        },
        {
         emoji: "🦉",  category: "nature"
        },
        {
         emoji: "🐞",  category: "nature"
        },
        {
          emoji: "🌳",  category: "nature"
        },
        {
         emoji: "🌎",  category: "nature"
        },
        {
         emoji: "🌈",  category: "nature"
        },
        {
         emoji: "🌤",  category: "nature"
        },
        {
          emoji: "🌻",  category: "nature"
        },
        {
         emoji: "🥀",  category: "nature"
        },
        {
         emoji: "🌹",  category: "nature"
        },
        {
         emoji: "☘️",  category: "nature"
        },
        {
          emoji: "🌿",  category: "nature"
        },
        {
          emoji: "🦔",  category: "nature"
        },
        {
         emoji: "🐳",  category: "nature"
        },
        {
         emoji: "🦜",  category: "nature"
        },
        {
         emoji: "🐺",  category: "nature"
        },
        {
          emoji: "🦢",  category: "nature"
        },
        {
          emoji: "🦆",  category: "nature"
        },
        {
         emoji: "🐔",  category: "nature"
        },
        {
          emoji: "🦅",  category: "nature"
        },
        {
          emoji: "🐥",  category: "nature"
        },
        {
         emoji: "🕊",  category: "nature"
        },
        {
         emoji: "🦃",  category: "nature"
        },
        {
         emoji: "☄",  category: "nature"
        },
        {
         emoji: "☃",  category: "nature"
        },
        {
         emoji: "💧",  category: "nature"
        },
        {
         emoji: "🎋",  category: "nature"
        },
        {
         emoji: "✨",  category: "nature"
        },
        {
         emoji: "🌠",  category: "nature"
        },
        {
          emoji: "🌦",  category: "animals"
        },
        {
          emoji: "🦛",  category: "animals"
        },
        {
          emoji: "🐼",  category: "animals"
        },
        {
          emoji: "🦄",  category: "animals"
        },
        {
          emoji: "🐧",  category: "animals"
        },
        {
          emoji: "🐳",  category: "animals"
        },
        {
          emoji: "🐪",  category: "animals"
        },
        {
          emoji: "🐫",  category: "animals"
        },
        {
         emoji: "🐰",  category: "animals"
        },
        {
          emoji: "🐬",  category: "animals"
        },
        {
          emoji: "🐋",  category: "animals"
        },
        {
          emoji: "🐟",  category: "animals"
        },
        {
          emoji: "🐠",  category: "animals"
        },
        {
          emoji: "🦈",  category: "animals"
        },
        {
          emoji: "🐢",  category: "animals"
        },
        {
          emoji: "🦀",  category: "animals"
        },
        {
          emoji: "🦐",  category: "animals"
        },
        {
          emoji: "🦚",  category: "animals"
        },
        {
          emoji: "🐴",  category: "animals"
        },
        {
         emoji: "🐿",  category: "animals"
        },
        {
         emoji: "🦌",  category: "animals"
        },
        {
         emoji: "🐏️",  category: "animals"
        },
        {
          emoji: "🐑",  category: "animals"
        },
        {
          emoji: "🦈",  category: "animals"
        },
        {
         emoji: "🏄",  category: "activity"
        },
        {
         emoji: "🏇",  category: "activity"
        },
        {
         emoji: "🏌",  category: "activity"
        },
        {
         emoji: "🚣",  category: "activity"
        },
        {
         emoji: "🏊",  category: "activity"
        },
        {
         emoji: "⛹",  category: "activity"
        },
        {
         emoji: "🏋",  category: "activity"
        },
        {
         emoji: "🚴",  category: "activity"
        },
        {
         emoji: "🚵",  category: "activity"
        },
        {
         emoji: "🤸",  category: "activity"
        },
        {
         emoji: "🤼",  category: "activity"
        },
        {
         emoji: "🤹",  category: "activity"
        },
        {
         emoji: "🎪",  category: "activity"
        },
        {
         emoji: "🎗",  category: "activity"
        },
        {
         emoji: "🎫",  category: "activity"
        },
        {
         emoji: "🎖",  category: "activity"
        },
        {
         emoji: "🏆",  category: "activity"
        },
        {
         emoji: "🏅",  category: "activity"
        },
        {
         emoji: "🥇",  category: "activity"
        },
        {
         emoji: "⚽",  category: "activity"
        },
        {
         emoji: "⚾",  category: "activity"
        },
        {
         emoji: "🏀",  category: "activity"
        },
        {
         emoji: "🏈",  category: "activity"
        },
        {
         emoji: "🏉",  category: "activity"
        },
        {
         emoji: "🎾",  category: "activity"
        },
        {
         emoji: "🎳",  category: "activity"
        },
        {
         emoji: "🏏",  category: "activity"
        },
        {
         emoji: "🏑",  category: "activity"
        },
        {
         emoji: "🏒",  category: "activity"
        },
        {
         emoji: "🏓",  category: "activity"
        },
        {
         emoji: "🏸",  category: "activity"
        },
        {
         emoji: "🥊",  category: "activity"
        },
        {
         emoji: "⛳",  category: "activity"
        },
        {
         emoji: "⛸",  category: "activity"
        },
        {
         emoji: "🎣",  category: "activity"
        },
        {
         emoji: "🎽",  category: "activity"
        },
        {
         emoji: "🎿",  category: "activity"
        },
        {
         emoji: "🛷",  category: "activity"
        },
        {
         emoji: "🥌",  category: "activity"
        },
        {
         emoji: "🎯",  category: "activity"
        },
        {
         emoji: "🎱",  category: "activity"
        },
        {
         emoji: "🎮",  category: "activity"
        },
        {
         emoji: "🎲",  category: "activity"
        },
        {
         emoji: "🎨",  category: "activity"
        },
        {
         emoji: "🎼",  category: "activity"
        },
        {
         emoji: "🎤",  category: "activity"
        },
        {
         emoji: "🎧",  category: "activity"
        },
        {
         emoji: "🎷",  category: "activity"
        },
        {
         emoji: "🎸",  category: "activity"
        },
        {
         emoji: "🎹",  category: "activity"
        },
        {
         emoji: "🎺",  category: "activity"
        },
        {
         emoji: "🎻",  category: "activity"
        },
        {
         emoji: "🥁",  category: "activity"
        },
        {
         emoji: "🎬",  category: "activity"
        },
        {
         emoji: "🏹",  category: "activity"
        },
        {
         emoji: "💎",  category: "objects"
        },
        {
         emoji: "👓",  category: "objects"
        },
        {
         emoji: "🕶",  category: "objects"
        },
        {
         emoji: "👔",  category: "objects"
        },
        {
         emoji: "👕",  category: "objects"
        },
        {
         emoji: "🧣",  category: "objects"
        },
        {
         emoji: "👗",  category: "objects"
        },
        {
         emoji: "👘",  category: "objects"
        },
        {
         emoji: "👛",  category: "objects"
        },
        {
         emoji: "👜",  category: "objects"
        },
        {
         emoji: "🎒",  category: "objects"
        },
        {
         emoji: "👟",  category: "objects"
        },
        {
         emoji: "👠",  category: "objects"
        },
        {
         emoji: "👡",  category: "objects"
        },
        {
         emoji: "👢",  category: "objects"
        },
        {
         emoji: "👑",  category: "objects"
        },
        {
         emoji: "👒",  category: "objects"
        },
        {
         emoji: "🎩",  category: "objects"
        },
        {
         emoji: "🎓",  category: "objects"
        },
        {
         emoji: "⛑",  category: "objects"
        },
        {
         emoji: "💄",  category: "objects"
        },
        {
         emoji: "💍",  category: "objects"
        },
        {
         emoji: "🌂",  category: "objects"
        },
        {
         emoji: "☂",  category: "objects"
        },
        {
         emoji: "💼",  category: "objects"
        },
        {
         emoji: "🚦",  category: "objects"
        },
        {
         emoji: "🚧",  category: "objects"
        },
        {
         emoji: "⚓",  category: "objects"
        },
        {
         emoji: "🛍",  category: "objects"
        },
        {
         emoji: "🏺",  category: "objects"
        },
        {
         emoji: "🗺",  category: "objects"
        },
        {
         emoji: "💈",  category: "objects"
        },
        {
         emoji: "🛢",  category: "objects"
        },
        {
         emoji: "🛎",  category: "objects"
        },
        {
         emoji: "⌛",  category: "objects"
        },
        {
         emoji: "⌚",  category: "objects"
        },
        {
         emoji: "⏰",  category: "objects"
        },
        {
         emoji: "⏱",  category: "objects"
        },
        {
         emoji: "🕰",  category: "objects"
        },
        {
         emoji: "🌡",  category: "objects"
        },
        {
         emoji: "🎈",  category: "objects"
        },
        {
         emoji: "🎉",  category: "objects"
        },
        {
         emoji: "🎊",  category: "objects"
        },
        {
         emoji: "🎐",  category: "objects"
        },
        {
         emoji: "🎀",  category: "objects"
        },
        {
         emoji: "🎁",  category: "objects"
        },
        {
         emoji: "🕹",  category: "objects"
        },
        {
         emoji: "🖼",  category: "objects"
        },
        {
         emoji: "🎙",  category: "objects"
        },
        {
         emoji: "📱",  category: "objects"
        },
        {
         emoji: "☎",  category: "objects"
        },
        {
         emoji: "📞",  category: "objects"
        },
        {
         emoji: "🔋",  category: "objects"
        },
        {
         emoji: "🔌",  category: "objects"
        },
        {
         emoji: "💻",  category: "objects"
        },
        {
         emoji: "🖥",  category: "objects"
        },
        {
         emoji: "🖱",  category: "objects"
        },
        {
         emoji: "📷",  category: "objects"
        },
        {
         emoji: "📹",  category: "objects"
        },
        {
         emoji: "🔍",  category: "objects"
        },
        {
         emoji: "🕯",  category: "objects"
        },
        {
         emoji: "💡",  category: "objects"
        },
        {
         emoji: "✉",  category: "objects"
        },
        {
         emoji: "📧",  category: "objects"
        },
        {
         emoji: "📫",  category: "objects"
        },
        {
         emoji: "📬",  category: "objects"
        },
        {
         emoji: "📮",  category: "objects"
        },
        {
         emoji: "🗳",  category: "objects"
        },
        {
         emoji: "✒",  category: "objects"
        },
        {
         emoji: "🖌",  category: "objects"
        },
        {
         emoji: "🖍",  category: "objects"
        },
        {
         emoji: "📝",  category: "objects"
        },
        {
         emoji: "📅",  category: "objects"
        },
        {
         emoji: "🗓",  category: "objects"
        },
        {
         emoji: "📈",  category: "objects"
        },
        {
         emoji: "📉",  category: "objects"
        },
        {
         emoji: "📊",  category: "objects"
        },
        {
         emoji: "📋",  category: "objects"
        },
        {
         emoji: "📌",  category: "objects"
        },
        {
         emoji: "📍",  category: "objects"
        },
        {
         emoji: "📎",  category: "objects"
        },
        {
         emoji: "🖇",  category: "objects"
        },
        {
         emoji: "📏",  category: "objects"
        },
        {
         emoji: "📐",  category: "objects"
        },
        {
         emoji: "✂",  category: "objects"
        },
        {
         emoji: "🔒",  category: "objects"
        },
        {
         emoji: "🔓",  category: "objects"
        },
        {
         emoji: "🔐",  category: "objects"
        },
        {
         emoji: "🔑",  category: "objects"
        },
        {
         emoji: "🔨",  category: "objects"
        },
        {
         emoji: "⛏",  category: "objects"
        },
        {
         emoji: "⚒",  category: "objects"
        },
        {
         emoji: "🛠",  category: "objects"
        },
        {
         emoji: "🗡",  category: "objects"
        },
        {
         emoji: "⚔",  category: "objects"
        },
        {
         emoji: "🔫",  category: "objects"
        },
        {
         emoji: "🛡",  category: "objects"
        },
        {
         emoji: "🔧",  category: "objects"
        },
        {
         emoji: "🔩",  category: "objects"
        },
        {
         emoji: "⚙",  category: "objects"
        },
        {
         emoji: "🗜",  category: "objects"
        },
        {
         emoji: "⚖",  category: "objects"
        },
        {
         emoji: "🔗",  category: "objects"
        },
        {
         emoji: "⛓",  category: "objects"
        },
        {
         emoji: "⚗",  category: "objects"
        },
        {
         emoji: "🔬",  category: "objects"
        },
        {
         emoji: "🔭",  category: "objects"
        },
        {
         emoji: "📡",  category: "objects"
        },
        {
         emoji: "💉",  category: "objects"
        },
        {
         emoji: "💊",  category: "objects"
        },
        {
         emoji: "🚪",  category: "objects"
        },
        {
         emoji: "🛋",  category: "objects"
        },
        {
         emoji: "🚿",  category: "objects"
        },
        {
         emoji: "🛁",  category: "objects"
        },
        {
         emoji: "💘",  category: "objects"
        },
        {
         emoji: "❤",  category: "objects"
        },
        {
         emoji: "💔",  category: "objects"
        },
        {
         emoji: "💕",  category: "objects"
        },
        {
         emoji: "💖",  category: "objects"
        },
        {
         emoji: "💜",  category: "objects"
        },
        {
         emoji: "💞",  category: "objects"
        },
        {
         emoji: "❣",  category: "objects"
        },
        {
         emoji: "💦",  category: "objects"
        },
        {
         emoji: "💨",  category: "objects"
        },
        {
         emoji: "💫",  category: "objects"
        },
        {
         emoji: "🏁",  category: "objects"
        },
        {
         emoji: "🚩",  category: "objects"
        },
        {
         emoji: "🎌",  category: "objects"
        },
        {
         emoji: "🏴",  category: "objects"
        },
        {
         emoji: "🍳",  category: "food"
        },
        {
         emoji: "🧀",  category: "food"
        },
        {
         emoji: "🥚",  category: "food"
        },
        {
         emoji: "🥞",  category: "food"
        },
        {
         emoji: "🍞",  category: "food"
        },
        {
         emoji: "🥐",  category: "food"
        },
        {
         emoji: "🥯",  category: "food"
        },
        {
         emoji: "🥖",  category: "food"
        },
        {
         emoji: "🥨",  category: "food"
        },
        {
         emoji: "🍔",  category: "food"
        },
        {
         emoji: "🍟",  category: "food"
        },
        {
         emoji: "🌭",  category: "food"
        },
        {
         emoji: "🍕",  category: "food"
        },
        {
         emoji: "🥪",  category: "food"
        },
        {
         emoji: "🌮",  category: "food"
        },
        {
         emoji: "🌯",  category: "food"
        },
        {
         emoji: "🍝",  category: "food"
        },
        {
         emoji: "🍛",  category: "food"
        },
        {
         emoji: "🥘",  category: "food"
        },
        {
         emoji: "🍲",  category: "food"
        },
        {
         emoji: "🍤",  category: "food"
        },
        {
         emoji: "🥗",  category: "food"
        },
        {
         emoji: "🥫",  category: "food"
        },
        {
         emoji: "🥓",  category: "food"
        },
        {
         emoji: "🍖",  category: "food"
        },
        {
         emoji: "🥢",  category: "food"
        },
        {
         emoji: "🥡",  category: "food"
        },
        {
         emoji: "🍚",  category: "food"
        },
        {
         emoji: "🍜",  category: "food"
        },
        {
         emoji: "🥠",  category: "food"
        },
        {
         emoji: "🥮",  category: "food"
        },
        {
         emoji: "🍘",  category: "food"
        },
        {
         emoji: "🍙",  category: "food"
        },
        {
         emoji: "🍣",  category: "food"
        },
        {
         emoji: "🍥",  category: "food"
        },
        {
         emoji: "🍱",  category: "food"
        },
        {
         emoji: "🍡",  category: "food"
        },
        {
         emoji: "🍢",  category: "food"
        },
        {
         emoji: "🍇",  category: "food"
        },
        {
         emoji: "🍑",  category: "food"
        },
        {
         emoji: "🍒",  category: "food"
        },
        {
         emoji: "🍓",  category: "food"
        },
        {
         emoji: "🥝",  category: "food"
        },
        {
         emoji: "🍉",  category: "food"
        },
        {
         emoji: "🍈",  category: "food"
        },
        {
         emoji: "🍊",  category: "food"
        },
        {
         emoji: "🍋",  category: "food"
        },
        {
         emoji: "🍌",  category: "food"
        },
        {
         emoji: "🍍",  category: "food"
        },
        {
         emoji: "🥭",  category: "food"
        },
        {
         emoji: "🥥",  category: "food"
        },
        {
         emoji: "🍎",  category: "food"
        },
        {
         emoji: "🍏",  category: "food"
        },
        {
         emoji: "🌽",  category: "food"
        },
        {
         emoji: "🍐",  category: "food"
        },
        {
         emoji: "🥬",  category: "food"
        },
        {
         emoji: "🥦",  category: "food"
        },
        {
         emoji: "🍄",  category: "food"
        },
        {
         emoji: "🍅",  category: "food"
        },
        {
         emoji: "🥕",  category: "food"
        },
        {
         emoji: "🌶",  category: "food"
        },
        {
         emoji: "🍆",  category: "food"
        },
        {
         emoji: "🥒",  category: "food"
        },
        {
         emoji: "🍳",  category: "food"
        },
        {
         emoji: "🥔",  category: "food"
        },
        {
         emoji: "🍠",  category: "food"
        },
        {
         emoji: "🥜",  category: "food"
        },
        {
         emoji: "🍰",  category: "food"
        },
        {
         emoji: "🎂",  category: "food"
        },
        {
         emoji: "🧁",  category: "food"
        },
        {
         emoji: "🥧",  category: "food"
        },
        {
         emoji: "🍩",  category: "food"
        },
        {
         emoji: "🍪",  category: "food"
        },
        {
         emoji: "🍿",  category: "food"
        },
        {
         emoji: "🍮",  category: "food"
        },
        {
         emoji: "🍯",  category: "food"
        },
        {
         emoji: "🍦",  category: "food"
        },
        {
         emoji: "🍨",  category: "food"
        },
        {
         emoji: "🍧",  category: "food"
        },
        {
         emoji: "🍫",  category: "food"
        },
        {
         emoji: "🍬",  category: "food"
        },
        {
         emoji: "🍭",  category: "food"
        },
        {
         emoji: "🍺",  category: "food"
        },
        {
         emoji: "🍻",  category: "food"
        },
        {
         emoji: "🥂",  category: "food"
        },
        {
         emoji: "🍷",  category: "food"
        },
        {
         emoji: "🍸",  category: "food"
        },
        {
         emoji: "🍹",  category: "food"
        },
        {
         emoji: "🍶",  category: "food"
        },
        {
         emoji: "🥃",  category: "food"
        },
        {
         emoji: "🍳",  category: "food"
        },
        {
         emoji: "☕",  category: "food"
        },
        {
         emoji: "🍵",  category: "food"
        },
        {
         emoji: "🥛",  category: "food"
        },
        {
         emoji: "🍼",  category: "food"
        },
        {
         emoji: "🥤",  category: "food"
        },
        {
         emoji: "🍴",  category: "food"
        },
        {
         emoji: "🍽",  category: "food"
        },
        {
         emoji: "🥣",  category: "food"
        },
        {
         emoji: "🥄",  category: "food"
        },
        {
         emoji: "🧂",  category: "food"
        },
        {
         emoji: "👦",  category: "people"
        },
        {
         emoji: "👶",  category: "people"
        },
        {
         emoji: "👧",  category: "people"
        },
        {
         emoji: "👨",  category: "people"
        },
        {
         emoji: "👩",  category: "people"
        },
        {
         emoji: "👴",  category: "people"
        },
        {
         emoji: "👵",  category: "people"
        },
        {
         emoji: "👮",  category: "people"
        },
        {
         emoji: "🕵",  category: "people"
        },
        {
         emoji: "💂",  category: "people"
        },
        {
         emoji: "👷",  category: "people"
        },
        {
         emoji: "🤴",  category: "people"
        },
        {
         emoji: "👸",  category: "people"
        },
        {
         emoji: "👳",  category: "people"
        },
        {
         emoji: "👲",  category: "people"
        },
        {
         emoji: "🧕",  category: "people"
        },
        {
         emoji: "🧔",  category: "people"
        },
        {
         emoji: "👱",  category: "people"
        },
        {
         emoji: "🤵",  category: "people"
        },
        {
         emoji: "👰",  category: "people"
        },
        {
         emoji: "🤰",  category: "people"
        },
        {
         emoji: "🤱",  category: "people"
        },
        {
         emoji: "👼",  category: "people"
        },
        {
         emoji: "🎅",  category: "people"
        },
        {
         emoji: "🤶",  category: "people"
        },
        {
         emoji: "🙍",  category: "people"
        },
        {
         emoji: "🙎",  category: "people"
        },
        {
         emoji: "🙅",  category: "people"
        },
        {
         emoji: "💁",  category: "people"
        },
        {
         emoji: "🙋",  category: "people"
        },
        {
         emoji: "🙇",  category: "people"
        },
        {
         emoji: "🤦",  category: "people"
        },
        {
         emoji: "🤷",  category: "people"
        },
        {
         emoji: "💆",  category: "people"
        },
        {
         emoji: "💇",  category: "people"
        },
        {
         emoji: "🚶",  category: "people"
        },
        {
         emoji: "🏃",  category: "people"
        },
        {
         emoji: "💃",  category: "people"
        },
        {
         emoji: "🕺",  category: "people"
        },
        {
         emoji: "👯",  category: "people"
        },
        {
         emoji: "🕴",  category: "people"
        },
        {
         emoji: "🗣",  category: "people"
        },
        {
         emoji: "👤",  category: "people"
        },
        {
         emoji: "👥",  category: "people"
        },
        {
         emoji: "👫",  category: "people"
        },
        {
         emoji: "💏",  category: "people"
        },
        {
         emoji: "💑",  category: "people"
        },
        {
         emoji: "👪",  category: "people"
        },
        {
         emoji: "🏎",  category: "travel"
        },
        {
         emoji: "🏍",  category: "travel"
        },
        {
         emoji: "🗾",  category: "travel"
        },
        {
         emoji: "🏔",  category: "travel"
        },
        {
         emoji: "⛰",  category: "travel"
        },
        {
         emoji: "🌋",  category: "travel"
        },
        {
         emoji: "🗻",  category: "travel"
        },
        {
         emoji: "🏕",  category: "travel"
        },
        {
         emoji: "🏜",  category: "travel"
        },
        {
         emoji: "🏝",  category: "travel"
        },
        {
         emoji: "🏞",  category: "travel"
        },
        {
         emoji: "🏟",  category: "travel"
        },
        {
         emoji: "🏛",  category: "travel"
        },
        {
         emoji: "🏗",  category: "travel"
        },
        {
         emoji: "🏘",  category: "travel"
        },
        {
         emoji: "🏠",  category: "travel"
        },
        {
         emoji: "🏡",  category: "travel"
        },
        {
         emoji: "🏢",  category: "travel"
        },
        {
         emoji: "🏣",  category: "travel"
        },
        {
         emoji: "🏤",  category: "travel"
        },
        {
         emoji: "🏥",  category: "travel"
        },
        {
         emoji: "🏦",  category: "travel"
        },
        {
         emoji: "🏨",  category: "travel"
        },
        {
         emoji: "🏩",  category: "travel"
        },
        {
         emoji: "🏪",  category: "travel"
        },
        {
         emoji: "🏫",  category: "travel"
        },
        {
         emoji: "🏬",  category: "travel"
        },
        {
         emoji: "🏭",  category: "travel"
        },
        {
         emoji: "🏯",  category: "travel"
        },
        {
         emoji: "🏰",  category: "travel"
        },
        {
         emoji: "💒",  category: "travel"
        },
        {
         emoji: "🗼",  category: "travel"
        },
        {
         emoji: "🗽",  category: "travel"
        },
        {
         emoji: "⛪",  category: "travel"
        },
        {
         emoji: "🕌",  category: "travel"
        },
        {
         emoji: "🕍",  category: "travel"
        },
        {
         emoji: "⛩",  category: "travel"
        },
        {
         emoji: "🕋",  category: "travel"
        },
        {
         emoji: "⛲",  category: "travel"
        },
        {
         emoji: "⛺",  category: "travel"
        },
        {
         emoji: "🌁",  category: "travel"
        },
        {
         emoji: "🌃",  category: "travel"
        },
        {
         emoji: "🏙",  category: "travel"
        },
        {
         emoji: "🌄",  category: "travel"
        },
        {
         emoji: "🌅",  category: "travel"
        },
        {
         emoji: "🌆",  category: "travel"
        },
        {
         emoji: "🌇",  category: "travel"
        },
        {
         emoji: "🌉",  category: "travel"
        },
        {
         emoji: "🌌",  category: "travel"
        },
        {
         emoji: "🎠",  category: "travel"
        },
        {
         emoji: "🎡",  category: "travel"
        },
        {
         emoji: "🎢",  category: "travel"
        },
        {
         emoji: "🚂",  category: "travel"
        },
        {
         emoji: "🚃",  category: "travel"
        },
        {
         emoji: "🚄",  category: "travel"
        },
        {
         emoji: "🚅",  category: "travel"
        },
        {
         emoji: "🚆",  category: "travel"
        },
        {
         emoji: "🚇",  category: "travel"
        },
        {
         emoji: "🚈",  category: "travel"
        },
        {
         emoji: "🚉",  category: "travel"
        },
        {
         emoji: "🚊",  category: "travel"
        },
        {
         emoji: "🚝",  category: "travel"
        },
        {
         emoji: "🚞",  category: "travel"
        },
        {
         emoji: "🚋",  category: "travel"
        },
        {
         emoji: "🚌",  category: "travel"
        },
        {
         emoji: "🚍",  category: "travel"
        },
        {
         emoji: "🚎",  category: "travel"
        },
        {
         emoji: "🚐",  category: "travel"
        },
        {
         emoji: "🚑",  category: "travel"
        },
        {
         emoji: "🚒",  category: "travel"
        },
        {
         emoji: "🚓",  category: "travel"
        },
        {
         emoji: "🚔",  category: "travel"
        },
        {
         emoji: "🚕",  category: "travel"
        },
        {
         emoji: "🚖",  category: "travel"
        },
        {
         emoji: "🚗",  category: "travel"
        },
        {
         emoji: "🚘",  category: "travel"
        },
        {
         emoji: "🚚",  category: "travel"
        },
        {
         emoji: "🚛",  category: "travel"
        },
        {
         emoji: "🚜",  category: "travel"
        },
        {
         emoji: "🚲",  category: "travel"
        },
        {
         emoji: "🛴",  category: "travel"
        },
        {
         emoji: "🛵",  category: "travel"
        },
        {
         emoji: "🚏",  category: "travel"
        },
        {
         emoji: "🛤",  category: "travel"
        },
        {
         emoji: "⛽",  category: "travel"
        },
        {
         emoji: "🚨",  category: "travel"
        },
        {
         emoji: "⛵",  category: "travel"
        },
        {
         emoji: "🚤",  category: "travel"
        },
        {
         emoji: "🛳",  category: "travel"
        },
        {
         emoji: "⛴",  category: "travel"
        },
        {
         emoji: "🛥",  category: "travel"
        },
        {
         emoji: "🚢",  category: "travel"
        },
        {
         emoji: "✈",  category: "travel"
        },
        {
         emoji: "🛩",  category: "travel"
        },
        {
         emoji: "🛫",  category: "travel"
        },
        {
         emoji: "🛬",  category: "travel"
        },
        {
         emoji: "💺",  category: "travel"
        },
        {
         emoji: "🚁",  category: "travel"
        },
        {
         emoji: "🚟",  category: "travel"
        },
        {
         emoji: "🚠",  category: "travel"
        },
        {
         emoji: "🚡",  category: "travel"
        },
        {
         emoji: "🛰",  category: "travel"
        },
        {
         emoji: "🚀",  category: "travel"
        },
        {
         emoji: "🛸",  category: "travel"
        },
        {
         emoji: "⛱",  category: "travel"
        },
        {
         emoji: "🎆",  category: "travel"
        },
        {
         emoji: "🎇",  category: "travel"
        },
        {
         emoji: "🎑",  category: "travel"
        },
        {
         emoji: "🗿",  category: "travel"
        },
        {
         emoji: "🛂",  category: "travel"
        },
        {
         emoji: "🛃",  category: "travel"
        },
        {
         emoji: "🛄",  category: "travel"
        },
        {
         emoji: "🛅",  category: "travel"
        }
     ];

/* DO NOT MAKE ANY EDITS BELOW THIS LINE */
for (i = 0; i < estrte_font_sizes.length; i++) {
  document.getElementById("estrte_fontSizeSelect").innerHTML += '<option value="' + estrte_font_sizes[i] + 'px">' + estrte_font_sizes[i] + "</option>";
}

for (i = 0; i < estrte_fonts.length; i++) {
  document.getElementById("estrte_fontsSelect").innerHTML += '<option value="' + estrte_fonts[i] + '">' + estrte_fonts[i] + "</option>";
}

for (i = 0; i < estrte_emoji_categories.length; i++) {
      var category = estrte_emoji_categories[i];
      document.getElementById("estrte_select_estrte_emojis_div").innerHTML += '<div class="estrte_emojis_category" id="emojis'+ category + '" unselectable="on"><label onclick="show_category_emojis(\'' + category + '\')">' + category + '&nbsp;&#x25bc;</label><div class="estrte_emojis_category_show" id="emojis_show'+ category + '"></div></div>';
      }
estrte_emojis.forEach((emoji) => {
	var category = emoji.category;
	if(category == "general"){
        document.getElementById("estrte_emojis").appendChild(generateEmojiIcon(emoji.emoji));
	}else{
        document.getElementById("emojis_show" + category).appendChild(generateEmojiIcon(emoji.emoji));
	}

      });
 
 for (i = 0; i < estrte_special_chars.length; i++) {
       document.getElementById("estrte_special_chars").appendChild(generateSpecialcharIcon(estrte_special_chars[i]));
}
document.getElementById("estrte_input_field").focus();
document.getElementById("estrte_select_color_div").innerHTML = estrte_select_colour_div_html;
