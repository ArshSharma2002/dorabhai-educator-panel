import React from 'react'
import { Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 950,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Library = () => {

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        const [age, setAge] = React.useState('');
        
        const handleChange = (event) => {
          setAge(event.target.value);
        };

        const submitForm =()=>{
          alert("Successfully submitted")
        }

    function createData(sr,name,subject,type,stream,pages,bookmark,verified,status,remarks) {
        return { sr,name,subject,type,stream,pages,bookmark,verified,status,remarks };
      }

    const uploads = [
        createData(1,'Notes on projections', 'Algebra','Notes', 'Hons',28,'Bookmarked','Verified','Published','Remarks'),
        createData(2,'Notes on Axis Plane', 'Algebra-II','Notes', 'Hons',17,'Bookmarked','Unverified','UnPublished','Remarks'),
        createData(3,'Notes on Axis Plane', 'Algebra-II','Notes', 'Hons',17,'Bookmarked','Unverified','UnPublished','Remarks'),
        
      ];

    function createData2(sr,name,subject,type,stream,pages,status,remarks) {
        return { sr,name,subject,type,stream,pages,status,remarks };
      }

    const materials = [
        createData2(1,'Notes on projections', 'Algebra','Notes', 'Hons',28,'Published','Remarks'),
        createData2(2,'Notes on Axis Plane', 'Algebra-II','Notes', 'Hons',17,'Published','Remarks')
        
      ];

  return (
    <>
    
    <Grid item className="mainPage" xs={10}>

    <div className='libraryContainer'>
        <h1>Library</h1>
        <Button className='uploadBtn' onClick={handleOpen} variant='contained' >UPLOAD</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box className="" style={{backgroundColor:'pink'}} sx={style}>
                Select Paper Category
            <div className="selectors">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                <InputLabel  id="demo-simple-select-label">Stream</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>Hons</MenuItem>
                        <MenuItem value={20}>B.A.</MenuItem>
                        <MenuItem value={30}>B.Sc.</MenuItem>
                    </Select>
                    </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                <InputLabel  id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>Algebra</MenuItem>
                        <MenuItem value={20}>Algebra-II</MenuItem>
                        <MenuItem value={30}>Geometry</MenuItem>
                    </Select>
                </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                <InputLabel  id="demo-simple-select-label">Paper</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>Maths</MenuItem>
                        <MenuItem value={20}>Science</MenuItem>
                        <MenuItem value={30}>English</MenuItem>
                    </Select>
                        </FormControl>
                </div>
                <p>Name of Material</p>
                <div>
                <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="" size="small" variant="outlined" />
                </div>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Type of Material</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Notes" control={<Radio size="small"/>} label="Notes" />
                    <FormControlLabel value="Previous Year Questions" control={<Radio size="small"/>} label="Previous Year Questions" />
                    <FormControlLabel value="Previous Year Questions - Solutions" control={<Radio size="small"/>} label="Previous Year Questions - Solutions" />
                    <FormControlLabel value="Practicals" control={<Radio size="small" />} label="Practicals" />
                </RadioGroup>
                </FormControl>
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Select Type of Material</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="Hons" control={<Radio size="small" />} label="Hons" />
                    <FormControlLabel value="DSC" control={<Radio size="small" />} label="DSC" />
                    <FormControlLabel value="Pass" control={<Radio size="small" />} label="Pass" />
                    <FormControlLabel value="Elec" control={<Radio size="small" />} label="Elec" />
                </RadioGroup>
                </FormControl>
        
                <p>Select Semester</p>
                <div>
                <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="" size="small" variant="outlined" />
                </div>
                <p>Select College</p>
                <div>
                <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="" size="small" variant="outlined" />
                </div>
                <p>Tags</p>
                <TextField style={{backgroundColor:'white'}} id="outlined-basic" label="" multiline rows={4} defaultValue="" />
                <Button className='uploadBtn2' onClick={submitForm} variant='contained' >UPLOAD</Button>
        </Box>
      </Modal>
    </div>

    <div  className='libraryContent' >
    <div className='uploadStatusLibrary' >
    <p>UPLOAD STATUS</p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableBody>
          {uploads.map((upload) => (
              <TableRow
              key={upload.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {upload.sr}
              </TableCell>
              <TableCell align="left">{upload.name}</TableCell>
              <TableCell align="left">{upload.subject}</TableCell>
              <TableCell align="left">{upload.stream}</TableCell>
              <TableCell align="left">{upload.pages}</TableCell>
              <TableCell align="left">{upload.bookmark}</TableCell>
              <TableCell align="left">{upload.status}</TableCell>
              <TableCell align="left">{upload.verified}</TableCell>
              <TableCell align="left">{upload.remarks}</TableCell>
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
                {materials.map((material) => (
                    <TableRow
                    key={material.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {material.sr}
                    </TableCell>
                    <TableCell align="left">{material.name}</TableCell>
                    <TableCell align="left">{material.subject}</TableCell>
                    <TableCell align="left">{material.stream}</TableCell>
                    <TableCell align="left">{material.pages}</TableCell>
                    <TableCell align="left">{material.verified}</TableCell>
                    <TableCell align="left">{material.remarks}</TableCell>  
                    <TableCell align="left" style={{cursor:'pointer'}} >View</TableCell>  
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