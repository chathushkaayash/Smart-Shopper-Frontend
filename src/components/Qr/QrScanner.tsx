import { Box, Flex, Text } from '@chakra-ui/react';
import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import QrGen from './QrGenarator';

interface TestState {
  delay: number;
  result: string;
}

class Test extends Component<{}, TestState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps: {}, prevState: TestState) {
    console.log('Component did update');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  handleScan(data: any) {
    if (data) {
      if (typeof data === 'string') {
        this.setState({ result: data });
      } else if (data.text) {
        this.setState({ result: data.text });
      } else {
        console.log('Scanned data:', data);
        this.setState({ result: 'Unknown data format' });
      }
    } else {
      console.log('No data scanned');
    }
  }

  handleError(err: any) {
    console.error('Error during scanning:', err);
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <>
      <Flex align="center" justify="center" h="100vh" w="100vw">
        <Box m={10} p={5} borderWidth={1} borderRadius="20px" boxShadow="lg">
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text p={3} m={3} bg="red.100" borderRadius="20px">
              {this.state.result}
            </Text>
          </Box>
        </Box>
      </Flex>
      <QrGen  />

      </>
    );
  }
}

export default Test;
