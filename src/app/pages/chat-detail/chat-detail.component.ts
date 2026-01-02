import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit, AfterViewChecked, OnDestroy {

  @ViewChild('messages') private messagesRef!: ElementRef<HTMLDivElement>;

  chat?: Chat;
  text = '';
  imageError = false;

  private routeSub!: Subscription;
  private shouldScroll = false;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.chat = this.chatService.getChatById(id);
        this.shouldScroll = true;
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  onImageError(event: any): void {
    this.imageError = true;
    event.target.style.display = 'none';
  }

  onTyping(): void {
  }

  send(): void {
    if (!this.chat || !this.text.trim()) return;

    const userText = this.text.trim();
    const now = this.getTime();

    
    this.chat.messages.push({
      from: 'user',
      text: userText,
      time: now
    });

    this.text = '';
    this.chat.typing = true;
    this.chatService.save();
    this.shouldScroll = true;

    
    setTimeout(() => {
      if (!this.chat) return;

      const reply = this.chatService.getAutoReply(userText);
      this.chat.messages.push({
        from: 'bot',
        text: reply,
        time: this.getTime()
      });

      this.chat.typing = false;
      this.chatService.save();
      this.shouldScroll = true;
    }, 1200);
  }

  private scrollToBottom(): void {
    if (!this.messagesRef) return;

    try {
      const element = this.messagesRef.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {
      console.warn('Error al hacer scroll:', err);
    }
  }

  private getTime(): string {
    return new Date().toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}