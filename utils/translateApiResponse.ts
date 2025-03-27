type TranslationMap = { [key: string]: string };

export const peopleTranslations: TranslationMap = {
  name: "nombre",
  height: "altura",
  mass: "peso",
  hair_color: "color_de_cabello",
  skin_color: "color_de_piel",
  eye_color: "color_de_ojos",
  birth_year: "año_de_nacimiento",
  gender: "genero",
  homeworld: "planeta_natal",
  films: "películas",
  species: "especies",
  vehicles: "vehiculos",
  starships: "naves_estelares",
  created: "creado",
  edited: "editado",
  url: "url",
};

export const filmTranslations: TranslationMap = {
  title: "titulo",
  episode_id: "episodio_id",
  opening_crawl: "sinopsis",
  director: "director",
  producer: "productor",
  release_date: "fecha_de_lanzamiento",
  characters: "personajes",
  planets: "planetas",
  starships: "naves_estelares",
  vehicles: "vehiculos",
  species: "especies",
  created: "creado",
  edited: "editado",
  url: "url",
};

export const planetTranslations: TranslationMap = {
  name: "nombre",
  rotation_period: "periodo_de_rotacion",
  orbital_period: "periodo_orbital",
  diameter: "diametro",
  climate: "clima",
  gravity: "gravedad",
  terrain: "terreno",
  surface_water: "superficie_agua",
  population: "poblacion",
  residents: "residentes",
  films: "peliculas",
  created: "creado",
  edited: "editado",
  url: "url",
};

function translateAttributes<T extends object>(
  obj: T,
  translations: TranslationMap
): Record<keyof T, any> {
  const translateObject = {} as Record<keyof T, any>;

  for (const key in obj) {
    const translatedKey = translations[key] || key;
    translateObject[translatedKey as keyof T] = obj[key];
  }

  return translateObject;
}

export function translateArray<T extends object>(
  arr: T[],
  translations: Record<string, string>
): Record<keyof T, any>[] {
  return arr?.map((item) => translateAttributes(item, translations));
}
