import Requester from "./requester";

class API {
  static async ResourcesIndex() {
    return Requester.get("/api/resources");
  }
}

export default API;
