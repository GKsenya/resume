import { Divider, List, ListItem, Stack, Text } from '@mantine/core';
import { Fragment } from 'react';
import { ExperienceDescription as TExperienceDescription } from 'types';

type ExperienceDescriptionProps = {
  items: TExperienceDescription;
  withDivider?: boolean;
};

export const ExperienceDescription = ({ items, withDivider }: ExperienceDescriptionProps) => {
  return (
    <Stack gap='xs'>
      {items.map((item) =>
        typeof item === 'object' ? (
          <Fragment key={item.name}>
            {withDivider ? (
              <Divider
                orientation='horizontal'
                color='dark.0'
                hiddenFrom='sm'
                label={item.name}
                w='-webkit-fill-available'
              />
            ) : (
              <Text>{item.name}:</Text>
            )}
            <List fw={300}>
              {item.items?.map((item, index) => (
                <ListItem key={index}>
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <Fragment>
                      <Text>{item.name}</Text>
                      <List>
                        {item.items?.map((subItem, subIndex) => (
                          <ListItem key={subIndex}>{subItem}</ListItem>
                        ))}
                      </List>
                    </Fragment>
                  )}
                </ListItem>
              ))}
            </List>
          </Fragment>
        ) : (
          <Text
            key={item}
            fw={300}
          >
            {item}
          </Text>
        )
      )}
    </Stack>
  );
};
