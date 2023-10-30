export const delayFor = async (time: number) =>
  new Promise(resolve => setTimeout(resolve, time ?? 1000));
