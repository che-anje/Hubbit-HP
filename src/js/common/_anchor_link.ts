import { params } from '../_config';

const AnchorLink = ()=>{

  /*
  ヘッダーの高さぶん補正あり
  */
  const btns = document.getElementsByClassName('anchor-link-cr');

  for (let i = 0; i < btns.length; i++) {
    
    btns[i].addEventListener('click', (e) => {

      e.preventDefault();

      let targetElm = e.currentTarget as HTMLElement;

      const targetID = targetElm.getAttribute('href').slice(1);
      
      let headerHeight;
      if (params.getPcSp()=='pc'){
        headerHeight = 100;
      } else if(params.getPcSp()=='sp'){
        headerHeight = 50;
      }
      const target = document.getElementById(targetID);
      const rectTop = target.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      const top = rectTop + offsetTop - headerHeight;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  }

  /*
  ヘッダーの高さぶん補正なし
  */
  const btnsb = document.getElementsByClassName('anchor-link');

  for (let i = 0; i < btnsb.length; i++) {

    btnsb[i].addEventListener('click', (e) => {

      e.preventDefault();

      let targetElm = e.currentTarget as HTMLElement;

      const targetID = targetElm.getAttribute('href').slice(1);

      const target = document.getElementById(targetID);
      const rectTop = target.getBoundingClientRect().top;
      const offsetTop = window.pageYOffset;
      const top = rectTop + offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  }
}

export default AnchorLink;