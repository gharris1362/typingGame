
let kuc = $('#keyboard-upper-container');
let changeKeyboard = $('#changeKeyboard');
let keyClass = $('.text center keyboard-container');
let klc = $('#keyboard-lower-container');
let shifted = false;
let completed = false;
let currentSen = 0;
let currentLet = 0;
let keyList = $('.key');
let sentence = $('#sentence')
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

//lowerCase letters


let highlight = $('#yellow-block');
let answer = '';


let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
  'Too ato too nOt enot one totA not anot tOO aNot',
  'oat itain oat tain nate eate tea anne inant nean',
  'itant eate anot eat nato inate eat anot tain eat',
  'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let input = $('#answer')

// (e.key == sentences[sentenceNumber][sentencePosition].innerText)




$(document).keydown(function(e){
 for (i = 0; i < keyList.length; i++){
   if (e.key == keyList[i].innerText) {
     $(keyList[i]).css("background", "yellow")

     for(i = 0; i < sentences[0].length; i++) {
  if (e.key == sentences[0][0]) {
    console.log('kill me')
  }
}


   }
   
 }
})


$(document).keyup(function(e){
  for (i = 0; i < keyList.length; i++){
    if (e.key == keyList[i].innerText) {
      $(keyList[i]).css("background", "")
    }
  }
 })


 console.log(sentences[0].length)

sentence.html(sentences[0])

let counter = 0



