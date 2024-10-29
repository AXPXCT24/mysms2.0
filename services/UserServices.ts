import axios from "axios";
import { authFormSchema } from "@/lib/utils";
import z from "zod";

const API_BASE_URL = "http://192.168.5.237:42069";

export async function authUser(data: z.infer<typeof authFormSchema>) {}
