export interface OrderData {
  name: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  reference: string;
  state: string;
  city: string;
  deliveryDate: string;
}

// Replace with your actual Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = '7773117456:AAHuUKul1KAixyuC9gld0ADnNAhF5qhA_Ok';
const TELEGRAM_CHAT_ID = '5656451356';

export const sendOrderToTelegram = async (orderData: OrderData): Promise<boolean> => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Token do bot ou ID do chat do Telegram não configurados. Mensagem não será enviada.');
    return false;
  }

  const telegramMessage = `
NOVO PEDIDO RECEBIDO!

Nome: ${orderData.name}
Telefone: ${orderData.phone}
Endereço: ${orderData.address}, ${orderData.number}
Complemento: ${orderData.reference || 'N/A'}
Cidade: ${orderData.city}
CEP: ${orderData.cep}
Data de entrega: ${orderData.deliveryDate}
Produto: Rivosex Gel
Quantidade: 2 unidades (Promoção Compre 1 Leve 2)
  `;

  try {
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage
      })
    });

    if (response.ok) {
      console.log('Mensagem enviada para o Telegram com sucesso!');
      return true;
    } else {
      console.error('Erro ao enviar mensagem para o Telegram:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem para o Telegram:', error);
    return false;
  }
};