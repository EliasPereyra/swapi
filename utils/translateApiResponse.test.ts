import { peopleTranslations, translateArray } from "./translateApiResponse";

describe("La función 'translateAttributes' ", () => {
  test("debe traducir las claves de cualquier api response de Star Wars a español", () => {
    const arr = [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
        homeworld: "https://swapi.py4e.com/api/planets/1/",
        films: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
        ],
        species: [],
        vehicles: [],
        starships: [],
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:50.331000Z",
        url: "https://swapi.py4e.com/api/people/1/",
      },
    ];
    const expectedOutput = peopleTranslations;

    expect(translateArray(arr, expectedOutput)).toEqual(expectedOutput);
  });
});
