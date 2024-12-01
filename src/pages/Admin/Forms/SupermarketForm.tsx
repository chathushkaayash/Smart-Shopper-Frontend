import ErrorText from "@/components/Errors/ErrorText";
import APIClient from "@/services/api-client";
import { Box, Button, Grid, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Supermarket {
  supermarketManagerName: string;
  contactNo: string;
  logo: string;
  location: string;
  address: string;
  email: string;
  password: string;
  role: string;
  name: string;
}

const schema = z.object({
  supermarketManagerName: z.string(),
  contactNo: z.string(),
  logo: z.string(),
  location: z.string(),
  address: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.string(),
  name: z.string(),

});

type FormData = z.infer<typeof schema>;
const apiClient = new APIClient<Supermarket>("/supermarket");

const SupermarketForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    apiClient
    .create(data)
    .then((res) => {
      console.log(res);
      // router.push("/admin/supermarketList");
    });
  };

  return (
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
        {/* Name Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Name
          </Text>
          <Input
            {...register("supermarketManagerName")}
            type="text"
            placeholder="Enter Supermarket Manager Name"
          />
          {errors.supermarketManagerName && <ErrorText>{errors.supermarketManagerName.message}</ErrorText>}
        </Box>

        {/* Contact Number Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Contact Number
          </Text>
          <Input
            {...register("contactNo")}
            type="text"
            placeholder="Enter Contact Number"
          />
          {errors.contactNo && (
            <ErrorText>{errors.contactNo.message}</ErrorText>
          )}
        </Box>

        {/* Email Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Email
          </Text>
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter Email"
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Box>

        {/* Password Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Password
          </Text>
          <Input
            {...register("password")}
            type="password"
            placeholder="Enter Password"
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </Box>

        {/* Supermarket Name Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Supermarket Name
          </Text>
          <Input
            {...register("name")}
            type="text"
            placeholder="Enter Supermarket Name"
          />
          {errors.name && (
            <ErrorText>{errors.name.message}</ErrorText>
          )}
        </Box>

        {/* Location Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Location
          </Text>
          <Input
            {...register("location")}
            type="text"
            placeholder="Enter Location"
          />
          {errors.location && <ErrorText>{errors.location.message}</ErrorText>}
        </Box>

        {/* Address Input */}
        <Box p={2}>
          <Text size="sm" mb="8px">
            Address
          </Text>
          <Input
            {...register("address")}
            type="text"
            placeholder="Enter Address"
          />
          {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
        </Box>
      </Grid>

      {/* Submit Button */}
      <Box p={2} pt={5}>
        <Button type="submit">Submit</Button>
      </Box>
    </form>
  );
};

export default SupermarketForm;

// type FormData = z.infer<typeof schema>;

// const SupermarketForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit((data) => {
//         console.log(data);
//         onSubmit({
//           ...data,
//           logo: "https://www.google.com",
//           role: "supermarketManager",
//         });
//       })}
//     >
//       <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
//         {/* Name Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Name
//           </Text>
//           <Input
//             {...register("name")}
//             type="text"
//             placeholder="Enter Supermarket Manager Name"
//           />
//           {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
//         </Box>

//         {/* Contact Number Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Contact Number
//           </Text>
//           <Input
//             {...register("contactNo")}
//             type="text"
//             placeholder="Enter Contact Number"
//           />
//           {errors.contactNo && (
//             <ErrorText>{errors.contactNo.message}</ErrorText>
//           )}
//         </Box>

//         {/* Email Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Email
//           </Text>
//           <Input
//             {...register("email")}
//             type="email"
//             placeholder="Enter Email"
//           />
//           {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
//         </Box>

//         {/* Password Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Password
//           </Text>
//           <Input
//             {...register("password")}
//             type="password"
//             placeholder="Enter Password"
//           />
//           {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
//         </Box>

//         {/* Supermarket Name Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Supermarket Name
//           </Text>
//           <Input
//             {...register("superMarketName")}
//             type="text"
//             placeholder="Enter Supermarket Name"
//           />
//           {errors.superMarketName && (
//             <ErrorText>{errors.superMarketName.message}</ErrorText>
//           )}
//         </Box>

//         {/* Location Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Location
//           </Text>
//           <Input
//             {...register("location")}
//             type="text"
//             placeholder="Enter Location"
//           />
//           {errors.location && <ErrorText>{errors.location.message}</ErrorText>}
//         </Box>

//         {/* Address Input */}
//         <Box p={2}>
//           <Text size="sm" mb="8px">
//             Address
//           </Text>
//           <Input
//             {...register("address")}
//             type="text"
//             placeholder="Enter Address"
//           />
//           {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
//         </Box>
//       </Grid>

//       {/* Submit Button */}
//       <Box p={2} pt={5}>
//         <Button type="submit">Submit</Button>
//       </Box>
//     </form>
//   );
// };

// export default SupermarketForm;
