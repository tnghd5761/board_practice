const users = [
    { member : "administer", password : "helloworld", name : "관리자" },
    { member : "ssu_hong", password : "123456", name : "Suhong"}
]

export function signIn({member, password}) {
    const user = users.find(
        (user) => user.member === member && user.password === password
    )
    if ( user === undefined ) throw new Error()
    return user
}

export function signUp({member, password, name}) {
    const newUser = { member : member, password : password, name : name}
    users = users.concat(newUser)
}