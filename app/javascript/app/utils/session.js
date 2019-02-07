function checkUserSignedIn() {
  // TODO (Ken): In the future, it would be good to also check for
  // expiry here and handle expiry client side
  return (
    localStorage.hasOwnProperty("user") &&
    localStorage.hasOwnProperty("access-token")
  );
}

function cacheUserSession(user, headers) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("client", headers.get("client"));
  localStorage.setItem("uid", headers.get("uid"));
  localStorage.setItem("access-token", headers.get("access-token"));
  localStorage.setItem("expiry", headers.get("expiry"));
}

function removeUserSession() {
  localStorage.removeItem("user");
  localStorage.removeItem("client");
  localStorage.removeItem("uid");
  localStorage.removeItem("access-token");
  localStorage.removeItem("expiry");
}

function refreshAccessToken(headers) {
  // Don't refresh if the response headers do not contain a new token
  if (!headers.has("access-token") || !headers.get("access-token")) {
    return;
  }
  localStorage.setItem("access-token", headers.get("access-token"));
  localStorage.setItem("expiry", headers.get("expiry"));
}

function getAuthRequestHeaders() {
  if (!localStorage.hasOwnProperty("user")) {
    return {};
  }
  return {
    client: localStorage.getItem("client"),
    uid: localStorage.getItem("uid"),
    "access-token": localStorage.getItem("access-token"),
    expiry: localStorage.getItem("expiry"),
    "token-type": "Bearer",
  };
}

export {
  checkUserSignedIn,
  cacheUserSession,
  removeUserSession,
  refreshAccessToken,
  getAuthRequestHeaders,
};
