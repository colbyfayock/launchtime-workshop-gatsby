import React from 'react';

import Form from 'components/Form';
import FormRow from 'components/FormRow';
import Label from 'components/Label';
import Input from 'components/Input';
import Button from 'components/Button';

const FormSearch = ({ onSearch }) => {

  /**
   * handleOnSearchSubmit
   */

  function handleOnSearchSubmit(event = {}) {
    event.preventDefault();

    const { currentTarget = {} } = event;
    const { elements } = currentTarget;

    // Grab all the elements from the form and normalize it
    // to an array of input values

    const fields = Array.from(elements).map(element => {
      const id = element.id;
      const name = element.name;
      const value = element.value;
      return {
        id,
        name,
        value
      }
    });

    if ( typeof onSearch === 'function' ) {
      onSearch({
        event,
        fields
      });
    }
  }

  return (
    <Form onSubmit={handleOnSearchSubmit}>
      <FormRow>
        <Label htmlFor="search-what">
          What do you want to eat?
        </Label>
        <Input id="search-what" placeholder="Ex: pizza, bbq, breakfast" />
      </FormRow>
      <FormRow>
        <Label htmlFor="search-where">
          Where do you want to eat it?
        </Label>
        <Input id="search-where" placeholder="Ex: Washington, DC" />
      </FormRow>
      <FormRow>
        <Button color="cyan">Find Some Food</Button>
      </FormRow>
    </Form>
  )
}

export default FormSearch;