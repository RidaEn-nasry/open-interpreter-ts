

* I think the idea of LCM is to kind add a third player in the user/assistant
exchange (computer) which is responsible for excuting the task, so the assistant is actually
the planner and computer is the executer, hmm but what is the benefit of that
can't we just make so that assistant plans/execute


* each message is in the following format:

```json
{
  "role": "<role>",       # Who is sending the message.
  "type": "<type>",       # What kind of message is being sent.
  "format": "<format>"    # Some types need to be further specified, so they optionally use this parameter.
  "content": "<content>", # What the message says.
}
```
