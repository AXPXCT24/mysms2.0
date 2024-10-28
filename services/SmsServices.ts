import { smsSenderSchema } from "@/lib/utils";
import axios from "axios";
import z from "zod";

const API_BASE_URL = "http://192.168.5.237:4000";

export async function SendSms(payload: z.infer<typeof smsSenderSchema>) {
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
