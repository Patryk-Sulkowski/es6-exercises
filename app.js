import objekt from "import.js";
import zmienna from "import.js";

zmienna(objekt);

let house = {
    doors: 15,
    rooms: 5,
    mirrors: 2,
    floors: [
        {
            id: 1,
            name: "first floor"
        },
        {
            id: 2,
            name: "second floor"
        },
        {
            id: 3,
            name: "third floor"
        }
    ]
}

console.log(house);

// let const

const newFloors = [
    {
        id: 4,
        name: "my room"
    }
]

/*for(var i = 0; $i < 1000; $i++){
    house.floors[length+i] = newFloors[i];
}*/

//house.floors = [...house.floors, ...newFloors];

//const name = `halo ${house.mirrors}`;


