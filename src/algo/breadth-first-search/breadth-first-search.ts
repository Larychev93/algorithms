/**
 * Алгоритм поиска в ширину
 * Алгоритм:
 * 1 Поместить узел, с которого начинается поиск, в изначально пустую очередь.
 * 2 Извлечь из начала очереди первый узел и проверить подходит ли он под критерии поиска
 *  - Если подходит то завершиь поиск
 *  - Если не подходит то добавить всех приемников в очередь поиска и пометить узел что он прошел поиск
 * 3 Повторяем
 */

interface IPerson {
  name: string;
  isMangoSeller: boolean
}

const graph: { [name: string]: IPerson[] } = {};

graph.you = [
  {name: "alice", isMangoSeller: false},
  {name: "bob", isMangoSeller: false},
  {name: "claire", isMangoSeller: false}
];
graph.bob = [
  {name: "anuj", isMangoSeller: false},
  {name: "peggy", isMangoSeller: false},
];
graph.alice = [
  {name: "peggy", isMangoSeller: false},
]
graph.claire = [
  {name: "tom", isMangoSeller: true },
  {name: "johny", isMangoSeller: false},
];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name: string) => {
  let searchQueue = [...graph[name]];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift() as IPerson;

    if (!person) {
      console.log('no mango sellers')

      return null;
    }

    console.log('Person', person);

    if (searched.indexOf(person.name) === -1) {
      if (person.isMangoSeller) {
        console.log(`${person.name} is a mango seller!`);

        return person;
      }

      searchQueue = searchQueue.concat(graph[person.name]);

      console.log(searchQueue)

      searched.push(person.name);
    }
  }
};

search('you')
