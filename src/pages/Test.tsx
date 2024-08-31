import React from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MainContainer from "@/components/MainContainer";
import LoginInput from "@/components/Inputs/LoginInput";
import APIClient from "@/services/api-client";
import ErrorText from "@/components/Errors/ErrorText";
import { Button } from "flowbite-react";

interface Supermarket {
  name: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  email: string;
  password: string;
  role: string;
  superMarketName: string;
}

const schema = z.object({
  name: z.string().nonempty("Name is required"),
  contactNo: z.string().nonempty("Contact number is required"),
  logo: z.string().nonempty("Logo URL is required"),
  location: z.string().nonempty("Location is required"),
  address: z.string().nonempty("Address is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.string().nonempty("Role is required"),
  superMarketName: z.string().nonempty("Supermarket name is required"),
});

type FormData = z.infer<typeof schema>;

const SupermarketAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const apiClient = new APIClient<Supermarket>("/supermarketManager");

  const onSubmit = (data: FormData) => {
    console.log(data);
    apiClient
      .create(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <MainContainer>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit({
            ...data,
            logo: "https://www.google.com",
            role: "supermarketManager",
          });
        })}
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Name
            </Text>
            <LoginInput
              register={register("name")}
              type="text"
              placeholder="Enter Supermarket Manager Name"
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Contact Number
            </Text>
            <LoginInput
              type="text"
              register={register("contactNo")}
              placeholder="Enter Contact Number"
            />
            {errors.contactNo && (
              <ErrorText>{errors.contactNo.message}</ErrorText>
            )}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Email
            </Text>
            <LoginInput
              type="email"
              register={register("email")}
              placeholder="Enter Email"
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Password
            </Text>
            <LoginInput
              type="password"
              register={register("password")}
              placeholder="Enter Password"
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Supermarket Name
            </Text>
            <LoginInput
              type="text"
              register={register("superMarketName")}
              placeholder="Enter Supermarket Name"
            />
            {errors.superMarketName && (
              <ErrorText>{errors.superMarketName.message}</ErrorText>
            )}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Location
            </Text>
            <LoginInput
              type="text"
              register={register("location")}
              placeholder="Enter Location"
            />
            {errors.location && (
              <ErrorText>{errors.location.message}</ErrorText>
            )}
          </Box>
          <Box p={2}>
            <Text size="sm" mb="8px">
              Address
            </Text>
            <LoginInput
              type="text"
              placeholder="Enter Address"
              register={register("address")}
            />
            {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
          </Box>
        </Grid>
        <Box p={2} pt={5}>
          <Button type="submit">Submit</Button>
        </Box>
      </form>
    </MainContainer>
  );
};

export default SupermarketAdd;
