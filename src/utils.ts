import stringSimilarity from 'string-similarity';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetch(url: string) {
  const cosmosReq = () =>
    new Promise<string>((resolve, reject) => {
      const request = JSON.stringify({
        method: 'GET',
        uri: url,
      });

      (window as any).sendCosmosRequest({
        request,
        persistent: false,
        onSuccess: resolve,
        onFailure: reject,
      });
    });

  const data = await cosmosReq();

  return JSON.parse(data);
}

export async function log(...args: any[]) {
  console.log('[RYM]', ...args);
}

const MIN_SIMILARITY = 1;
export function matchLower(str1: string, str2: string) {
  const similarity = stringSimilarity.compareTwoStrings(
    str1.toLowerCase(),
    str2.toLowerCase()
  );

  return similarity >= MIN_SIMILARITY;
}
