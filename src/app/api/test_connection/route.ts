import database_connection_pool from "@/app/libs/connection_pool";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    await database_connection_pool.connect();
    const result = database_connection_pool.query("SELECT * FROM users");
    return NextResponse.json({ test: (await result).rows }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
