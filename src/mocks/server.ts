import { setupServer } from "msw/node";
import { handlers } from "./hanlders";

export const server = setupServer(...handlers);
