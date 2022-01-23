import { Avatar, AvatarBadge, Button } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";

export const Owner = ({
  user,
  profile_img_url,
  address,
  avatarProps = {},
  ...props
}) => {
  return (
    <Button
      leftIcon={
        <Avatar
          src={
            profile_img_url ??
            "https://lh3.googleusercontent.com/QVKs1azRCjHftLYaPMFlMPa29ECEsqLGzMckQKrzttoVAFRwJTZ11fOW68smiO_QNsCECvyqaJyqYVNwd3Gz_TZCQJ5FyLapAT9qJg0=s0"
          }
          {...avatarProps}
        >
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
      }
      rightIcon={
        <GoVerified color="Blue" style={{ display: "inline-block" }} />
      }
      colorScheme={"blue"}
      variant="link"
    >
      {user?.username ??
        `${address.substring(0, 3)}...${address.substring(
          address.length - 4,
          address.length
        )}`}
    </Button>
  );
};
