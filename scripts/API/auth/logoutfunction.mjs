export async function logOut(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    location.replace("index.html");
}