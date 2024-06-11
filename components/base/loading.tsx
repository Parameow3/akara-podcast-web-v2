import { Box } from "@/components/base/container/Box";
import { BounceLoader } from "react-spinners";

export const Loading: React.FC = () => (
  <Box className="h-full flex items-center justify-center">
    <BounceLoader color={"#22c55e"} size={40} />
  </Box>
);
