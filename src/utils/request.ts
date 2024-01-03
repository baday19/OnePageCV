// const baseUrl = ''

const sendRequest = async (method: string, url: string, body?: any, headers?: any): Promise<any> => {
  const res = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': "application/json",
      'token': '',
      ...headers,
    },
    body: JSON.stringify(body)
  })

  if (!res.ok) {
    // 请求失败
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
  const data = await res.json()
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

export default {
  sendRequest,
  GET: (url: string) => {
    return sendRequest('GET', url)
  },
  POST: (url: string, data?: any) => {
    return sendRequest('POST', url, data)
  },
}