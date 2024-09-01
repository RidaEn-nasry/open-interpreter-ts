import { getStoragePath } from "@utils/localStoragePath";
import dotenv from "dotenv";
import envPaths from "env-paths";
import { AppConst } from "@/const";

export class Interpreter {
  messages: string[] | null;
  responding: boolean;
  lastMessageCount: number;
  offline: boolean;
  autoRun: boolean;
  verbose: boolean;
  debug: boolean;
  maxOutput: number;
  safeMode: string;
  shrinkImages: boolean;
  loop: boolean;
  loopMessage: string;
  loopBreakers: string[];
  disableTelemetry: boolean;
  inTerminalInterface: boolean;
  conversationHistory: boolean;
  conversationFilaname: string | null;
  conversationHistoryPath: string;
  os: boolean;
  speakMessage: boolean;
  // change this later
  llm: any | null;
  systemMessage: string;
  customerInstructions: string;
  userMessageTemplate: string;
  alwaysApplyMessageTemplate: boolean;
  codeOutputTemplate: string;
  emptyCodeOutputTemplate: string;
  codeOutputSender: string;
  // change this later;
  computer: any;
  syncComputer: boolean;
  importComputerApi: boolean;
  skillsPath: string | null;
  multiLine: boolean;
  contributeConversation: boolean;
  plainTextDisplay: boolean;
  highlightActiveLine: boolean;

  constructor(
    messages: string[] | null,
    offline: boolean = false,
    autoRun: boolean = false,
    verbose: boolean = false,
    debug: boolean = false,
    maxOutput: number = 2800,
    safeMode: string = "off",
    shrinkImages: boolean = true,
    loop: boolean = false,
    loopMessage: string = "Proceed. You CAN run code on my machine. If the entire task I asked for is done, say exactly 'The task is done.'\
                      If you need some specific information (like username or password) say EXACTLY 'Please provide more information.' If it's impossible,\
                      say 'The task is impossible. (If I haven't provided a task, say exactly 'Let me know what you'd like to do next.') Otherwise keep going.",
    loopBreakers: string[] = [
      "The Task is done.",
      "The Task is impossible.",
      "Let me know what you'd like to do next",
      "Please provide more information",
    ],
    disableTelemetry: boolean = process.env.DISABLE_TELEMETRY == "false"
      ? false
      : true,
    inTerminalInterface: boolean = false,
    conversationHistory: boolean = true,
    conversationFilaname: string | null = null,
    conversationHistoryPath: string = getStoragePath("conversations"),
    os: boolean = false,
    speakMessage: boolean = false,
    // change this later
    llm: any | null = null,
    systemMessage: string = AppConst.defaultSystemMessage,
    customerInstructions: string = "",
    userMessageTemplate: string = "{content}",
    alwaysApplyMessageTemplate: boolean = false,
    codeOutputTemplate: string = "Code output: {content}\n\nWhat does this output mean / what's next (if anything, or are we done)?",
    emptyCodeOutputTemplate: string = "The code above was executed on my machine. It produced no text output. what's next (if anything, or are we done?)",
    codeOutputSender: string = "user",
    // change this later;
    computer: any = null,
    syncComputer: boolean = false,
    importComputerApi: boolean = false,
    skillsPath: string | null = null,
    importSkills: boolean = false,
    multiLine: boolean = true,
    contributeConversation: boolean = false,
    plainTextDisplay: boolean = false,
  ) {
    this.messages = messages == null ? [] : messages;
    this.responding = false;
    this.lastMessageCount = 0;

    // Settings
    this.offline = offline;
    this.autoRun = autoRun;
    this.verbose = verbose;
    this.debug = debug;
    this.maxOutput = maxOutput;
    this.safeMode = safeMode;
    this.shrinkImages = shrinkImages;
    this.disableTelemetry = disableTelemetry;
    this.inTerminalInterface = inTerminalInterface;
    this.multiLine = multiLine;
    this.contributeConversation = contributeConversation;
    this.plainTextDisplay = plainTextDisplay;
    this.highlightActiveLine = true; // additional setting to toggle active line highlighting. Defaults to True

    // Loo messages
    this.loop = loop;
    this.loopMessage = loopMessage;
    this.loopBreakers = loopBreakers;

    // Conversation History
    this.conversationHistory = conversationHistory;
    this.conversationFilaname = conversationFilaname;
    this.conversationHistoryPath = conversationHistoryPath;

    // os control mode related attributes
    this.os = os;
    this.speakMessage = speakMessage;

    // Computer
    // this.computer = computer == null ? new Computer() : computer;
    this.syncComputer = syncComputer;
    this.computer.importComputerApi = importComputerApi;

    // Skills
    if (skillsPath) this.computer.skills.path = skillsPath;

    this.computer.importSkills = importSkills;

    this.llm = llm;
    this.systemMessage = systemMessage;
    this.customerInstructions = customerInstructions;
    this.userMessageTemplate = userMessageTemplate;
    this.alwaysApplyMessageTemplate = alwaysApplyMessageTemplate;
    this.codeOutputTemplate = codeOutputTemplate;
    this.emptyCodeOutputTemplate = emptyCodeOutputTemplate;
    this.codeOutputSender = codeOutputSender;

    this.importComputerApi = importComputerApi;
    this.skillsPath = skillsPath;
  }

  public localSetup() {
    /*
      Opens a wizard that lets terminal users pick a local model.
    */
  }
}
