import "es6-promise/auto";
import "fetch-polyfill";
import Header from "./_header";
import Footer from "./_footer";
import { SpanWrap } from '../modules/_span_wrap';

const IncludeHTML = (includeFilePath, targetID) => {
  fetch(includeFilePath, {
    credentials: "same-origin"
  }).then(function (response) {
    return response.text();
  }).then(function (text) {

    const element = document.getElementById(targetID);

    if (element != null) {
      
      element.insertAdjacentHTML('afterbegin', text);

      if (targetID == 'footer') {

        Footer();

      } else if (targetID == 'header') {

        Header();

      } else if (targetID == 'contact') {
        
        let targetTextsElms = document.querySelectorAll('#contact .text-anim');

        for (let i = 0; i < targetTextsElms.length; i++) {

          let target = targetTextsElms[i] as HTMLElement;

          let yugos = target.dataset.yugos;
          let ms = target.dataset.ms;

          new SpanWrap(target, yugos, ms);
        }

      }
    }
  });
}

export default IncludeHTML;