const SessionStorageService = (function() {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setAccessToken(tokenObj) {
    sessionStorage.setItem("accessToken", tokenObj.accessToken);
  }
  function _setRefreshToken(tokenObj) {
    sessionStorage.setItem("refreshToken", tokenObj.refreshToken);
  }

  function _setDeviceToken(deviceToken) {
    sessionStorage.setItem("deviceToken", deviceToken);
  }

  function _getAccessToken() {
    return sessionStorage.getItem("accessToken");
  }
  function _getRefreshToken() {
    return sessionStorage.getItem("refreshToken");
  }

  function _getDeviceToken() {
    return sessionStorage.getItem("deviceToken");
  }
  function _clearToken() {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("deviceToken");

  }
  return {
    getService: _getService,
    setAccessToken: _setAccessToken,
    setRefreshToken: _setRefreshToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    getDeviceToken: _getDeviceToken,
    setDeviceToken: _setDeviceToken,
  };
})();
export default SessionStorageService;
