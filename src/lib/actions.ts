"use server";
import { neon } from "@neondatabase/serverless";
import { addToMailingListSchema } from "@/components/mailing-list-form";
import z from "zod";
type MailingListType = z.infer<typeof addToMailingListSchema>;
export const addToMailingList = async ({ name, email }: MailingListType) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  await sql("INSERT INTO subscribers (name, emailaddress) VALUES ($1, $2)", [
    name,
    email,
  ]);
};
