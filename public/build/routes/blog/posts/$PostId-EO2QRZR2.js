import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z35JMVEY.js";

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
//# sourceMappingURL=/build/routes/blog/posts/$PostId-EO2QRZR2.js.map
