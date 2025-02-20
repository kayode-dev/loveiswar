import { writeUp } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MailingListForm } from "./mailing-list-form";
import { FolderClosed, FolderOpen, MoveDown } from "lucide-react";
import { useState } from "react";
import { BitsAndPieces } from "./ui/bits-and-pieces";

interface ShowWriteUpProps {
  skip: boolean;
  setSkip: React.Dispatch<React.SetStateAction<boolean>>;
  activeTextIndex: number;
}
export const ShowWriteUp = ({
  skip,
  setSkip,
  activeTextIndex,
}: ShowWriteUpProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showFolder, setShowFolder] = useState(false);

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center">
      <div className="flex flex-col items-center h-dvh gap-4 p-4 md:p-20 justify-center text-white">
        {!skip ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="mx-auto space-y-4 tracking-widest">
                <p className="md:text-lg text-center start"></p>
                <p className="md:text-lg text-center para1"></p>
                <p className="md:text-lg text-center para2"></p>
                <p className="md:text-lg text-center para3"></p>
                <p className="md:text-lg text-center para4 font-bold text-primary"></p>
                <p className="md:text-lg text-center para5"></p>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="cta underline underline-offset-2 md:text-lg"
              ></button>
            </div>
            {activeTextIndex > 1 && activeTextIndex < 6 && (
              <button
                className="underline underline-offset-2"
                onClick={() => {
                  setSkip(true);
                }}
              >
                skip
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <div className="mx-auto space-y-4 tracking-widest">
              {writeUp.slice(0, 6).map((text, index) => (
                <p
                  className={cn("md:text-lg text-center", {
                    "font-black text-2xl text-primary": index == 4,
                  })}
                  key={text.triggerClass}
                >
                  {text.text}
                </p>
              ))}
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="cta underline underline-offset-2 md:text-lg"
            >
              {writeUp[6].text}
            </button>
          </div>
        )}
      </div>
      {showForm && (
        <div className="relative h-dvh flex p-4 w-full flex-col items-center gap-10 justify-center">
          <div className="absolute -top-10 w-full flex justify-center">
            <MoveDown className="animate-bounce" />
          </div>
          <MailingListForm />
          <div className="text-sm flex flex-col gap-6 items-center">
            <p>and while you wait...</p>
            <MoveDown className="animate-bounce" />
            <button
              onClick={() => setShowFolder(!showFolder)}
              className="flex flex-col items-center gap-2 duration-300 hover:scale-110 ease-in "
            >
              {showFolder ? (
                <FolderOpen className="size-20 fill-primary/50 stroke-primary" />
              ) : (
                <FolderClosed className="size-20 fill-primary/50 stroke-primary" />
              )}
              <p>/ get-familiar</p>
            </button>
          </div>
        </div>
      )}
      {showFolder && <BitsAndPieces />}
    </div>
  );
};
