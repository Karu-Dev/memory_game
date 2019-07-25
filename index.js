let object


let size = 4;


function clickHandler(field, cell) {
    let clicks=0;
    for (x in field) {
        if(field[x].isOpen&&!field[x].isFound){
            clicks++;
        }
        for (y in field) {
            if(clicks===2){
                if (field[x].isOpen && field[y].isOpen) {
                    if (!field[x].isFound && !field[y].isFound) {
                        field[x].isOpen = false
                        field[y].isOpen = false
                    }
                }
            }
        }
        if (field[cell.cellID].avatarIndex===field[x].avatarIndex&&field[x].isOpen) {
            field[x].isFound = true
            field[cell.cellID].isFound = true;
        }
    }
    // debugger
    field[cell.cellID].isOpen = true;
    drawField()
}

function genAvatars(size) {
    let allAvatars = []
    let uniqueAvatarCount = size * size / 2
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < uniqueAvatarCount; j++) {
            allAvatars.push(j)
        }
    }
    return allAvatars;

}
let avatars = genAvatars(size)
console.log(avatars)


function genEmptyField1D(size) {
    let field = []
    for (let i = 0; i < size * size; i++) {
        let cell = {
            isOpen: false,
            isFound: false,
            avatarIndex: 0
        }
        field.push(cell)
    }
    return field;
}


let field = genEmptyField1D(size)


function fillWithAvatars1d(field, avatars) {
    for (let i = 0; i < size * size; i++) {
        let avatarIndex = Math.floor(Math.random() * avatars.length)
        field[i].avatarIndex = avatars[avatarIndex]
        avatars.splice(avatarIndex, 1)
        field[i].id = i;
        console.log(field[i].id)
    }
}



fillWithAvatars1d(field, avatars)

function drawField() {
    let container = document.createElement("div")
    container.className = "container"

    for (let x in field) {
        let cell = document.createElement("div")
        if (!cell.classList.contains("cell")) {
            cell.classList.add("cell")
        }
        cell.innerHTML = `<img src="https://api.adorable.io/avatars/285/${field[x].avatarIndex}.png" height=100px width=100px>`
        if (!field[x].isOpen) {
            cell.classList.add("cellHidden")
            cell.classList.remove("cellOpen")
        } else if (field[x].isOpen) {
            cell.classList.add("cellOpen")
            cell.classList.remove("cellHidden")
        }
        cell.cellID = x;
        cell.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(x)
            clickHandler(field, cell, avatars)
        })

        container.appendChild(cell);
    }
    const section = document.getElementById("section")
    console.log(section)
    section.appendChild(container)
    if (section.childNodes.length > 0) {
        section.removeChild(section.childNodes[0])
    }
}


function initGame(size) {
    avatars = genAvatars(size)
    field = genEmptyField1D(size)
    fillWithAvatars1d(field, avatars);
    drawField();



}
initGame(4)
console.log(field)
// function generateEmptyField(size) {
//     let field = []

//     for (let y = 0; y < size; y++) {
//         let row = []
//         for (let x = 0; x < size; x++) {
//             let cell = {
//                 x,
//                 y,
//                 isOpen: false,
//                 isFound: false,
//                 avatarIndex: 0
//             }
//             row.push(cell)
//         }
//         field.push(row)
//     }
//     return field;
// }
    // function fillWithAvatars(field, avatars) {
        //     for (let x in field) {
    //         let row = field[x];
    //         for (let y in row) {
        //             let cell = row[y]
        //             let avatarIndex = Math.floor(Math.random()*avatars.length)
    //             cell.avatarIndex=avatars[avatarIndex]
    //             avatars.splice(avatarIndex,1)
    //             }
    //         }
    //     }