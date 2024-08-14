import { useAuth0 } from "@auth0/auth0-vue"

async function fetchAuth0 (isAuthenticated) {
    const { user } = useAuth0()
    console.log("in fetchAuth0(): isAuthenticated = ", isAuthenticated)
    console.log("is authenticated = ", isAuthenticated.value)
    isAuthenticated = isAuthenticated.value
    if (isAuthenticated === false) {
        console.error("NOT AUTHENTICATED!")
    } else {
        console.log("Is authenticated")
        const userID = user.value.sub
        console.log("userID = ", userID)
        //console.log("In fetchAuth0: userID = ", userID.split('|')[1])
        return userID.split('|')[1]
    }
}

export { fetchAuth0 }