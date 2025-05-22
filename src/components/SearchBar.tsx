import React, { useState, useRef, useEffect } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export type SearchBarProps = {
  initialValue?: string;
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ initialValue = '', onSearch }) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) onSearch(trimmed);
  };

  const clearSelection = () => {
    const input = inputRef.current;
    if (input) {
      const len = input.value.length;
      input.setSelectionRange(len, len);
    }
  };

  useEffect(() => {
    clearSelection();
  }, []);

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        placeholder="SoundCloud track URL"
        value={value}
        onChange={handleChange}
        sx={{
          input: {
            '&::selection': {
              background: '#f7a494',
            },
            '&::-moz-selection': {
              background: '#f7a494',
            },
            '::selection': {
              background: '#f7a494',
            },
            '::-moz-selection': {
              background: '#f7a494',
            },
          },
          '&::selection': {
            background: '#f7a494',
          },
          '&::-moz-selection': {
            background: '#f7a494',
          },
          '::selection': {
            background: '#f7a494',
          },
          '::-moz-selection': {
            background: '#f7a494',
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" edge="end" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
};
