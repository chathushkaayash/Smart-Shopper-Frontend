
import {  Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Component } from "react";
import QrReader from "react-qr-scanner";
import OrderDetails from "./OrderDetails";
// import QrGen from './QrGenarator';

interface TestState {
  delay: number;
  result: string;
}

class Test extends Component<{}, TestState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      delay: 100,
      result: "Scanning...",
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  componentDidUpdate(prevProps: {}, prevState: TestState) {
    console.log("Component did update");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
  }

  

  handleScan(data: any) {
    if (data) {
      if (typeof data === "string") {
        this.setState({ result: data });
      } else if (data.text) {
        this.setState({ result: data.text });
      } else {
        console.log("Scanned data:", data);
        this.setState({ result: "Unknown data format" });
      }
    } else {
      console.log("No data scanned");
    }
  }

  handleError(err: any) {
    console.error("Error during scanning:", err);
  }

  render() {
    const previewStyle = {
      height: 480,
      width: 640,
    };

    return (
      <>
        <Grid templateColumns="repeat(2, 1fr)" m={5} p={5} gap={5} w={"full"}>
          <Box p={5} borderWidth={1} borderRadius="10px" boxShadow="lg">
            <Heading fontSize="2xl" color="primary" mb={2}>
              Scan QR Code Here
            </Heading>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </Box>
          <Box
            p={5}
            borderWidth={1}
            borderRadius="10px"
            boxShadow="lg"
            w={"full"}
          >
            <Box bg={"orange.100"} p={2} borderRadius={5} mb={2}>
              <Text>Order: {this.state.result}</Text>
            </Box>

            <Heading fontSize="2xl" color="primary" mb={2}>
              Order Details
            </Heading>
            <OrderDetails id={16}/>
            
          </Box>
        </Grid>
      </>
    );
  }
}

export default Test;
