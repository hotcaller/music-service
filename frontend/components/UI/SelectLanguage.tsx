import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./Elements/ListboxWrapper";

export default function SelectLanguage() {
  const [selectedKeys, setSelectedKeys] = React.useState<Set<string>>(new Set(["text"]));

  const handleSelectionChange = (keys: React.Key | Set<React.Key>) => {
    // Преобразование keys в Set<string>
    if (keys instanceof Set) {
      setSelectedKeys(new Set([...keys] as string[]));
    }
  };

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <div className="flex flex-col gap-2">
      <ListboxWrapper>
        <Listbox
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
        >
          <ListboxItem key="English" >English</ListboxItem>
          <ListboxItem key="Русский">Russian</ListboxItem>
        </Listbox>
      </ListboxWrapper>
      <p className="text-sm text-default-500 ml-1 ">{selectedValue}</p>
    </div>
  );
}
