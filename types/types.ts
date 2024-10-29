export interface SmsFilters {
  filter: string;
  params: string;
  limit?: number;
}

export interface MessagesSchema {
    message_id: number;
    msg_type: string;
    content: string;
    date_time: string;
    port_id: number;
    client_id: string;
}

export interface Messages {
  messages: MessagesSchema[];
}