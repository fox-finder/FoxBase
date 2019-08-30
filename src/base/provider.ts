
export declare class FoxBaseProvider<T = any> {
  constructor(options: T);
  ensureAvailability(): Promise<this>;
}
