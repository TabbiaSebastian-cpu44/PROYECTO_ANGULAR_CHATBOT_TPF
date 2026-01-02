import { Injectable } from '@angular/core';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private storageKey = 'whatsapp_chats';

  public chats: Chat[] = [
    {
      id: 1,
      name: 'Marcelo Gonzalez',
      avatar: 'imagen1.png',
      online: true,
      lastSeen: 'en línea',
      typing: false,
      messages: [
        {
          from: 'bot',
          text: 'Hola 👋 Soy Marcelo, un gusto',
          time: this.getTime()
        }
      ],
     
    }
  ];

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.chats = JSON.parse(saved);
    }
  }

  /* =========================
     EL GUARDADO DE LOS CHATS
  ========================== */
  save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.chats));
  }

  /* =========================
     CHATS
  ========================== */
  getChats(): Chat[] {
    return this.chats;
  }

  getChatById(id: number): Chat | undefined {
    return this.chats.find(chat => chat.id === id);
  }

  addChat(name: string): number {
    const newChat: Chat = {
      id: Date.now(),
      name,
      avatar: '/bot-1.png',
      online: true,
      lastSeen: 'en línea',
      typing: false,
      messages: [
        {
          from: 'bot',
          text: 'Hola 👋 ¿En qué te puedo ayudar?',
          time: this.getTime()
        }
      ],
      
    };

    this.chats.unshift(newChat);
    this.save();
    return newChat.id;
  }

  /* =========================
     IA – RESPUESTAS
  ========================== */
  getAutoReply(text: string): string {
    const t = text.toLowerCase();

    if (t.includes('hola')) return '¡Hola! 😊 ¿Cómo estás?';
    if (t.includes('bien')) return '¡Me alegro mucho! 😄';
    if (t.includes('mal')) return 'Uh 😔, ¿querés contarme qué pasó?';
    if (t.includes('quién sos') || t.includes('quien sos'))
      return 'Soy un asisitente virtual para ti';
    if (t.includes('angular'))
      return 'Angular es ideal para apps grandes y escalables 🚀';
    if (t.includes('gracias'))
      return '¡De nada! 💚';
    if (t.includes('chau') || t.includes('adios'))
      return '¡Hasta luego! 👋';

    const random = [
      'Interesante 🤔',
      'Contame un poco más',
      'No estoy seguro, pero suena bien',
      '😄',
      '¿Por qué pensás eso?',
      'Puede ser 👀'
    ];

    return random[Math.floor(Math.random() * random.length)];
  }

  /* =========================
     ESTO ES UTIL
  ========================== */
  private getTime(): string {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  deleteChat(id: number): void {
  this.chats = this.chats.filter(chat => chat.id !== id);
  this.save();  // Guarda en localStorage
}
}
