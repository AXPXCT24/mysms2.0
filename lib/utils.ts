import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod"
import qs from "query-string"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = z.object({
  username: z.string().min(8),
  password: z.string().min(8),
})

export const smsSenderSchema = z.object({
  gsm_number: z.number(),
  number: z.string().min(10),
  content: z.string().min(10),
})

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}