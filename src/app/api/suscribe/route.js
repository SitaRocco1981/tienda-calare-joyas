import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email requerido" },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth: await auth.getClient(),
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId:  process.env.GOOGLE_SHEETS_ID,
      range: "Hoja 1!A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email]],
      },
    });

    return NextResponse.json(
      { message: "Suscripción exitosa" },
      { status: 200 }
    );
  } catch (error) {
    console.error("ERROR GOOGLE:", error);
    return NextResponse.json(
      { message: "Error en la suscripción" },
      { status: 500 }
    );
  }
}

