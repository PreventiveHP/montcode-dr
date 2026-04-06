const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1897282",
  key: "284fc98940a4b6d4c359",
  secret: "9ec09048325a7538a798",
  cluster: "us2",
  useTLS: true
});

module.exports = async (req, res) => {
  // CONFIGURACIÓN DE SEGURIDAD TOTAL (CORS)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder rápido a la verificación del navegador
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { message } = req.body;

  try {
    await pusher.trigger("test-channel", "test-event", { text: message });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error en Pusher:", error.message);
    return res.status(500).json({ error: error.message });
  }
};
