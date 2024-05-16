/**
 * Wraps the given function so that each invocation is executed inside a try-catch block.
 *
 * Caught exceptions are logged and re-thrown.
 */
/* eslint-disable space-before-function-paren */
export function catchErrors<T extends (...args: any[]) => Thenable<void>>(fn: T): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args);
    } catch (e) /* istanbul ignore next */ {
      console.error(e);
      throw e;
    }
  }) as any;
}
