export interface sendMessageResponse {
  response: string;
  suggested_actions: string[];
}

export interface historyMessage {
  id: string;
  message: string;
  role: string;
  userId: string;
  created_at: string;
}
