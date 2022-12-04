export async function logOut(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
}