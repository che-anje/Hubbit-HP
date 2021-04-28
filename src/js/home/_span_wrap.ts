import { params } from '../_config';



export class SpanWrap {

  target:HTMLElement;
  nodes;
  count:number = 0;
  styleClass:string = '';
  styleClassYugo:string = 'font-yugo';
  yugos;
  ms:number = 100;

  constructor(target,yugos,ms) {
    
    this.target = target;
    this.yugos = yugos;
    if(ms) this.ms = ms;
    this.nodes = this.target.childNodes;

    this.convert();
  }

  convert() {

    let spanWrapText = "";

    this.nodes.forEach((node) => {
      if (node.nodeType == 3) {//テキストの場合

        const text = node.textContent.replace(/\r?\n/g, '');//テキストから改行コード削除
        //spanで囲んで連結
        spanWrapText = spanWrapText + text.split('').reduce((acc, v) => {

          this.count++;
          let spanStyles = '';

          for(let i in this.yugos){
            if (v == this.yugos[i]) {
              spanStyles = this.styleClassYugo;
            }
          }
          
          return acc + `<span class="${spanStyles}" style="transition-delay: ${this.count * this.ms}ms;">${v}</span>`;

        }, "");

      } else {//テキスト以外
        //<br>などテキスト以外の要素をそのまま連結
        spanWrapText = spanWrapText + node.outerHTML;
      }
    })

    this.target.innerHTML = spanWrapText;

  }

}

