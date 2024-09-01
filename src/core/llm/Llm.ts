import { Models } from "@/const";
import { Interpreter } from "@core/Interpreter";
import { logger } from "@utils/logger";
import { assert } from "console";
import { Message, Role } from "@/core/types";
export class Llm {
  /*
    A stateless LMC-style LLM with some helpful properties.
  */
  private readonly intrepreter: Interpreter;
  private readonly visionRenderer;
  private readonly model: string = Models.GPT_4O;
  private readonly temprature: number = 0;
  private readonly supportsVision = null;
  private readonly supportsFunctions = null;
  private readonly executionInstructions =
    "To execute code on the user's machine, \
        write a markdown code block. Specify the language after the ```. \
        You will receive the output. Use any programming language."; // If supportsFunctions is False, this will be added to the system message

  // optional settings
  private readonly contextWindow = null;
  private maxTokens: number | null = null;
  private readonly apiBase = null;
  private readonly apiKey = null;
  private readonly apiVersion = null;
  private readonly isLoaded: boolean = false;

  constructor(interepreter: Interpreter) {
    this.intrepreter = interepreter;
    this.visionRenderer = interepreter.computer.vision.query;
  }

  run(messages: Message[]) {
    /*
    We're responsible for formatting the call into the llm.completions object,
    starting with LMC messages in interpreter.messages, going to OpenAI compatible messages into the llm,
    respecting whether it's a vision or function model, respecting its context window and max tokens, etc.
    And then processing its output, whether it's a function or non function calling model, into LMC format.
    */

    if (!this.isLoaded) {
      this.load();
    }

    if (
      this.maxTokens != null &&
      this.contextWindow != null &&
      this.maxTokens > this.contextWindow
    ) {
      logger.warn(
        "Warning: max_tokens is larger than context_window. Setting max_tokens to be 0.2 times the context_window.",
      );
      this.maxTokens = Number(0.2 * this.contextWindow);
    }

    // assertions
    assert(
      messages[0].role == Role.System,
      "First message must have the role 'system'",
    );
    assert(
      !messages.find((val, i) => i != 0 && val.role == Role.System),
      "No message after the first can have the role 'system'",
    );

    let model = this.model;
  }

  load() {
    if (this.isLoaded) return;
  }

  fixedLiteLLmCompletions() {}
}
