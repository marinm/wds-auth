import { NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { ClicksTable } from "@/drizzle/schema";

export async function POST() {
  await db.insert(ClicksTable).values({});
  return NextResponse.json({ message: "Clicked" });
}
