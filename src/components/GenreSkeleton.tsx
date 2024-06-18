import {
  Card,
  CardBody,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
} from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      width="100%"
      height="50%"
      marginY="40px"
    >
      <Spinner />
      <Skeleton height="400px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;
