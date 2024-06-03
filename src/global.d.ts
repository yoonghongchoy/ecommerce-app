declare global {
  // Utility type to extract the resolved type from a Promise
  type AwaitedReturnType<
    T extends Promise<unknown> | ((...params: unknown[]) => Promise<unknown>),
  > = T extends Promise<unknown>
    ? Awaited<T>
    : T extends (...params: unknown[]) => Promise<unknown>
    ? Awaited<ReturnType<T>>
    : never;
}

// This is to make the file a module
export {};
