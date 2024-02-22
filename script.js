function toggleMode() {
  const html = document.documentElement
  //vc pode usaer isso:
  html.classList.toggle("light")

// ou isso:
  // if (html.classList.contain('light'))
  //   html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  //}

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //susbtituir a imagem:
  if (html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/zenitsu.jpeg")
  } else {
    img.setAttribute("src", "./assets/night.jpg")
  }
}