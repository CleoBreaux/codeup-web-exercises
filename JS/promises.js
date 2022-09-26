// fetch('https://api.github.com/users', {headers: {'Authorization': 'token $('GITHUB_KEY')}})

function getGithubUsernames() {
    return fetch('https://api.github.com/users')
        .then(response => response.json())
}

// const userLastCommit = (username) => {
//     fetch('https://api.github.com/users' + '/events', {headers: {'Authorization': 'token $('GITHUB_KEY')}}))
//                 .then(resp => resp.json()).then(data => {
//                 console.log(data);
//                 const commits = data.filter()}
//         })
// }
// userLastCommit("Cosbey1")
// userLastCommit("")
//
// const wait =
// later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));