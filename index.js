let object


let size=4;

function genAvatars(size){
    let allAvatars=[]
    let uniqueAvatarCount=size*size/2
    for(let i=0; i<2; i++){
        for(let j=0; j<uniqueAvatarCount; j++){
            allAvatars.push(j)
        }
    }
    return allAvatars;

}
let avatars=genAvatars(size)
console.log(avatars)


function genEmptyField1D(size){
    let field = []
    for(let i=0; i<size*size; i++){
        let cell={
            isOpen: false,
            isFound: false,
            avatarIndex: 0
        }
        field.push(cell)
    }
    return field;
}


let field = genEmptyField1D(size)


function fillWithAvatars1d(field, avatars){
    for(let i = 0 ; i<size*size; i++){
        let avatarIndex = Math.floor(Math.random()*avatars.length)
        field[i].avatarIndex=avatars[avatarIndex]
        avatars.splice(avatarIndex,1)
    }
}



fillWithAvatars1d(field,avatars)

function drawField(){
    let container= document.createElement("div")
    container.className="container"

    for(x in field){
        let cell=document.createElement("div")
        if(!cell.classList.contains("cell")){
            cell.classList.add("cell")
        }
        cell.innerHTML=`<img src="https://api.adorable.io/avatars/285/${field[x].avatarIndex}.png"`
        if(!field[x].isOpen){
            cell.classList.add("cellHidden")
            cell.classList.remove("cellOpen")
        }else if(field[x].isOpen){
            cell.classList.add("cellOpen")
            cell.classList.remove("cellHidden")
        }
        container.appendChild(cell);
    }
    const section = document.getElementById("section")
    console.log(section)
    section.appendChild(container)
}


function initGame(size) {
    avatars = genAvatars(size)
    field = genEmptyField1D(size)
    fillWithAvatars1d(field,avatars);
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