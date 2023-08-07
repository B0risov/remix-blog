import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-4Z7IFWK2.js";

// browser-route-module:/Users/matvej/dev/remix-blog/app/routes/blog/posts/$PostId.jsx?browser
init_react();

// app/routes/blog/posts/$PostId.jsx
init_react();
function GetPost() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, post.title), /* @__PURE__ */ React.createElement("p", null, post.content));
}
export {
  GetPost as default
};
//# sourceMappingURL=/build/routes/blog/posts/$PostId-FBPI2QQO.js.map
