import "es6-promise/auto";
import { params } from '../_config';

const TypingAnimBeta = ()=>{

  const typing = {
    start: (elemID) => {

      let elem = document.getElementById(elemID) as HTMLElement;
      let htmlTxt = elem.innerHTML;
      let str = htmlTxt.replace(/(<br>|<br \/>)/gi, '\n');
      let txtArr = str.split("");
      
      
      elem.innerHTML = "";

      new Promise(function (res, rej) {

        const addChar = (i) => {

          return new Promise(function (resolve, reject) {

            //句読点はtimer早めに
            let timerDur = 100;
            if (txtArr[i] == '、' || txtArr[i] == '\n') {
              timerDur = 1
            };

            setTimeout(() => {

              //let cTxt = elem.innerHTML;
              //elem.innerHTML = cTxt;
              elem.insertAdjacentHTML('beforeend', txtArr[i].replace(/\n/, "<br>"));

              resolve(i + 1);

            }, timerDur);

          }).then((count) => {

            if (count >= txtArr.length) {
              res();
            } else {
              addChar(count);
            };

          });

        };

        //コピー初期化
        elem.style.display = 'inline-block';
        elem.style.opacity = '1';
        
        //タイピング処理開始
        addChar(0);

      }).then(() => {

        typing.comp();

      });
    },
    comp: () => {


    }
  };

  setTimeout(()=>{
    typing.start('messageTxt01');
  },2000);
  
}

export default TypingAnimBeta;