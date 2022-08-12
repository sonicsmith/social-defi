import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Avatar from "../Avatar";
import Link from "next/link";
import { getAddressPreview, getFormattedDate } from "../../utils/misc";
import AddressAndTime from "../AddressAndTime";

export type Comment = {
  text: string;
  author: string;
  timestamp: string;
};

const ToggleButton = (props: {
  isExpanded: boolean;
  setIsExpanded: Function;
  numberOfComments: number;
}) => {
  const { isExpanded, setIsExpanded, numberOfComments } = props;
  const Chevron = isExpanded ? ChevronUpIcon : ChevronDownIcon;
  const titleText = numberOfComments
    ? `${numberOfComments} comment${numberOfComments > 1 ? "s" : ""}`
    : `Be first to write a comment`;
  return (
    <Flex
      backgroundColor={"gray.200"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={4}
      onClick={() => setIsExpanded(!isExpanded)}
      cursor={"pointer"}
    >
      <Text>{isExpanded ? "" : titleText}</Text>
      <Chevron />
    </Flex>
  );
};

const CommentItem = (props: { comment: Comment }) => {
  const { text, author, timestamp } = props.comment;
  return (
    <VStack backgroundColor={"gray.200"} rounded={"lg"} p={2} width={"100%"}>
      <Box width={"100%"}>
        <AddressAndTime address={author} timestamp={timestamp} />
        <HStack>
          <Box width={"5"} />
          <Text>{text}</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

const CommentList = (props: { comments: Comment[] }) => {
  const { comments } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Box>
      {isExpanded && (
        <VStack p={4} pt={0} align={"flex-start"}>
          {comments.map((comment) => {
            return <CommentItem comment={comment} key={Math.random()} />;
          })}
        </VStack>
      )}
      <ToggleButton
        numberOfComments={comments.length}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    </Box>
  );
};

export default CommentList;
