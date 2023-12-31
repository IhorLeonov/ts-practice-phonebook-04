import { ContactItem } from 'components/contactItem/ContactItem';
import { List } from './ContactList.styled';
import { FC } from 'react';
import { ListProps } from 'constants/types';

export const ContactList: FC<ListProps> = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};
