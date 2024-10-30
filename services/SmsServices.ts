import { smsSenderSchema } from "@/lib/utils";
import { SmsFilters } from "@/types/types";
import axios from "axios";
import z from "zod";

const API_BASE_URL = "http://192.168.5.237:42069";

export async function sendSms(payload: z.infer<typeof smsSenderSchema>) {
  const { gsm_number, number, content } = payload;
  const data = {
    gsm_number: gsm_number,
    number: number,
    message: content,
  };
  console.log(data);
  try {
    const response = await axios.post(`${API_BASE_URL}/messages/send`, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

// for fetching messages. For inbox: set params to Incoming, Outgoing for outbox.
export async function getSms(filters: SmsFilters) {
  const { filter, params, limit = 10, sorting = "DESC" } = filters;
  try {
    const response = await axios.get(
      `${API_BASE_URL}/messages/?filter=${filter}&params=${params}&sorting=${sorting}&limit=${limit}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}