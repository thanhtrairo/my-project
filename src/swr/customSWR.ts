import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const useHookSWR = (url: string, props?: any) => {
  const { data, error } = useSWR(url, fetcher, {
    fallbackData: props,
    refreshInterval: 3000,
  })
  return { data, error }
}

export default useHookSWR
