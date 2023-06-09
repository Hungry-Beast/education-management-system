import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import {
  Autocomplete,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box, display } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { ImageContext } from "../../../../../context/Context";

const Component = styled.div`
  width: calc(100% - 30px);
  height: fit-content;
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;
const Container = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
`;
const ClassTeacherMapping = () => {
  const [value, setValue] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [context, setContext] = useContext(ImageContext);
  useEffect(() => {
    setContext("academic.svg");
  }, []);
  return (
    <Component>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" color="primary" fontWeight={800} mx={2}>
          Primary Teacher :
        </Typography>
        <Typography variant="h5" color="primary">
          MILANJIT BHATTACHARJEE
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" color="primary" fontWeight={800} mx={2}>
          Secondary Teacher :
        </Typography>
        <Typography variant="h5" color="primary">
          MILANJIT BHATTACHARJEE
        </Typography>
      </Box>
      <Container>
        <Controller
          name="subjectType"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <FormControl fullWidth sx={{ gridColumn: "span 1", my: "30px" }}>
              <InputLabel required> Subject Type</InputLabel>
              <Select
                {...field}
                // defaultValue={1}
                fullWidth
              >
                <MenuItem value={1}>Core</MenuItem>
                <MenuItem value={2}>Elective</MenuItem>
                <MenuItem value={3}>MIL</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="primaryTeacher"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <Autocomplete
              sx={{ gridColumn: "span 1", my: "30px" }}
              {...field}
              multiple
              id="primaryTeacher"
              name="primaryTeacher"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="Primary Teacher" />
              )}
            />
          )}
        />
        <Controller
          name="secondaryTeacher"
          control={control}
          required
          //   defaultValue={1}
          render={({ field }) => (
            <Autocomplete
              sx={{ gridColumn: "span 1", my: "30px" }}
              {...field}
              multiple
              id="secondaryTeacher"
              name="secondaryTeacher"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="Secondary Teacher" />
              )}
            />
          )}
        />
        <Box
          sx={{
            gridColumn: "1",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button variant="contained" color="success" sx={{ width: "40%" }}>
            Save
          </Button>
        </Box>
      </Container>
    </Component>
  );
};

export default ClassTeacherMapping;

const top100Films = [
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
