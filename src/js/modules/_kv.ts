import { params } from '../_config';

const Kv = ()=>{

  window.addEventListener('load',(e)=>{

    const top = document.getElementById('top');
    const mainTxt = document.getElementById('topMainTxt');
    const mainTxtJa = document.getElementById('topMainTxtJa');
    const medic = document.querySelector('#top .deco-medic');
    const est = document.querySelector('#top .deco-est');
    const cprl = document.querySelector('#top .deco-cprl');
    const info = document.querySelector('#top .deco-info');

    setTimeout(()=>{

      top.classList.add('show');

      setTimeout(() => {

        if (mainTxt) mainTxt.classList.add('show');

      }, 100);

      setTimeout(() => {

        if (mainTxtJa) mainTxtJa.classList.add('show');

      }, 100);

      setTimeout(() => {

        if (medic) medic.classList.add('show');

      }, 1500);

      setTimeout(() => {

        if(medic) medic.classList.add('show');

      },1500);

      setTimeout(() => {

        if(est) est.classList.add('show');

      }, 1500);

      setTimeout(() => {

        if (cprl) cprl.classList.add('show');

      }, 1500);

      setTimeout(() => {

        if (info) info.classList.add('show');

      }, 1500);

    },500);

    
  });
}

export default Kv;