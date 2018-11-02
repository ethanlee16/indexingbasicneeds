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

  static async UpdateResource(id, resource) {
    const resourcePayload = { resource: resource };
    return await Requester.patch(`/api/resources/${id}`, resourcePayload);
  }
}

export default API;
