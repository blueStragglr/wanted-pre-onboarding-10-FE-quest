import { setupWorker } from "msw";
import { handlers } from "./hanlders";

export const worker = setupWorker(...handlers);
