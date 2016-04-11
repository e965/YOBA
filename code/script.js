"use strict";

var dict = {"а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo", "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ч": "ch", "ф": "f","х": "h", "ц": "ts", "ш": "sh", "щ": "sch", "ы": "i", "ъ": "'", "ь": "", "э": "e", "ю": "yu", "я": "ya"},
	yobatext = document.getElementById("yobatext"),
	yobatext_p = 'Для того, чтобы сделать YOBIFIKATSIYU TEKSTA, введите его в это поле и нажмите "Yobify" внизу страницы. Внимание: поддерживается только перевод с русской раскладки.',
	out = "", str, tmpstr, i, yobatext;

yobatext.placeholder = "Привет! " + yobatext_p;
yobatext.addEventListener("focus", function() {yobatext.placeholder = ""});
yobatext.addEventListener("blur", function() {yobatext.placeholder = yobatext_p});

function toYoba(str) {
	tmpstr = str.toLowerCase().replace(/\nнули/g, "\n" + "nuli").replace(/\ нули/g, " " + "nuli").replace(/\нули/g, 'nooley'); // пиздец велосипед, да
	for (i = 0; i < tmpstr.length; ++i) {
		if (tmpstr[i] in dict) {
			out += dict[tmpstr[i]];
		} else {
			out += tmpstr[i];
		}
	}
	return out.toUpperCase();
}

function yobify() {
	if (yobatext.value == "") {
		yobatext.placeholder = "Вы ничего сюда не ввели! :(";
	} else {
		yobatext.value = toYoba(yobatext.value);
		out = "";
	}
}

document.querySelector(".yobify").addEventListener("click", yobify);