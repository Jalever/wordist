import { Message } from "element-ui";

export function errorMessage(error) {
  if (error.response) {
    Message.error(error.response.data.message);
    return;
  }
  Message.error(error + "");
}
