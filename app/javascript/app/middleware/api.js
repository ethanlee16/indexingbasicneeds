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
    try {
      return await Requester.destroy("/api/auth/sign_out");
    } catch (error) {
      removeUserSession();
      console.warn(error);
    }
  }

  static async ResourcesIndex(
    category,
    tags,
    order_method = "updated_desc",
    query = ""
  ) {
    if (order_method === "") {
      order_method = "updated_desc";
    }
    let URI = `/api/resources?ordered=${order_method}`;

    if (category && category != 0) {
      URI += `&by_category=${category}`;
    }
    if (tags && tags.length > 0) {
      URI += `&by_tags=[${tags}]`;
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

  static async GetResourceCategories() {
    return await Requester.get("/api/resource_categories");
  }

  static async GetResearchFiles() {
    return await Requester.get("/api/research_files");
  }

  static async CreateResearchFile(researchFile) {
    const payload = {
      research_file: researchFile,
    };
    return await Requester.post("/api/research_files", payload);
  }
}

export default API;
