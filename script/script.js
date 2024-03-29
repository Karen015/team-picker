const members = [
    'Anna Aleksanyan',
    'Areg Kepidyan',
    'Samvel Jamalyan',
    'Grigor Hovsepyan',
    'Mariam Hakobyan',
    'Nona Mkrtchyan',
    'Robert Mkrtchyan',
    'Levon Shekoyan',
    'Erik Harutyunyan',
    'Arman Vardanyan',
    'Davit Gasparyan',
    'Davit Ghalumyan'
]

function teamPicker(list, teamCount = 2) {
    const helperText = document.getElementById('helperText')
    const teamContainer = document.getElementById('team')
    const team = []
    if(list.length > 1) {
        helperText.innerHTML = ''
        for(let i = 0; i < teamCount; i++) {
            const randomIndex = Math.ceil(Math.random() * list.length - 1)
            const sliced = list.splice(randomIndex, 1)   
            team.push(sliced[0])     
        }
        const message = `Team Members Are ${team[0]} and ${team[1]}`
        teamContainer.innerHTML = message

    }else if(list.length === 1) {
        const aloneContainer = document.getElementById('alone')
        teamContainer.innerHTML = ''
        aloneContainer.innerHTML = `oops ${list[0]} is alone`
        
    }
    else {
        teamContainer.innerHTML = ''
        const end = document.getElementById('end');
        end.innerHTML = 'Members list is empty'
    }
}
