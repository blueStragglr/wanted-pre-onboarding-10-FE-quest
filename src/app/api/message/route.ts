export interface MessageResponse {
  name: string;
  id: string;
  content: string;
  date: string;
}
// import useSWR from "swr";

// function useGetMessages() {
//   const fetcher = (url: string, token: string = "") => {
//     return fetch(url + token)
//       .then((res) => res.json())
//   };

//   const { data, error, isLoading, mutate } = useSWR(
//     [`https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock`],
//     ([url]) => fetcher(url)
//   );

//   return {
//     oneUserPosts: data,
//     isLoading,
//     isError: error,
//     mutate,
//   };
// }

export const runtime = 'edge'

/**
 * @see https://nextjs.org/docs/app/building-your-application/routing/router-handlers
 */
export async function GET(request: Request) {
  try {
    const msgRes = await fetch(
      'https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock'
    )

    if (msgRes.status != 200) {
      return new Response(
        JSON.stringify({
          error: `${msgRes.statusText}`
        }),
        {
          status: msgRes.status,
          statusText: msgRes.statusText
        }
      )
    }

    const msgs = (await msgRes.json()) as MessageResponse[]

    if (msgs.length === 0) {
      return new Response(
        JSON.stringify({
          error: 'No forecast data.'
        }),
        {
          status: 400,
          statusText: 'Bad Request'
        }
      )
    }

    return new Response(JSON.stringify(msgs), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=300, stale-while-revalidate'
      },
      status: 200,
      statusText: 'OK'
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({error: `${error}`}), {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}