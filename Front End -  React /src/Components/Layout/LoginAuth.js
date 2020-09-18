import SessionStorageService from "../../Services/SessionStorageService";

const sessionStorageService = SessionStorageService.getService();
export const isSignedIn = async () => {
  const refreshToken = sessionStorageService.getRefreshToken();

  try {
    const token = refreshToken;
    if (token !== null && token.length > 10) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
  }
};
