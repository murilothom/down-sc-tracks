import React, { useState, useRef, useEffect } from 'react';
import { TextField, IconButton, InputAdornment, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

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

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        size="small"
        placeholder="SoundCloud track URL"
        value={value}
        onChange={handleChange}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <Box
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
                >
                  {!!value.trim().length && (
                    <IconButton
                      onClick={() => setValue('')}
                      type="button"
                      edge="end"
                      aria-label="clear"
                    >
                      <ClearIcon />
                    </IconButton>
                  )}
                  <IconButton type="submit" edge="end" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Box>
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
};
