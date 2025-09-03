import { Tabs } from '@mantine/core';

type TabsListProps = {
  items: string[];
}

export const TabsList = ({ items }: TabsListProps) => {
  return (
    <Tabs.List my='xl'>
      {items.map((item) => (
        <Tabs.Tab
          value={item}
          key={item}
          fz='md'
        >
          {item}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  );
};
