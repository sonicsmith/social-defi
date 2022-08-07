import { HStack, Input } from "@chakra-ui/react";
import { useContext } from "react";
import Web3Context, { Web3ContextValue } from "../../context/Web3Context";
import Avatar from "../Avatar";

const CommentInput = (props: { comment: string; setComment: Function }) => {
  const { accounts } = useContext<Web3ContextValue>(Web3Context);
  const { comment, setComment } = props;

  return (
    <HStack backgroundColor={"gray.200"} rounded={"md"} m={2} p={2}>
      <Avatar address={accounts?.[0].address} />
      <Input
        backgroundColor={"white"}
        placeholder={"Write a comment"}
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />
    </HStack>
  );
};

export default CommentInput;
