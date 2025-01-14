"use client";

import qs from "query-string";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Input from "@/components/ui/Input";

interface Props {
  placeholder: string;
}

export const SearchInput: React.FC<Props> = ({ placeholder }) => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const query = { title: debouncedValue };
    const url = qs.stringifyUrl({ url: "/search", query: query });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
