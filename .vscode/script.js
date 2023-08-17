function mudarModo (){
  const html = document.documentElement //criando uma constante do elemento html da página

 /* if (html.classList.contains('parte-branca')){ //se tiver parte branca o botão vai mudar
    html.classList.remove('parte-branca') //aqui ele remove a class parte-branca do html
  } else {
    html.classList.add("parte-branca") 
  }
  */
 html.classList.toggle('parte-branca') //essa funcao faz o que a funcao acima faz
}

