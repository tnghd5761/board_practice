export function signIn({members, member, password}) {
    const users = members;
    const user = users.find(
        (user) => user.member === member && user.password === password
    )
    if ( user === undefined ) throw new Error()
    return user
}