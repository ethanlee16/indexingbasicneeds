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

function getAuthRequestHeaders() {
  if (!localStorage.hasOwnProperty("user")) {
    return {};
  }
  return {
    client: localStorage.getItem("client"),
    uid: localStorage.getItem("uid"),
    "access-token": localStorage.getItem("access-token"),
    expiry: localStorage.getItem("expiry"),
  };
}

export { cacheUserSession, removeUserSession };
