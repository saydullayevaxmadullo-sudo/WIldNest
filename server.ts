import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Store leads in memory to inspect or back up if Telegram configuration is not set up
const localLeads: Array<{
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  packageName: string;
  timestamp: string;
  sentToTelegram: boolean;
  telegramError?: string;
}> = [];

app.use(express.json());

// API endpoints
// Function to safely escape HTML characters for Telegram
function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

app.post("/api/lead", async (req, res) => {
  const { firstName, lastName, phone, packageName } = req.body;

  if (!firstName || !phone) {
    return res.status(400).json({ error: "Name and Phone number are required." });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let sentToTelegram = false;
  let telegramError: string | undefined = undefined;

  const leadItem = {
    id: Math.random().toString(36).substring(2, 9),
    firstName,
    lastName: lastName || "",
    phone,
    packageName: packageName || "Not Selected",
    timestamp: new Date().toISOString(),
    sentToTelegram: false,
    telegramError: undefined as string | undefined
  };

  if (token && chatId) {
    try {
      const cleanName = escapeHtml(firstName);
      const cleanRegion = escapeHtml(lastName || "Ko'rsatilmadi");
      const cleanPhone = escapeHtml(phone);
      const cleanPackage = escapeHtml(packageName || "Not Selected");

      const textMessage = `
<b>🌲 YANGI BAND QILISH - WILD NEST 🌲</b>
      
👤 <b>Mijoz:</b> ${cleanName}
📍 <b>Viloyat:</b> ${cleanRegion}
📞 <b>Telefon:</b> <code>${cleanPhone}</code>
📦 <b>Tarif:</b> <b>${cleanPackage}</b>
🕒 <b>Vaqt:</b> ${new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" })}

⛺ <i>Biz bilan unutilmas xotiralar quring!</i> ⛺
`;

      const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
      const response = await fetch(telegramUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: textMessage.trim(),
          parse_mode: "HTML"
        })
      });

      if (response.ok) {
        sentToTelegram = true;
      } else {
        const errorData = await response.json();
        telegramError = `Telegram API error: ${JSON.stringify(errorData)}`;
      }
    } catch (err: any) {
      telegramError = err.message || "Unknown network error";
    }
  } else {
    telegramError = "Telegram credentials not configured in environment variables (.env)";
  }

  leadItem.sentToTelegram = sentToTelegram;
  leadItem.telegramError = telegramError;
  localLeads.unshift(leadItem); // Add to the beginning of the list

  // Return status
  return res.status(200).json({
    success: true,
    localSaved: true,
    sentToTelegram,
    telegramError,
    lead: leadItem
  });
});

// Endpoint for the developer panel to show submitted leads
app.get("/api/leads", (req, res) => {
  res.json({
    envConfigured: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    telegramBotTokenSet: !!process.env.TELEGRAM_BOT_TOKEN,
    telegramChatIdSet: !!process.env.TELEGRAM_CHAT_ID,
    leads: localLeads
  });
});

async function startServer() {
  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    // Use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Wild Nest Server] Running dynamically on http://0.0.0.0:${PORT}`);
  });
}

startServer();
