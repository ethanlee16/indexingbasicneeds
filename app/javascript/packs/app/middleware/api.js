import Requester from "./requester";

class API {
  static async ResourcesIndex() {
    return await Requester.get("/api/resources");
  }

  static async ShowResource(id) {
    return await Requester.get(`/api/resources/${id}`);
  }

  static async CreateNewResource(resource) {
    const resourcePayload = { resource: resource };
    return await Requester.post("/api/resources", resourcePayload);
  }
}

export default API;
