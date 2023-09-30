import { MessageResponse } from "@/app/api/message/route";
import useSWR from "swr"

export const useGetMessages = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, isValidating, mutate } = useSWR<MessageResponse[]>('/api/message', fetcher)
  return { data, error, isLoading, isValidating, mutate }
}