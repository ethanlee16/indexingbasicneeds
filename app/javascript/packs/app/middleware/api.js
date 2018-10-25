import Requester from "./requester";

class API {
  static async ResourcesIndex() {
    return await Requester.get("/api/resources");
  }
}

export default API;
