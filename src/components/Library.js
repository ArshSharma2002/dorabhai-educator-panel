import React from 'react'
import { Button } from '@mui/material'

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Library = () => {


    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0)
        // createData('Cupcake', 305, 3.7, 67, 4.3),
        // createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

  return (
    <>
    
    <Grid item className="mainPage" xs={10}>

    <div className='libraryContainer'>
        <h1>Library</h1>
        <Button className='uploadBtn' variant='contained' >UPLOAD</Button>
    </div>

    <div  className='libraryContent' >
    <div className='uploadStatusLibrary' >
    <p>UPLOAD STATUS</p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
              ))}
              </TableBody>
              </Table>
              </TableContainer>

        </div>
    {/* my material table */}

        <div className='myMaterialLibrary'>
        <p>MY MATERIAL</p>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
        </div>
    </Grid>
    </>
  )
}

export default Library