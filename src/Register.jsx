import React, { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Kbd,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onBlur',
  });

  const selectOptions = [
    { value: 'student', label: 'Student' },
    { value: 'developer', label: 'Developer' },
    { value: 'manager', label: 'Manager' },
  ];

  const registerConditions = {
    name: { required: 'Name is required' },
    email: { required: 'Registiring without email is impossible' },
    password: {
      required: 'You have to have password',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
    role: { required: 'Role is required' },
  };

  const [users, setUsers] = useState([]);
  const focus = useRef();

  const handleRegistration = data => {
    console.log(data);
    return setUsers(prev => [...prev, data]);
  };

  const handleError = data => {
    const { name, password, email, role } = data;
    if (name) {
      console.error(name.message);
    }
    if (email) {
      console.error(email.message);
    }
    if (role) {
      console.error(role.message);
    }
    if (password) {
      console.error(password.message);
    }
  };

  const focusHandle = e => {
    console.log(e);
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <FormControl>
        <FormLabel htmlFor="email">Name</FormLabel>
        <Input
          name="name"
          type="text"
          {...register('name', registerConditions.name)}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="role">Your Role</FormLabel>
        <Controller
          name="role"
          control={control}
          defaultValue=""
          rules={registerConditions.role}
          render={({ field }) => (
            <Select options={selectOptions} {...field} label="Text field" />
          )}
        />
        <span style={{ fontStyle: 'italic' }}>
          {errors?.role && errors.role.message}
        </span>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          name="email"
          type="email"
          {...register('email', registerConditions.email)}
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          name="password"
          type="password"
          {...register('password', registerConditions.password)}
        />
        {errors?.password && <p>{errors.password.message}</p>}
      </FormControl>

      <Button type="submit">Submit</Button>

      <div onKeyDown={focusHandle}>
        <Kbd>Enter</Kbd>+<Kbd>H</Kbd>
      </div>

      <CircularProgress isIndeterminate>
        <CircularProgressLabel>30%</CircularProgressLabel>
      </CircularProgress>
    </form>
  );
}
