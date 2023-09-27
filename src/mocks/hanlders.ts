import { rest } from "msw";
export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "create mock-api",
          completed: false,
        },
        {
          id: 2,
          title: "login",
          completed: false,
        },
        { id: 3, title: "develop", completed: false },
      ]),
    );
  }),
];
