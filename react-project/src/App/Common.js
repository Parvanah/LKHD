// export const getUser =()=>{
//     const userStr = sessionStorage.getItem("user");
//     if (userStr) return JSON.parse(userStr);
//     else return null;
// }

// export const getToken =()=>{
//    return sessionStorage.getItem("token") || null;
// }

// export const setUserSession =(token,user)=>{
//     sessionStorage.getItem("token",token);
//     sessionStorage.getItem("user",JSON.stringify(user))
// }

// export const removeUserSession =()=>{
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("user");
// }