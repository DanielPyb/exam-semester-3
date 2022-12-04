export function isLoggedIn(){
    if(localStorage.getItem("username")){
        return true;
    } else{
        return false;
    }
}