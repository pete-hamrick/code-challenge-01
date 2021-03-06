export function getHouses(obj){
    const houses = obj.map(key => key.house)
    const house = Object.values(houses)
    return house;
}

export function updateNumbers(obj) {
    const arr = Object.entries(obj)
    return arr.map(item => `${item[0]}: ${item[1]}`)
}

export function totalCharacters(arr) {
    const names = Object.values(arr).map(item => item.name)
    const spouse = (Object.values(arr).map(item => item.spouse)).filter(function (thing) {return thing != null;})
    const children = (Object.values(arr).map(item => item.children))
    const kids = children.flat(1)
    return names.length + spouse.length + kids.length
}

export function hasChildrenEntries(arr, character) {
    let charObj; 
    arr.forEach(item => {
            if (item.name === character){
                charObj = item
            }            
    })        
    if (charObj['children'].length){
        return true
    } else {
        return false
    }
} 

export function sortByChildren(arr){
    const sorted = arr.sort((a, b) => {
        return a.children.length - b.children.length
    })
    return sorted
} 