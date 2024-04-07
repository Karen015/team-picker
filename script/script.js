const tagCreator = (tagName, parent, value = '', tagClass) => {
    const tag = document.createElement(tagName);
    tag.classList = tagClass
    parent.appendChild(tag)
    tag.innerHTML = value;
}
let memberCount = 2
const teamCount = document.getElementById('teamCount')
teamCount.addEventListener('input', () => {
    teamCountValue = teamCount.value
    memberCount = teamCountValue
})

const members = [
    // 'Anna Aleksanyan',
    // 'Areg Kepidyan',
    // 'Samvel Jamalyan',
    // 'Grigor Hovsepyan',
    // 'Mariam Hakobyan',
    // 'Nona Mkrtchyan',
    // 'Robert Mkrtchyan',
    // 'Levon Shekoyan',
    // 'Erik Harutyunyan',
    // 'Arman Vardanyan',
    // 'Davit Gasparyan',
    // 'Davit Ghalumyan',
    // 'Karen Aghajanyan',
    // 'Davit Sargsyan'
]

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault(); 
    const newMember = document.getElementById('nameAdd').value;
    members.push(newMember)
    document.getElementById('nameAdd').value = ''
});


function teamPicker(list, memberCountIn) {
    
    const helperText = document.getElementById('helperText');
    const teamContainer = document.getElementById('team');
    const team = [];
   
    if(list.length > 1) {
        helperText.innerHTML = '';

        for(let i = 0; i < memberCount; i++) {           
            const randomIndex = Math.ceil(Math.random() * list.length - 1);
            const sliced = list.splice(randomIndex, 1);
            team.push(sliced[0]);
        }

        let message = ``;

        for(let i = 0; i < team.length; i++) {
            if (team[i] !== undefined) {
                message += ` ${team[i]},`;
            } 
            
        }
        const createdTeamContainer = document.getElementById('article2')
        tagCreator('div', createdTeamContainer, message, 'createdTeamContainer') 

        
        teamContainer.innerHTML = message;

    }else if(list.length === 1) {
        const aloneContainer = document.getElementById('alone');
        teamContainer.innerHTML = '';
        aloneContainer.innerHTML = `oops ${list[0]} is alone`;
        
    }
    else {
        helperText.innerHTML = '';
        teamContainer.innerHTML = '';
        const end = document.getElementById('end');
        end.innerHTML = 'Members list is empty';
    }
}
