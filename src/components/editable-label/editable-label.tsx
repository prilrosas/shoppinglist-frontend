import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
//import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import { Typography } from "@mui/material";

const ENTER_KEY_CODE = 13;
const DEFAULT_LABEL_PLACEHOLDER = "Click To Edit";

const EditableLabel = ({
  onFocus = (value: string) => {},
  onBlur = (value: string) => {},
  ...props
}) => {
  const [isEditing, setEditing] = useState(false);
  const [value, setValue] = useState(props.initialValue);
  const isTextValueValid = () =>
    typeof value !== "undefined" && value.trim().length > 0;

  const handleFocus = () => {
    const fn = isEditing ? onBlur : onFocus;
    fn(value);
    handleEditState();
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      handleEnterKey();
    }
  };

  const handleEditState = () => {
    if (!isTextValueValid()) return;
    setEditing((prev) => !prev);
  };

  const handleEnterKey = () => {
    handleFocus();
  };

  if (isEditing) {
    return (
      <TextField
        placeholder="Título"
        //defaultValue={value}
        onChange={handleChange}
        onBlur={handleFocus}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  }

  const labelText = isTextValueValid()
    ? value
    : props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;

  return props.variant ? (
    <Typography variant={props.variant} onClick={handleFocus}>
      {labelText}
    </Typography>
  ) : (
    <InputLabel onClick={handleFocus}>{labelText}</InputLabel>
  );
};

EditableLabel.propTypes = {
  initialValue: PropTypes.string.isRequired,
  emptyEdit: PropTypes.bool,
  variant: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default EditableLabel;
