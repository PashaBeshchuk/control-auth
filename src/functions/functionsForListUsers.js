export const editRegister = (letter) => {
    let differentRegisterLetter
    if(letter.codePointAt() >= 97 && letter.codePointAt() <= 122 ) {
        //capital letter
        differentRegisterLetter = letter.codePointAt() - 32
        return differentRegisterLetter
    } else if(letter.codePointAt() >= 65 && letter.codePointAt() <= 90 ) {
        //small lettet
        differentRegisterLetter = letter.codePointAt() + 32
        return differentRegisterLetter
    }
}

export const searchFilmAlgorithm  = (searchLetters, peopleNames) => {
    const searchLettersArray = searchLetters.split("");
    let matchingNames = [];
    let differentRegister;
    for(let i = 0; i < searchLettersArray.length; i++) {
        if(i === 0) {
            differentRegister = editRegister(searchLettersArray[i])
            for(let j = 0; j < peopleNames.length; j++){
                const arrayLettersName = peopleNames[j].name.last.split("")
                if(arrayLettersName[i].codePointAt() === searchLettersArray[i].codePointAt() 
                    ||
                    arrayLettersName[i].codePointAt() === differentRegister){
                    matchingNames.push(peopleNames[j])
                }
            }
        } else {
            const matchingNamesFilter = [...matchingNames]
            let z 
            for( z = 0 ; z < matchingNamesFilter.length; z++) {
                const arrayMatchingNamesFilter = matchingNamesFilter[z].name.last.split("")
                for(let k = 0; k < searchLettersArray.length; k++) {
                    differentRegister = editRegister(searchLettersArray[k])
                    if(!arrayMatchingNamesFilter[k]) return []
                    if(arrayMatchingNamesFilter[k].codePointAt() !== searchLettersArray[k].codePointAt() 
                    &&
                    arrayMatchingNamesFilter[k].codePointAt() !== differentRegister) {
                        matchingNamesFilter.splice( z,1)
                        z = 0
                        break
                    }
                }
            }
            matchingNames = matchingNamesFilter
        }
        
    }
    return matchingNames
}