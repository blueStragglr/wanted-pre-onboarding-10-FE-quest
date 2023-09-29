import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ json }) => {
  json(200, { message: "This is the response from mock api server!" });
};
