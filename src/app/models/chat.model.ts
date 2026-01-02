export interface Message {
  from: 'user' | 'bot';
  text: string;
  time: string;
}

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  typing: boolean;
  lastSeen?: string;
  messages: Message[];
}

