import "es6-promise/auto";
import "fetch-polyfill";
import Header from "./_header";
import Footer from "./_footer";

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

      }
    }
  });
}

export default IncludeHTML;