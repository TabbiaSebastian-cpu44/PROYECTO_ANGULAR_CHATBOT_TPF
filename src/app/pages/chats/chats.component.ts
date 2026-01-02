import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats: Chat[] = [];

  constructor(private chatService: ChatService) {
    this.chats = this.chatService.getChats();
    if (window.innerWidth <= 768) {
  document.body.classList.remove('mobile-chat-open');
  document.body.classList.add('mobile-chat-closed');
 }

  }
  createChat() {
  const name = prompt('Nombre del nuevo chat');
  if (!name) return;

  const id = this.chatService.addChat(name);
 }

 deleteChat(id: number, event: Event): void {
    event.stopPropagation(); 
    if (confirm('¿Seguro que querés borrar este chat?')) {
      this.chatService.deleteChat(id);
      this.chats = this.chatService.getChats();  
    }
  }

 onAvatarError(event: any) {
    event.target.style.display = 'none';
    
  }
  ngOnInit() {
    this.chats = this.chatService.getChats();
  }

}
