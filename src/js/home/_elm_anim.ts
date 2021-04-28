
const ElmAnim = () => {

  window.addEventListener('scroll',(e)=>{

    let winH = window.innerHeight;
    let inY = winH * 0.3;
    
    let dropElms = document.querySelectorAll('.animation-drop');
    let upElms = document.querySelectorAll('.animation-up');
    let leftInElms = document.querySelectorAll('.animation-left-in');
    let rightInElms = document.querySelectorAll('.animation-right-in');
    let bubbleElms = document.querySelectorAll('.animation-bubble');

    for (let i = 0; i < dropElms.length; i++) {

      let elm = dropElms[i];
      let pos = elm.getBoundingClientRect().top - winH;
      
      if(pos + inY< 0){
        elm.classList.add('scroll-in');
      }
    };

    
    for (let i = 0; i < upElms.length; i++){

      let elm = upElms[i];
      let pos = elm.getBoundingClientRect().top - winH;

      if (pos + inY < 0) {
        elm.classList.add('scroll-in');
      }
    };

    for (let i = 0; i < leftInElms.length; i++) {

      let elm = leftInElms[i];
      let pos = elm.getBoundingClientRect().top - winH;

      if (pos + inY < 0) {
        elm.classList.add('scroll-in');
      }
    };

    for (let i = 0; i < rightInElms.length; i++) {

      let elm = rightInElms[i];
      let pos = elm.getBoundingClientRect().top - winH;

      if (pos + inY < 0) {
        elm.classList.add('scroll-in');
      }
    };

    for (let i = 0; i < bubbleElms.length; i++) {

      let elm = bubbleElms[i];
      let pos = elm.getBoundingClientRect().top - winH;

      if (pos + inY < 0) {
        elm.classList.add('scroll-in');
      }
    };
  });

};

export default ElmAnim;
