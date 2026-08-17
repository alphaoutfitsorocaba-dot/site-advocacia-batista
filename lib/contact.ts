// Ajuste os números de WhatsApp reais aqui (formato internacional: 55 + DDD + número).
export const CONTACT = {
  david: {
    name: 'Dr. David Borges Batista',
    oab: 'OAB/SP 355.264',
    whatsapp: '5515996740547', // Número real do David atualizado
    whatsappMessage:
      'Olá Dr. David, gostaria de agendar uma consulta com o escritório Borges Batista Advocacia.',
  },
  matheus: {
    name: 'Dr. Matheus Willy Batista',
    oab: 'OAB/SP 549.939',
    whatsapp: '5515981642572', // Número real do Matheus atualizado
    whatsappMessage:
      'Olá Dr. Matheus, gostaria de agendar uma consulta com o escritório Borges Batista Advocacia.',
  },
  address: 'Rua José Leite do Canto Júnior, 706 - Jardim Montreal, Sorocaba - SP, 18053-374',
  googleReviews:
    'https://www.google.com/maps/dir/-23.543808,-47.4939392/Advocacia+Borges+Batista,+R.+Jos%C3%A9+Leite+do+Canto+J%C3%BAnior,+706+-+Jardim+Montreal,+Sorocaba+-+SP,+18053-374/@-23.5194259,-47.5571917,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c5f595c07bd717:0x23858a01571cb64b!2m2!1d-47.5224602!2d-23.4942941?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D',
  googleMaps:
    'https://www.google.com/maps/dir/-23.543808,-47.4939392/Advocacia+Borges+Batista,+R.+Jos%C3%A9+Leite+do+Canto+J%C3%BAnior,+706+-+Jardim+Montreal,+Sorocaba+-+SP,+18053-374/@-23.5194259,-47.5571917,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c5f595c07bd717:0x23858a01571cb64b!2m2!1d-47.5224602!2d-23.4942941?entry=ttu&g_ep=EgoyMDI2MDgxMS4wIKXMDSoASAFQAw%3D%3D',
} as const

export function whatsappLink(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
