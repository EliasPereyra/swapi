interface Person {
  nombre: string;
  altura: string;
  peso: string;
  color_de_cabello: string;
  color_de_piel: string;
  color_de_ojos: string;
  año_de_nacimiento: string;
  genero: string;
  planeta_natal: string;
  películas: string[];
  especies: string[];
  vehiculos: string[];
  naves_estelares: string[];
  creado: string;
  editado: string;
  url: string;
}

interface Film {
  titulo: string;
  episodio_id: number;
  sinopsis: string;
  director: string;
  productor: string;
  fecha_de_lanzamiento: string;
  personajes: string[];
  planetas: string[];
  naves_estelares: string[];
  vehiculos: string[];
  especies: string[];
  creado: string;
  editado: string;
  url: string;
}

interface Planet {
  nombre: string;
  periodo_de_rotacion: string;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  superficie_agua: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
  creado: string;
  editado: string;
  url: string;
}
