import { MailingListForm } from "@/components/mailing-list-form";
import Link from "next/link";
import { FolderOpen, MoveDown } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="h-dvh flex p-4 flex-col items-center gap-10 justify-center">
      <MailingListForm />
      <div className="text-sm flex flex-col gap-6 items-center">
        <p>and while you wait...</p>
        <MoveDown className="animate-bounce" />
        <Link href="get-familiar" className="flex flex-col items-center gap-2">
          <FolderOpen className="size-20 fill-primary/50 stroke-primary" />
          <p>/ get-familiar</p>
        </Link>
      </div>
    </div>
  );
}
