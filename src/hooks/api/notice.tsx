import { useQuery } from "@tanstack/react-query";
import { BOARD } from "../../common/data/comCode";
import { request } from "../../lib/api";

function useBoardFetch() {
  return useQuery(
    [BOARD],
    () => request({ method: "GET", url: `/api/${BOARD}` }),
    { onError: () => {} }
  );
}

export { useBoardFetch };
