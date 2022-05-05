import { Box, TextField } from '@mui/material'
import React from 'react'
import styles from './NewUserForm.style'
const newUserForm = () => {
    return (
        <Box>
            <Box>
                <TextField sx = {{border:"1px solid black"}} id="name"/>
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="text" id="name" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="number" id="addr" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="text" id="addr" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="text" id="addr" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="text" id="addr" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="text" id="addr" />
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="tel" id="tel" />
            </Box>
            <Box>

                <select name="role" id="role">
                    <option value="employee">Employee</option>
                    <option value="sde1">SDE 1</option>
                    <option value="sde2">SDE 2</option>
                    <option value="sde3">SDE 3</option>
                    <option value="pm">Project Manager</option>
                    <option value="hr">Human Resource</option>
                </select>
            </Box>
            <Box>

                <TextField sx = {{border:"1px solid black"}} type="date" id="date" name="date" />
            </Box>

            <Box>

                <textarea id="exampleFormControlTextarea1" rows="3"></textarea>
            </Box>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Box>
    )
}

export default newUserForm