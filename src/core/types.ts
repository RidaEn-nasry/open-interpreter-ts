export type Message = {
  role: Role;
  messageType: MessageType;
  format?: Format;
  content: any;
};

export enum Role {
  User = "user",
  Computer = "computer",
  Assistant = "assistant",
  System = "system",
}

export enum MessageType {
  Message = "message",
  Console = "console",
  Image = "image",
  Code = "code",
  Audio = "audio",
}

export enum Format {
  ActiveLine = "active_line",
  Output = "output",
  Base64 = "base64",
  Base64Png = "base64.png",
  Base64Jpeg = "base64.jpeg",
  Path = "path",
  Html = "html",
  Js = "javascript",
  PY = "python",
  R = "r",
  AppleScript = "applescript",
  Shell = "shell",
  Wav = "wav",
}
