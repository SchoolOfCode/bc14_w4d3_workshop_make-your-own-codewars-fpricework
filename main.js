/* 
👉 Write your kata here!
*/

// Three Bowls of Fruit
// 
// Three arrays of objects containing fruits and the type of fruit they are
// Need to add all of them together into one array of objects (horn of plenty) and sort them by their type and then alphabetically (the chief has OCD)
// The chief likes to rummage and always picks the one right in the middle

let Sunki = 
[
    {
        fruit: "Lemon",
        classification: "Citrus",
    },
    {
        fruit: "Mango",
        classification: "Drupe",
    },
    {
        fruit: "Orange",
        classification: "Citrus",
    },
    {
        fruit: "Strawberries",
        classification: "Berry",
    },
    {
        fruit: "Plum",
        classification: "Drupe",
    },
]

let Waban = 
[
    {
        fruit: "Cranberries",
        classification: "Berry",
    },
    {
        fruit: "Coconut",
        classification: "Drupe",
    },
    {
        fruit: "Grapefruit",
        classification: "Citrus",
    },
    {
        fruit: "Lime",
        classification: "Citrus",
    },
    {
        fruit: "Satsuma",
        classification: "Citrus",
    },
]

let Aiyana = 
[
    {
        fruit: "Blueberries",
        classification: "Berry",
    },
    {
        fruit: "Grapes",
        classification: "Berry",
    },
    {
        fruit: "Peach",
        classification: "Drupe",
    },
    {
        fruit: "Cherries",
        classification: "Drupe",
    },
    {
        fruit: "Raspberries",
        classification: "Berry",
    },
]





//👉 Write the function your CodeWarriors will start with below here:


function chooseAFruit(...args)
{
    let hornOfPlenty = [];
    // ANSWER

    args.forEach(arg => 
    {
        // console.log(args.length);
        // console.log(arg.length);

        for (let i = 0; i < arg.length; i++)
        {
            console.log(arg[i].fruit);
            let object = 
            {
                fruit: arg[i].fruit,
                classification: arg[i].classification,
            }

            hornOfPlenty.push(object);
        }
    });
    console.log(hornOfPlenty);

    hornOfPlenty.sort((a, b) => (a.classification > b.classification) ? 1 : (a.classification === b.classification) ? ((a.fruit > b.fruit) ? 1 : -1) : -1 );

    console.log(hornOfPlenty);

    console.log(hornOfPlenty[7].fruit);
    
    // return hornOfPlenty[7].fruit;
}

chooseAFruit(Sunki, Waban, Aiyana);