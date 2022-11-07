import { useState, useEffect } from "react";

export function useFetch<T>(url: string, init?: Omit<RequestInit, "signal">) {
  const [data, setData] = useState<T | undefined>();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const isIdle = status === "idle";
  const isLoading = status === "loading";
  const isRejected = status === "rejected";
  const isFullfield = status === "fullfield";

  useEffect(() => {
    const abortController = new AbortController();

    setStatus("loading");

    fetch(url, { ...init, signal: abortController.signal })
      .then(res => res.json())
      .then(res => {
        setStatus("fullfield");
        setData(res);
      })
      .catch(err => {
        const isAbortedError = err && err.name === "AbortError";

        if (isAbortedError) {
          return;
        }

        setStatus("rejected");
        setError(err.message || "something went wrong...");
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    isIdle,
    isLoading,
    isRejected,
    isFullfield,
    error,
    data
  };
}
