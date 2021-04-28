import { params } from '../_config';


/* export default */
const Header = () => {

  const menuShowHide = ()=>{

    const inputBtn = document.getElementById('menuInputCheckbox') as HTMLInputElement;
    const slideContents = document.getElementById('slideContents') as HTMLElement;

    if (inputBtn.checked){
      
      slideContents.classList.add('hide');

    } else {

      slideContents.classList.remove('hide');
    }
  }

  document.getElementById('menuInputCheckbox').addEventListener('change',(e)=>{
    
    menuShowHide();
  });

  menuShowHide();
  
}
  
export default Header;