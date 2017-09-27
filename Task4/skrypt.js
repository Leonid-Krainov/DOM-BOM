if (localStorage.getItem("lang") === null) {
    defaultLanguage = navigator.language.toLocaleLowerCase();
} else {
    defaultLanguage = localStorage.getItem("lang");   
}
var currentLanguage = document.querySelectorAll("span.lang-" + defaultLanguage);
currentLanguage[0].classList.add('visible');
currentLanguage[1].classList.add('visible');

var radio = document.querySelectorAll("div#languages label input");
for (var k=0; k<radio.length; k++) {
	radio[k].onclick = function(){
		var dell = document.getElementsByClassName('visible');
		while (dell.length) {
			dell[0].classList.remove('visible');
		}
		var currentLang = this.value;
		var langEls = document.getElementsByClassName('lang-' + currentLang);
		for (var i=0; i<langEls.length; i++) {
			var langEl = langEls[i];
			langEl.classList.add('visible');
		}
	}
}
var save = document.querySelector('html body button#save')
save.addEventListener('click', function(){
	defaultLanguage = document.querySelector("input:checked");
	localStorage.setItem ("lang", defaultLanguage.value);
});