 const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1897282",
  key: "284fc98940a4b6d4c359",
  secret: "9ec09048325a7538a798",
  cluster: "us2",
  useTLS: true
});

module.exports = async (req, res) => {
  // Configuración de cabeceras para evitar bloqueos del navegador
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  
  const { message } = req.body;
  console.log("Mensaje recibido en Station One:", message);

  try {
    // IMPORTANTE: Verifica que el canal sea 'test-channel' y el evento 'test-event'
    // tal cual como está configurado en el Commander del paciente
    await pusher.trigger("test-channel", "test-event", { 
      text: message 
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error de Pusher:", error);
    return res.status(500).json({ error: error.message });
  }
};
