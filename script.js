let kuc = $('#keyboard-upper-container');
let changeKeyboard = $('#changeKeyboard');
let keyClass = $('.text center keyboard-container');
let klc = $('#keyboard-lower-container');
let shifted = false;
let completed = false;
let currentSen = 0;
let currentLet = 0;
let keyList = $('.key');
let spaceBar = $('#32')
let sentence = $('#sentence')
let target = $('#target-letter')
let score = $('#points')
kuc.toggle(1000)
changeKeyboard.click(function () {
	$(kuc).toggle(1000)
})
$(document).keydown(function (e) {
	if (e.keyCode == 16) {
		klc.toggle(1000);
		kuc.toggle(1000);
		shifted = true
	}
});
$(document).keyup(function (e) {
	if (e.keyCode == 16) {
		klc.toggle(1000);
		kuc.toggle(1000);
		shifted = false
	}
});	
let highlight = $('#yellow-block');
let highlightClone = $('#yellow-block');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
	'Too ato too nOt enot one totA not anot tOO aNot',
	'oat itain oat tain nate eate tea anne inant nean',
	'itant eate anot eat nato inate eat anot tain eat',
	'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let input = $('#answer')
// (e.key == sentences[sentenceNumber][sentencePosition].innerText)
let senCount = 0;
let letCount = 0;
let letter = sentences[senCount][letCount]
let points = 0
currentLet = letter - 1
if (senCount == 0) {
	sentence.html(sentences[0])
}
else if (senCount == 1) {
	sentence.html(sentences[1])
}
else if (senCount == 2) {
	sentence.html(sentences[2])
}
else if (senCount == 3) {
	sentence.html(sentences[3])
}
else if (senCount == 4) {
	sentence.html(sentences[4])
}

console.log(sentences[0].length)
target.html(letter)

$(document).keydown(function (e) {
	for (i = 0; i < keyList.length; i++) {
		if (e.key == keyList[i].innerText) {
			$(keyList[i]).css("background", "yellow")
			if (e.key != letter) {
				console.log(e.key)
				console.log('Stop!')
				alert('STOP! YOU HAVE VIOLATED THE LAW!')
				points--
				score.html(points)
			}
			if (e.key == letter) {
				highlight.append(letter)
				letCount++
				letter = sentences[senCount][letCount]
				console.log(letter)
				target.html(letter)
				points++
				console.log(letCount)
				score.html(points)
				console.log(letter)
			}
			if (letter == ' ') {
				letCount++
				letter = sentences[0][letCount]
				highlight.append(' ')
				console.log(letter)
				target.html('space')
			}
			if (letCount == sentences[0].length) {
				highlight.empty();
				highlight.css({
					'background-color': 'yellow',
					'height': '40px',
					'width': 'auto',
					'position': 'absolute',
					'border': '3px solid black',
					'display': 'flex',
					'justify-content': 'center',
					'align-items': 'center'
				})
				senCount = 1;
				sentence.html(sentences[1])
				letCount = 0;
				letter = sentences[1][letCount]


			}
			if (senCount == 1 && letCount == sentences[1].length) {
				highlight.empty();
				highlight.css({
					'background-color': 'yellow',
					'height': '40px',
					'width': 'auto',
					'position': 'absolute',
					'border': '3px solid black',
					'display': 'flex',
					'justify-content': 'center',
					'align-items': 'center'
				})
				senCount = 2;
				sentence.html(sentences[2])
				letCount = 0;
				letter = sentences[2][letCount]


			}
		}
	}
})


$(document).keyup(function (e) {
	for (i = 0; i < keyList.length; i++) {
		if (event.key == keyList[i].innerText) {
			$(keyList[i]).css("background", "")
		}
	}
})