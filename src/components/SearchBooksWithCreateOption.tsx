import { Combobox, InputBase, Modal, Text, useCombobox } from '@mantine/core';
import { Book } from '../types/database';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import CreateNewBook from './CreateNewBook';

export function SearchBooksWithCreateOption({ books }: { books: Book[] }) {
  const [opened, { open, close }] = useDisclosure(false);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [newBook, setNewBook] = useState<string | null>(null);

  const exactOptionMatch = books.some(item => item.title === search)
  const filteredOptions = exactOptionMatch ?
    books :
    books.filter(item => item.title.toLowerCase().includes(search.toLowerCase().trim()));

  const options = filteredOptions.map(item => (
    <Combobox.Option value={item.title} key={item.id}>
      {item.title}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={val => {
          if(val === '$create') {
            // Handle create new book logic
            console.log('Create new book:', search);
            setNewBook(search);
            open();
          } else {
            setValue(val);
            setSearch(val);
          }

          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            rightSection={<Combobox.Chevron />}
            value={search}
            onChange={e => {
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
              setSearch(e.currentTarget.value);
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => combobox.openDropdown()}
            onBlur={() => {
              combobox.closeDropdown();
              setSearch(value || '');
            }}
            placeholder='Search for a book...'
            rightSectionPointerEvents='none'
          />
        </Combobox.Target>
        <Combobox.Dropdown>
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value='$create'>+&nbsp;Create {search}  </Combobox.Option>
          )}
        </Combobox.Dropdown>
      </Combobox>
      <Modal opened={opened} onClose={close} title='Add New Book'>
        <Text>Create a new book here</Text>
        <CreateNewBook initialName={newBook} />
      </Modal>
    </>
  );
}
