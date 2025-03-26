export const getPeopleEndpointResourceNumber = (person: string) => {
  return person.substring(person.lastIndexOf("/") - 1, person.lastIndexOf("/"));
};
