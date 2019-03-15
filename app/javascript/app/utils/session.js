function checkUserSignedIn() {
  // TODO (Ken): In the future, it would be good to also check for
  // expiry here and handle expiry client side
  return (
    localStorage.hasOwnProperty("user") &&
    localStorage.hasOwnProperty("access-token")
  );
}

function checkUserIsAdmin() {
  if (!checkUserSignedIn()) {
    return false;
  }
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.is_admin || false;
  } catch (error) {
    return false;
  }
}

function cacheUserSession(user, headers) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("client", headers.get("client"));
  localStorage.setItem("uid", headers.get("uid"));
  localStorage.setItem("access-token", headers.get("access-token"));
  localStorage.setItem("expiry", headers.get("expiry"));
}

function removeUserSession() {
  console.warn("User session removed!");
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

function getCSRFHeaders() {
  let headers = {};
  const csrfHeader = document.querySelector('meta[name="csrf-token"]');
  if (csrfHeader) {
    headers["X-CSRF-Token"] = csrfHeader.content;
  }
  return headers;
}

export {
  checkUserSignedIn,
  checkUserIsAdmin,
  cacheUserSession,
  removeUserSession,
  refreshAccessToken,
  getAuthRequestHeaders,
  getCSRFHeaders,
};
