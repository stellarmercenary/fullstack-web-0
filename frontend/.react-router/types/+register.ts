import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/agent": {};
  "/news": {};
  "/login": {};
  "/service": {};
  "/grace": {};
  "/postDetail/:id": {
    "id": string;
  };
  "/postEdit/:id": {
    "id": string;
  };
};