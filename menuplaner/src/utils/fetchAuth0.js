import { useAuth0 } from "@auth0/auth0-vue";

export function processAuth0User(authenticationStatus, userInfo) {
    const { user, isAuthenticated } = useAuth0();
    
    if (isAuthenticated.value === false) {
        console.error("NOT AUTHENTICATED!");
        authenticationStatus.value = false;
        userInfo.value = null;
    } else {
        console.log("Is authenticated");
        const userID = user.value.sub;
        console.log("userID = ", userID);
        authenticationStatus.value = true;
        userInfo.value = userID.split('|')[1];
    }
}
