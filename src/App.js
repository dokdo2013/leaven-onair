import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content1 from './Components/Content1';
import Content2 from './Components/Content2';
import axios from 'axios';
import moment from 'moment';

function App() {
  // const currDate = new Date();
  const [member, setMember] = useState([]);
  const [startDate, setStartDate] = useState(moment().subtract(1, 'days').format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [history, setHistory] = useState([]);
  const [nickname, setNickname] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadMember();
    loadHistory();
  }, []);

  useEffect(() => {
    loadHistory();
  }, [startDate, endDate, nickname]);

  const loadMember = () => {
    axios.get('https://api-v1.leaven.team/broadcast').then(Response => {
      console.log(Response.data);
      if (Response.data.code === 'SUCCESS') {
        setMember(Response.data.data);
      } else if (Response.data.code === 'DATA_EMPTY') {
        console.log('dd');
      }
    });
  };

  const loadHistory = () => {
    setIsLoading(true);
    axios.get('https://api-v1.leaven.team/broadcast/history?start_date=' + startDate + '&end_date=' + endDate + '&streamer=' + nickname).then(Response => {
      console.log(Response.data);
      if (Response.data.code === 'SUCCESS') {
        setHistory(Response.data.data);
      } else if (Response.data.code === 'DATA_EMPTY') {
        console.log('dd');
      }
      setIsLoading(false);
    });
    setIsLoading(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Content1 data={{
        member
      }} />
      <Content2 data={{
        history,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        nickname,
        setNickname,
        isLoading
      }} />
    </ChakraProvider>
  );
}

export default App;
