import { atom } from "recoil";
import { v1 } from "uuid";

export const selectedUser = atom({
  key: `selectedUser/${v1()}`,
  default: {
    userId: "",
    userName: "",
  },
});
