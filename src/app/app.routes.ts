import { Routes } from '@angular/router';
import { ChatsComponent } from './pages/chats/chats.component';
import { ChatDetailComponent } from './pages/chat-detail/chat-detail.component';
import { NewChatComponent } from './pages/new-chat/new-chat.component';

export const routes: Routes = [
  { path: '', component: ChatsComponent },
  { path: 'chat/:id', component: ChatDetailComponent },
  { path: 'new', component: NewChatComponent },
];
