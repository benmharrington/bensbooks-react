import { Combobox, InputBase, Modal, Text, useCombobox } from '@mantine/core';
import { Author } from '../types/database';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

export function AuthorSearch({ authors }: { authors: Author[] }) {
  const [opened, { open, close }] = useDisclosure(false);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [newAuthor, setNewAuthor] = useState<string | null>(null);

  const exactOptionMatch = authors.some(a => a.name === search)
  const filteredOptions = exactOptionMatch ?
    authors :
    authors.filter(a => a.name.toLowerCase().includes(search.toLowerCase().trim()));

  const options = filteredOptions.map(a => (
    <Combobox.Option value={a.name} key={a.id}>
      {a.name}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        withinPortal={false}
        onOptionSubmit={val => {
          if(val === '$create') {
            // Handle create new author logic
            console.log('Create new author:', search);
            setNewAuthor(search);
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
            placeholder='Search for an author...'
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
      <Modal opened={opened} onClose={close} title='Add New Author'>
        <Text>Create a new author here</Text>
        {/* TODO: Implement author creation component */}
      </Modal>
    </>
  );
}
