import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();
    const { orderData, orderItems, total } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    const values = [
      [
        new Date().toLocaleString("es-CL"),
        orderData.nombre,
        orderData.apellido,
        orderData.correo,
        orderData.telefono,
        orderData.pais,
        orderData.region,
        orderData.comuna,
        orderData.calle,
        orderData.numero,
        orderData.villa,
        orderData.mensaje,
        JSON.stringify(orderItems),
        total,
        "Pendiente",
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Pedidos!A1:A",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return new Response(
      JSON.stringify({ message: "Pedido guardado en Google Sheets" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error al guardar en Google Sheets" }),
      { status: 500 }
    );
  }
}