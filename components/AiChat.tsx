import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BotIcon, LucideChevronsRight, Sparkle, User } from "lucide-react";
import { runConversation } from "@/actions/gemini.action";
import { Content } from "@google/generative-ai";

function AiChat() {
  const [query, setQuery] = useState("");
  const [conversationHistory, setConversationHistory] = useState<Content[]>([]);
  async function handleQuery() {
    try {
      const res = await runConversation(query);
      setConversationHistory(res);
      setQuery("");
    } catch (error) {
      console.log(error);
    }
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
                  {convo?.role === "user" ? (
                    <User size={16} />
                  ) : (
                    <BotIcon size={16} />
                  )}
                </span>
                <Markdown className="leading-6 text-sm">
                  {`${convo.parts[0].text}`}
                </Markdown>
              </div>
            ))}
        </div>
        <div className="flex justify-between w-[90%] items-center absolute bottom-4 right-4 rounded-xl bg-dark-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ask something..."
            className="bg-transparent w-5/6 px-3 lg:px-3 lg:flex-1 py-3 border-r border-r-gray-500 focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
          />
          <button
            className={`p-2 ${query === "" && "opacity-10"} text-gray-200`}
            onClick={handleQuery}
            disabled={query === ""}
          >
            <LucideChevronsRight size={25} />
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default AiChat;
