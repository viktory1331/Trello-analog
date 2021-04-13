import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type EditableSpanPropsType = {
  title: string;
  changeTitle: (title: string) => void;
};

export function EditableSpan(props: EditableSpanPropsType) {
  //
  const [editMode, setEditMode] = useState<boolean>(true);
  const [title, setTitle] = useState<string>(props.title);

  const onEditMode = () => setEditMode(true);
  const offEditMode = () => {
    setEditMode(false);
    props.changeTitle(title);
  };
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };
  return editMode ? (
    <input
      onBlur={offEditMode}
      autoFocus
      value={title}
      onChange={changeTitle}
    />
  ) : (
    <span onDoubleClick={onEditMode}>{props.title}</span>
  );
}
