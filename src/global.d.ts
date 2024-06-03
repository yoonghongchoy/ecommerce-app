declare global {
  // Utility type to extract the resolved type from a Promise
  type AwaitedReturnType<
    T extends Promise<unknown> | ((...params: unknown[]) => Promise<unknown>),
  > = T extends Promise<unknown>
    ? Awaited<T>
    : T extends (...params: unknown[]) => Promise<unknown>
    ? Awaited<ReturnType<T>>
    : never;

  // Utility type to make certain properties optional
  type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

  // Utility type for a function that returns void
  type VoidFunction = () => void;
}

// This is to make the file a module
export {};
