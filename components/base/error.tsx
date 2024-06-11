import { Box } from "@/components/base/container/Box";

export const Error: React.FC<{ errorLabel?: string }> = ({ errorLabel }) => (
  <Box className={"h-full flex items-center justify-center"}>
    <div className={"text-neutral-400"}>
      {errorLabel || "Some thing went wrong."}
    </div>
  </Box>
);
