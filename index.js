// Code your solution here
const findMatching = function(names, string){
    return(names.filter(function(name){
        return name.toLowerCase() === string.toLowerCase()
    })
    )
}