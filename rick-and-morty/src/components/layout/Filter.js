import React, { useState } from "react";
import {Box, Select, SimpleGrid, Input, Button, IconButton, Accordion, AccordionItem, AccordionHeader, AccordionPanel, AccordionIcon,} from "@chakra-ui/core";
const Filter = ({ setFilter }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    setFilter({
      name,
      status,
      species,
      type,
      gender,
    });
  };

  const onClear = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setType("");
    setGender("");

    setFilter({
      name,
      status,
      species,
      type,
      gender,
    });
  };

  const defaultFilter = () => (
    <Box mt="20px" mb="20px">
      <SimpleGrid
        columns={{ md: 6, xs: 1 }}
        spacing="15px"
        as="form"
        onSubmit={onSubmit}
      >
        <Input
          type="text"
          placeholder="İsim"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Select
          placeholder="Durum"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </Select>

        <Input
          placeholder="Tür"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <Input
          placeholder="Tip"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <Select
          placeholder="Cinsiyet"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Erkek</option>
          <option value="Female">Kadın</option>
          <option value="Genderless">cinsiyetsiz</option>
          <option value="unknown">Belirsiz</option>
        </Select>

        <Box d="flex">
          <Button type="submit" variantColor="blue" flex="1" marginRight="10px">
            Filtrele
          </Button>
          <IconButton
            onClick={onClear}
            marginLeft="auto"
            variantColor="red"
            aria-label="Clear filters"
            icon="small-close"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );

  const mobileFilter = () => (
    <Accordion allowToggle defaultIndex={[-1]}>
      <AccordionItem>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            Filtrele
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel pb={4}>{defaultFilter()}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );

  return (
    <>
      <Box display={{ lg: "none", md: "none", sm: "block", xs: "block" }}>
        {mobileFilter()}
      </Box>
      <Box display={{ lg: "block", md: "block", sm: "none", xs: "none" }}>
        {defaultFilter()}
      </Box>
    </>
  );
};

export default Filter;
