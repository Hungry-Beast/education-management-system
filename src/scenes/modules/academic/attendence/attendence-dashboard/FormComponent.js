import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ImageContext } from "../../../../../context/Context";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select as NormalSelect,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Select from "react-select";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr;
  align-items: center;
  width: 100%;
  margin: 20px 10px;
  gap: 20px;
`;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "All", label: "Select All" },
  // Add more options as needed
];
const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const handleSelectAll = (selectedOptions) => {
    if (selectedOptions) {
      setValue("autocomplete", options);
    } else {
      setValue("autocomplete", []);
    }
  };
  const [context, setContext] = useContext(ImageContext);

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("isPresent"))

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="userType"
        control={control}
        required
        //   defaultValue={1}
        render={({ field }) => (
          <FormControl sx={{ pt: 1 }} fullWidth>
            <InputLabel required>Select User Type</InputLabel>
            <NormalSelect
              {...field}
              // defaultValue={1}
              fullWidth
            >
              <MenuItem value={1}>Student</MenuItem>
              <MenuItem value={2}>Stuff</MenuItem>
              <MenuItem value={3}>Teacher</MenuItem>
            </NormalSelect>
          </FormControl>
        )}
      />
      <Controller
        name="date"
        control={control}
        required
        //   defaultValue={1}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker fullWidth {...field} label="Select Date" />
            </DemoContainer>
          </LocalizationProvider>
        )}
      />
      {watch("userType") === 1 ? (
        <Controller
          name="autocomplete"
          control={control}
          render={({ field }) => (
            <Select
              styles={{
                control: (baseStyle, style) => ({
                  ...baseStyle,
                  padding: "7px",
                  marginTop: "8px",
                }),
              }}
              {...field}
              options={options}
              isMulti
              isSearchable
              closeMenuOnSelect={false}
              onChange={(selectedOptions) => {
                field.onChange(selectedOptions);
                console.log(selectedOptions);
                if (selectedOptions[0]?.value === "All")
                  handleSelectAll(selectedOptions);
              }}
            />
          )}
        />
      ) : (
        <div />
      )}
      {watch("userType") === 1 ? (
        <Controller
          name="attendenceStatus"
          control={control}
          render={({ field }) => (
            <FormGroup
              row
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                gridColumn: "span 3",
              }}
              {...field}
            >
              <Typography variant="h5" color={colors.blue[800]}>
                Attendance Status
              </Typography>
              <FormControlLabel
                control={<Checkbox color="success" defaultChecked />}
                label="Present"
                {...register("isPresent")}
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Required"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Required"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Required"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Disabled"
              />
            </FormGroup>
          )}
        />
      ) : watch("userType" === 2) ? (
        <FormGroup
          row
          sx={{ display: "flex", alignItems: "center", gap: "20px",
 gridColumn: "span 3", }}
        >
          <Typography variant="h5" color={colors.blue[800]}>
            Attendance Status
          </Typography>
          <FormControlLabel
            control={<Checkbox color="success" defaultChecked />}
            label="Label"
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Required"
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Disabled"
          />
        </FormGroup>
      ) : (
        <FormGroup
          row
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
 gridColumn: "span 3",
          }}
        >
          <Typography variant="h5" color={colors.blue[800]}>
            Attendance Status
          </Typography>
          <FormControlLabel
            control={<Checkbox color="success" defaultChecked />}
            label="Label"
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Required"
          />
          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Disabled"
          />
        </FormGroup>
      )}
      {/* <br /> */}
      <Box sx={{ gridColumn: "span 2" }}>
        <Button variant="contained" color="success">
          Generate
        </Button>
      </Box>
    </Form>
  );
};

export default FormComponent;
const top100Films = [
  { title: "Select All", value: true },
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
