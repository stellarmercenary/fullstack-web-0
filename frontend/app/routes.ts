import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("Pages/Home.tsx"),
    route("agent", "Pages/Agent.tsx"),
    route("news", "Pages/News.tsx"),
    route("login", "Pages/Login.tsx"),
    route("service", "Pages/Service.tsx"),
    route("grace", "Pages/Grace.tsx"),
    route("postDetail/:id", "Components/Post/PostDetail.tsx"),
    route("postEdit/:id", "Components/Post/PostEdit2.tsx"),
] satisfies RouteConfig;
