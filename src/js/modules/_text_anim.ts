import { params } from '../_config';
import { SpanWrap } from './_span_wrap';

const TextAnim = ()=>{

  let targetTextsElms = document.querySelectorAll('.text-anim');

  for(let i=0; i<targetTextsElms.length; i++){

    let target = targetTextsElms[i] as HTMLElement;

    let yugos = target.dataset.yugos;
    let ms = target.dataset.ms;

    new SpanWrap(target, yugos,ms);
  }

  /*
  スクロールイベント
  */

  window.addEventListener('scroll', (e) => {

    let winH = window.innerHeight;
    let inY = winH * 0.3;

    let textAnimElms = document.querySelectorAll('.text-anim.scroll-trigger');

    for (let i = 0; i < textAnimElms.length; i++) {

      let elm = textAnimElms[i];
      let pos = elm.getBoundingClientRect().top - winH;

      if (pos + inY < 0) {
        elm.classList.add('scroll-in');
      }
    };

  });
}

export default TextAnim;