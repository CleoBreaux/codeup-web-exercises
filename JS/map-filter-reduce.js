const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
console.log(users);

const userLanguages = users.filter(users => users.languages.length >= 3)
console.log(userLanguages);

const userEmail = users.map(({email}) => email)
console.log(userEmail);

const userExperience = users.reduce((total, user) => {
    return total + users.userExperience;
}, 0);

const averageUserExperience = userExperience / users.length
console.log(userExperience)
console.log(averageUserExperience)

const longestEmail = users.reduce((email, user)=> (email.length > user.email.length) ? email : user.email, "")
console.log(longestEmail);

const instructorIntroduction = users.reduce((name, users, index) => {
    if (index !== users.length - 1) {
        return '$(name'
    }
})

// const userLanguage= users.reduce((name, languages ) => {
//     return + users.languages;
// }, 0);
// console.log(userLanguage)