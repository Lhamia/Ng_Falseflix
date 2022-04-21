import { Component,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isDark: boolean = false;
  public theme: string = "🌙";
  public navBar = [{
    name:"Inicio",
    link: "/"
  },
  {
  name:"Buscar",
  link:"/buscar"

  }
]

public topGallery =
{
  title:"Los 5 más populares hoy",
  gallery:[{
    position:1,
    image:"./assets/images/Top10/1-papel.webp",
    name:"La casa de Papel",

  },
  {
    position:2,
    image:"./assets/images/Top10/2-reina.webp",
    name:"La reina del Flow",

  },
  {
    position:3,
    image:"./assets/images/Top10/3-titanes.webp",
    name:"Titanes",

  },
  {
    position:4,
    image:"./assets/images/Top10/4-lostinspace.webp",
    name:"Lost in Space",

  },
  {
    position:5,
    image:"./assets/images/Top10/5-dondecaben.webp",
    name:"Donde caben dos",

  }]
}

public cficcion = {
  title: "Ciencia Ficción",
  gallery:[{
    image:"./assets/images/Sci-fi/6dia.webp",
    name: "El sexto día",
  },
  {
    image:"./assets/images/Sci-fi/12monos.webp",
    name: "Doce monos",
  
  },
  {
    image:"./assets/images/Sci-fi/afterearth.webp",
    name: "After Earth",
  },
  {
    image:"./assets/images/Sci-fi/colverparadox.jpg",
    name: "Colver Paradox",
  },
  {
    image:"./assets/images/Sci-fi/core.webp",
    name: "Core",
  },
  {
    image:"./assets/images/Sci-fi/deepimpact.webp",
    name: "Deep Impact",
  },
  {
    image:"./assets/images/Sci-fi/doom.webp",
    name: "Doom",
  },
  {
    image:"./assets/images/Sci-fi/gits.webp",
    name: "Ghost in the Shell",
  },
  {
    image:"./assets/images/Sci-fi/jumper.webp",
    name: "Jumper",
  },
  {
    image:"./assets/images/Sci-fi/passengers.webp",
    name: "Passengers",
  },
  {
    image:"./assets/images/Sci-fi/startrek.webp",
    name: "StarTrek",
  },
  {
    image:"./assets/images/Sci-fi/transformers.webp",
    name: "Transformers",
  },
  {
    image:"./assets/images/Sci-fi/watchmen.webp",
    name: "Watchmen",
  }

]
}


public terrorFilms = {
  title: "Terror",
  gallery:[{
    image:"./assets/images/Terror/apostol.jpg",
    name: "El Apostol",
  },
  {
    image:"./assets/images/Terror/calleterror.jpg",
    name: "La calle del Terror",
  
  },
  {
    image:"./assets/images/Terror/infiernoagua.webp",
    name: "Infierno bajo el agua",
  },
  {
    image:"./assets/images/Terror/insidious2.webp",
    name: "Insidious 2",
  },
  {
    image:"./assets/images/Terror/life.webp",
    name: "Life",
  },
  {
    image:"./assets/images/Terror/malasana.webp",
    name: "Malasaña 32",
  },
  {
    image:"./assets/images/Terror/multiple.webp",
    name: "Multiple",
  },
  {
    image:"./assets/images/Terror/reflejos.webp",
    name: "Reflejos",
  }
]
}



public changeToDark = () =>{
  if (this.isDark == false){
    this.isDark = true;
    this.theme = "☀"
  }
  else if (this.isDark == true){
    this.isDark = false;
    this.theme = "🌙"
  }
}

}