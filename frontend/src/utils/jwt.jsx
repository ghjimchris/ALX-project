import jwtDecode from "jwt-decode";

export const isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }
  
    // ----------------------------------------------------------------------
  
    const decoded = jwtDecode(accessToken);
    // console.log('dec-:: ', decoded)
    const currentTime = Date.now() / 1000;
  
    return decoded.exp > currentTime;
};