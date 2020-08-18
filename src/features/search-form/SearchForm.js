import React from "react";
import { Formik, Field } from "formik";
import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Flex,
} from "@chakra-ui/core";

export default function SearchForm() {
  function validateInput(value) {
    let error;
    if (value.length < 2) {
      error = "Input too short";
    }
    return error;
  }
  return (
    <Box w="600px" m={[0, "auto"]} p="20px" bg="#eee">
      <Formik initialValues={{ name: "" }}>
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <Field name="name" validate={validateInput}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.searchText && form.touched.searchText}
                >
                  <Input
                    {...field}
                    id="searchText"
                    placeholder="Ingrese el nombre del medicamento..."
                  />
                  <FormErrorMessage>{form.errors.searchText}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormControl isRequired>
              <Flex align="center" justify="center">
                <h1>Ubicación</h1>
                <Select variant="outline" placeholder="Departamento">
                  <option>Lima</option>
                  <option>Piura</option>
                </Select>
                <Select variant="outline" placeholder="Provincia">
                  <option>2</option>
                  <option>gfa</option>
                </Select>
                <Select variant="outline" placeholder="Distrito">
                  <option>Chorrillos</option>
                  <option>Miraflores</option>
                </Select>
              </Flex>
            </FormControl>
            <Button
              mt={4}
              variantColor="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}
