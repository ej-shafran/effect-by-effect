import { NodeRuntime } from "@effect/platform-node";
import { Console } from "effect";

const program = Console.log("Hello from server!");

NodeRuntime.runMain(program);
