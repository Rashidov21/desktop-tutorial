function ClickButton(){
  let  x = document.querySelector('.jumbotron');
  x.innerHTML = '<p>Lemon aprikot buble </p>';
  alert(x.outerHTML)
    for (let i = 0; i < document.body.childNodes.length; i++){
      console.log(document.body.childNodes[i].textContent)
    }
}
