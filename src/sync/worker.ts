import { parentPort } from 'worker_threads';

// https://giuseppegurgone.com/synchronizing-async-functions/
parentPort?.addListener('message', async ({ signal, port, args }: any) => {
  const file = args[args.length - 1];
  console.log(`Class file to use: ${file}`);
  const className = args[args.length - 2];
  // eslint-disable-next-line
  const asyncProcess = require(file);
  console.log(`Class file loaded: ${file}`);

  // This is the async function that we want to run "synchronously"
  const result = await new asyncProcess[className]().runAsync(args.slice(0, args.length - 2));
  // Post the result to the main thread before unlocking "signal"
  port.postMessage({ result });
  port.close();
  // Change the value of signal[0] to 1
  Atomics.store(signal, 0, 1);
  // This will unlock the main thread when we notify it
  Atomics.notify(signal, 0, Infinity);
});