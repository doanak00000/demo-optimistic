// utils/deferApi.ts
// Hàm này giả lập việc gọi API thật (fetch hoặc axios)
export async function callApi<T>(fn: () => Promise<T>, delay = 0): Promise<T> {
    if (delay > 0) {
      await new Promise((r) => setTimeout(r, delay));
    }
    return fn();
  }
  
  // Hàm trả về deferred data để loader sử dụng
  export function wrapDefer<T>(promise: Promise<T>): Promise<T> {
    return promise;
  }