 const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1897282",
  key: "284fc98940a4b6d4c359",
  secret: "9ec09048325a7538a798",
  cluster: "us2",
  useTLS: true
});

module.exports = async (req, res) => {
  // Manejo de seguridad (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  
  const { message } = req.body;

  try {
    await pusher.trigger("test-channel", "test-event", { text: message });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
