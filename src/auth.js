const users = [
    { member : "administer", password : "helloworld" },
    { member : "ssu_hong", password : "123456" }
]

export function signIn({member, password}) {
    const user = users.find(
        (user) => user.member === member && user.password === password
    )
    if ( user === undefined ) throw new Error()
    return user
}