import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2, WifiOff } from 'lucide-react';

interface Message {
  type: 'user' | 'assistant';
  content: string;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_URL = 'https://lucaszatti2004.app.n8n.cloud/webhook/d75c56db-5f67-47e3-afed-3d6e6dc7aab0';

  // Listen for custom event to open chat
  useEffect(() => {
    const handleToggleChat = () => {
      onClose();
    };

    window.addEventListener('toggle-chat', handleToggleChat);
    return () => window.removeEventListener('toggle-chat', handleToggleChat);
  }, [onClose]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      // Add welcome message when chat is opened
      if (messages.length === 0) {
        setMessages([
          {
            type: 'assistant',
            content: 'Olá! Sou o Express, assistente virtual da Achadinhos Express. Como posso ajudar você hoje?'
          }
        ]);
      }
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const validateResponse = (data: any): string => {
    if (!data) {
      return 'Desculpe, não recebi uma resposta válida do servidor. Por favor, tente novamente.';
    }

    if (typeof data.text === 'string' && data.text.trim()) {
      return data.text;
    }

    if (data.text !== undefined) {
      try {
        const stringResponse = String(data.text).trim();
        if (stringResponse) {
          return stringResponse;
        }
      } catch (e) {
        console.error('Error converting text to string:', e);
      }
    }

    return 'Desculpe, recebi uma resposta em formato inesperado. Por favor, tente novamente.';
  };

  const makeRequest = async (userMessage: string): Promise<string> => {
    if (!isOnline) {
      throw new Error('Você está offline. Por favor, verifique sua conexão com a internet.');
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          sessionId: Math.random().toString(36).substring(7)
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : null;
      } catch (error) {
        console.error('Error parsing JSON response:', error);
        throw new Error('Resposta inválida do servidor');
      }

      return validateResponse(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('O servidor demorou muito para responder. Por favor, tente novamente.');
      }

      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        throw new Error('Não foi possível conectar ao servidor. Por favor, tente novamente.');
      }

      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!isOnline) {
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: 'Você está offline. Por favor, verifique sua conexão com a internet e tente novamente.'
      }]);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await makeRequest(userMessage);
      setMessages(prev => [...prev, { type: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: error instanceof Error ? error.message : 'Ocorreu um erro inesperado. Por favor, tente novamente.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 w-full md:w-96 h-full md:h-[600px] bg-white shadow-2xl z-50 transition-transform duration-300 md:bottom-6 md:right-6 md:rounded-lg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-brand-red text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <h3 className="font-medium">Express - Assistente Virtual</h3>
          {!isOnline && (
            <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded">
              <WifiOff className="w-3 h-3" />
              Offline
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Fechar chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <p className="break-words">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={!isOnline ? "Você está offline" : "Digite sua mensagem..."}
            className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
            disabled={isLoading || !isOnline}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || !isOnline}
            className="p-2 bg-brand-red text-white rounded-full hover:bg-brand-orange transition-colors disabled:opacity-50"
            aria-label="Enviar mensagem"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatAssistant;