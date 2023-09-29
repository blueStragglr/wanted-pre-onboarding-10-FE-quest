import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useResponse = routeLoader$(async () => {
  const res = await fetch("http://localhost:5173/api/mock");
  const ret = await res.json();
  return ret;
});

export default component$(() => {
  const response = useResponse();
  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>Mock api response</h1>
      <br />
      <br />
      <p style={{ margin: "auto", width: "fit-content" }}>
        response from mock api server: {response.value.message}
      </p>
    </div>
  );
});
