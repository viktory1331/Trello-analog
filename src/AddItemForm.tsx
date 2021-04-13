import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropsType = {
  addItem: (title: string) => void; //родительский коллбэк
};

export function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState<string>('');
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setTitle(e.currentTarget.value);
  };
  const [error, setError] = useState<String | null>(null);
  const addItem = () => {
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      props.addItem(trimmedTitle);
    } else {
      setError('Title is required!');
    }
    setTitle('');
  };
  const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };
  const errorMessage = error ? (
    <div className={'error-text'}>{error}</div>
  ) : null;

  return (
    <div>
      <input
        value={title}
        onChange={changeTitle}
        onKeyPress={onKeyPressAddItem}
        className={error ? 'error' : ''}
      />
      <button onClick={addItem}>+</button>
      {errorMessage}
    </div>
  );
}
