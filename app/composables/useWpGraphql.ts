export interface WpPost {
  title: string
  // date?: string
  // excerpt?: string
  content?: string
}

export interface PostsQueryResponse {
  posts: {
    nodes: WpPost[]
  }
};


interface GraphqlResponse<T> {
  data?: T
  errors?: Array<{
    message: string
    locations?: Array<{ line: number; column: number }>
    path?: string[]
  }>
}

export const useGraphql = async <T = null>(query: string) => {
  const { data } = await useFetch<GraphqlResponse<T>>('http://a0789232.xsph.ru/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { query }
  });

  if (data.value?.errors) {
    console.error('GraphQL errors:', data.value.errors)
  };

  return data.value?.data as T | null;
}