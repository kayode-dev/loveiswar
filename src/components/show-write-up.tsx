import { writeUp } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MailingListForm } from "./mailing-list-form";
import { FolderClosed, FolderOpen, MoveDown } from "lucide-react";
import { useState } from "react";
import { BitsAndPieces } from "./ui/bits-and-pieces";
import Link from "next/link";

interface ShowWriteUpProps {
  skip: boolean;
  setSkip: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ShowWriteUp = ({ skip, setSkip }: ShowWriteUpProps) => {
  const [showForm, setShowForm] = useState(false);
  const [showFolder, setShowFolder] = useState(false);

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center">
      <div
        className="flex flex-col items-center h-dvh gap-4 md:text-xl p-4 md:p-20 justify-center"
        role={!skip ? "button" : "none"}
        tabIndex={-99}
        onClick={() => setSkip(true)}
      >
        {!skip ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-4 items-center">
              <div className="mx-auto space-y-4 tracking-widest">
                <p className="text-center start"></p>
                <p className="text-center para1"></p>
                <p className="text-center para2"></p>
                <p className="text-center para3"></p>
                <p className="text-center text-2xl para4 font-bold"></p>
                <p className=" text-center para5"></p>
              </div>
              <Link
                href="#join"
                onClick={() => setShowForm(true)}
                className="cta underline underline-offset-2"
              ></Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <div className="mx-auto space-y-4 tracking-widest">
              {writeUp.slice(0, 6).map((text, index) => (
                <p
                  className={cn("text-center", {
                    "font-black text-2xl text-primary": index == 4,
                  })}
                  key={text.triggerClass}
                >
                  {text.text}
                </p>
              ))}
            </div>
            <Link
              href="#join"
              onClick={() => setShowForm(true)}
              className="cta underline underline-offset-2 md:text-lg"
            >
              {writeUp[6].text}
            </Link>
          </div>
        )}
      </div>
      {showForm && (
        <div
          className="h-dvh flex p-4 w-full flex-col items-center gap-10 justify-center"
          id="join"
        >
          <MailingListForm />
          <div className="text-sm md:text-base flex flex-col gap-6 items-center text-white">
            <p>and while you wait...</p>
            <MoveDown className="animate-bounce" />
            <Link
              href={showFolder ? "#join" : "#bits-and-pieces"}
              onClick={() => setShowFolder(!showFolder)}
              className="flex flex-col items-center gap-2 duration-300 hover:scale-110 ease-in "
            >
              {showFolder ? (
                <FolderOpen className="size-20 fill-primary/50 stroke-primary" />
              ) : (
                <FolderClosed className="size-20 fill-primary/50 stroke-primary" />
              )}
              <p className="underline underline-offset-2">/ bits-and-pieces</p>
            </Link>
          </div>
        </div>
      )}
      {showFolder && <BitsAndPieces />}
    </div>
  );
};
