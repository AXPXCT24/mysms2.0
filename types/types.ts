export interface SmsFilters {
  filter: string;
  params: string;
  limit?: number;
  sorting?: string;
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

export interface UserSchema {
  user_id: number;
  username: string;
  password: string;
  authority: boolean;
}

export interface Users {
  users: UserSchema[];
}

export interface GsmPortSchema {
  gsm_number: number;
  sim_number: string;
}

export interface GsmPorts {
  gsm_ports: GsmPortSchema[];
}

export interface ClientSchema {
  client_id: string;
}

export interface Clients {
  clients: ClientSchema[];
}

export interface SmsTemplatesSchema {
  template_id: number;
  template_name: string;
  content: string;
}

export interface SmsTemplates {
  sms_templates: SmsTemplatesSchema[];
}
