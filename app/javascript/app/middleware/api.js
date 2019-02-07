import Requester from "./requester";
import { cacheUserSession, removeUserSession } from "../utils/session";

class API {
  static async Login(email, password) {
    const userPayload = {
      email: email,
      password: password,
    };
    let json, headers;
    try {
      ({ json, headers } = await Requester.post(
        "/api/auth/sign_in",
        userPayload
      ));
    } catch (error) {
      removeUserSession();
      throw error;
    }
    json = json.data;
    cacheUserSession(json, headers);
    return json;
  }

  static async Logout() {
    return await Requester.destroy("/api/auth/sign_out");
  }

  static async ResourcesIndex(tags, order_method = "updated_desc", query = "") {
    if (order_method === "") {
      order_method = "updated_desc";
    }
    let URI;
    if (!tags || tags.length === 0) {
      URI = `/api/resources?ordered=${order_method}`;
    } else {
      URI = `/api/resources?by_tags=[${tags}]&ordered=${order_method}`;
    }
    if (query !== "") {
      URI += `&with_query=${query}`;
    }
    return await Requester.get(URI);
  }

  static async ShowResource(id) {
    return await Requester.get(`/api/resources/${id}`);
  }

  static async CreateNewResource(resource) {
    const resourcePayload = { resource: resource };
    return await Requester.post("/api/resources", resourcePayload);
  }

  static async UpdateResource(id, resource) {
    const resourcePayload = { resource: resource };
    return await Requester.patch(`/api/resources/${id}`, resourcePayload);
  }

  static async UpvoteResource(id) {
    return await Requester.post(`/api/resources/${id}/upvote`);
  }

  static async UnupvoteResource(id) {
    return await Requester.post(`/api/resources/${id}/unupvote`);
  }

  static async GetResourceTags() {
    return await Requester.get("/api/resource_tags");
  }
}

export default API;
