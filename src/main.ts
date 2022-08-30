import { setTimeout } from "timers/promises";

const res = await setTimeout(100, "result");
console.log(res);
