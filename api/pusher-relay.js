const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1897282",
  key: "284fc98940a4b6d4c359",
  secret: "9ec09048325a7538a798",
  cluster: "us2",
  useTLS: true
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    // Enviamos el mensaje al canal del paciente
    await pusher.trigger("test-channel", "test-event", { 
      text: message 
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Pusher error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
