import * as React from 'react';
import {FC, useEffect} from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import './DropDownGenres.css'
import {getAllGenres} from "../../../store";
import {useAppDispatch, useAppSelector} from "../../../hooks";

import {Link} from "react-router-dom";


const DropDownGenres: FC = () => {

    let dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllGenres())
    }, [])
    const {genres} = useAppSelector(state => state.genreReducer)

    const [id, setId] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setId(event.target.value);
    };


    return (
        <div>
            <Box sx={{minWidth: 120}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={id}
                        label="Age"
                        onChange={handleChange}
                    >
                        {
                            genres.map(genre => <MenuItem key={genre.id} value={genre.id}> <Link
                                to={`/genre/${genre.id.toString()}`}>{genre.name}</Link> </MenuItem>)

                        }

                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export {DropDownGenres};