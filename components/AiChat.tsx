import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, BotIcon, Sparkle, User } from "lucide-react";
import { runConversation } from "@/actions/gemini.action";

function AiChat() {
  const [query, setQuery] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  async function handleQuery() {
    const res = await runConversation(query);
    setConversationHistory(res);
    setQuery("");
  }
  return (
    <Sheet>
      <SheetTrigger>
        <button className="h-full p-2 rounded-full cursor-pointer bg-[#2b344194] hover:bg-[#4c535b]">
          <Sparkle />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col p-4 bg-dark-5 border-none rounded-xl"
      >
        <SheetTitle className="text-xl text-gray-300 text-center">
          Ask AI
        </SheetTitle>
        <div className="custom-scrollbar overflow-auto mb-10">
          {conversationHistory.length > 0 &&
            conversationHistory.map((convo, item) => (
              <div
                key={item}
                className={`flex font-normal gap-2 tracking-wide text-gray-300 items-start mr-1 my-2 w-fit`}
              >
                <span className="text-gray-300 p-0.5 mt-1 border rounded-full border-gray-300">
                  {convo.role === "user" ? (
                    <User size={16} />
                  ) : (
                    <BotIcon size={16} />
                  )}
                </span>
                <Markdown className="leading-6 text-sm">
                  {convo.parts[0].text}
                </Markdown>
              </div>
            ))}
        </div>
        <div className="flex justify-between items-center absolute overflow-hidden bottom-4 w-[90%] rounded-xl bg-dark-3 ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ask something..."
            className="border-r text-gray-300 border-r-gray-500 flex-1 bg-transparent p-3 focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 "
          />
          <button className="p-2 w-fit cursor-pointer" onClick={handleQuery}>
            <ArrowRight size={25} className="w-fit text-gray-400" />
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AiChat;
