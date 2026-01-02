import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-new-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent {

  name: string = '';

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {}

  createChat(): void {
    if (!this.name.trim()) return;
    const id = this.chatService.addChat(this.name.trim());
    this.chatService.save();
    this.name = '';
    this.router.navigate(['/chat', id]);
  }
}
