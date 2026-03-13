// Update this with the real WhatsApp number
const WHATSAPP_NUMBER = '919786000000'
const DEFAULT_MSG = 'Hello! I would like to reserve a table at Drizzle Restaurant. Could you please help me with the booking?'

export default function useWhatsApp() {
  const openWhatsApp = (msg = DEFAULT_MSG) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return { openWhatsApp }
}