// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

// export function organizePricesByKey(arr) {
//     const obj = {};
//     for(const item of arr) {
//         obj[item.id] = item.price;
//     }
//     return obj;
// }

export function organizePricesByKey(arr) {
    const obj = {};
    arr.forEach(item => {
        obj[item.id] = item.price;
    });
    return obj;
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let obj = {};
    arr.forEach(item => {
        obj[item.id] = item;
    });
    return obj;
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/


export function countByCategory(arr) {
    //create array of the categories
    let categoryArray = [];
    arr.forEach(item => categoryArray.push(item.category)); 
    console.log(categoryArray);

    const countsObject = {};
    categoryArray.forEach(cat => { countsObject[cat] = (countsObject[cat] || 0) + 1; });
    
    return countsObject; 


}



// export function countByCategory(arr) {
//     let fruitCount = (arr.filter(item => item.category === 'fruit')).length;
//     let dairyCount = (arr.filter(item => item.category === 'dairy')).length;
//     let otherCount = (arr.filter(item => item.category === 'other')).length;
    
//     return {
//         fruit: fruitCount,
//         other: otherCount,
//         dairy: dairyCount, 
//     };
// }