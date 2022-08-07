import { Flex, HStack, Text } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Avatar from "../Avatar";

export type Comment = {
  text: string;
  author: string;
};

const ToggleList = (props: {
  isExpanded: boolean;
  setIsExpanded: Function;
}) => {
  const { isExpanded, setIsExpanded } = props;
  const Chevron = isExpanded ? ChevronUpIcon : ChevronDownIcon;
  return <Chevron onClick={() => setIsExpanded(!isExpanded)} />;
};

const CommentItem = (props: { comment: Comment }) => {
  const { text, author } = props.comment;
  return (
    <HStack>
      <Avatar address={author} />
      <Text>{text}</Text>
    </HStack>
  );
};

const CommentList = (props: { comments: Comment[] }) => {
  const { comments } = props;
  const titleText = comments.length
    ? `${comments.length} comments`
    : `Be first to write a comment`;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Flex
      backgroundColor={"gray.200"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
    >
      <Text>{titleText}</Text>
      {comments.length > 0 && (
        <ToggleList isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      )}
      {isExpanded &&
        comments.map((comment) => {
          return <CommentItem comment={comment} />;
        })}
    </Flex>
  );
};

export default CommentList;
