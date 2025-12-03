import { useQuery } from "@tanstack/react-query";
import { BOARD } from "../../../shared/constants";
import { request } from "../../../shared/lib/api";

export function useBoardFetch() {
  return useQuery(
    [BOARD],
    () => request({ method: "GET", url: `/api/${BOARD}` }),
    { onError: () => {} }
  );
}
