import { CiCircleCheck } from "react-icons/ci";
import { FaExclamationCircle } from "react-icons/fa";
import { Callout } from "@tremor/react";

type CalloutCardProps = {
  message: string;
  warning?: boolean;
};

const CalloutCard = ({ message, warning }: CalloutCardProps) => {
  return (
    <Callout
      className="mt-4"
      title={message}
      icon={warning ? FaExclamationCircle : CiCircleCheck}
      color={warning ? "rose" : "teal"}
    />
  );
};

export default CalloutCard;
