import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme, Alert, AlertIcon, AlertDescription, AlertTitle } from '@chakra-ui/react';
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
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>서비스 종료 안내</AlertTitle>
        <AlertDescription>신규 방송알림봇 개편에 따라 기존 봇을 활용하던 방송정보 사이트는 운영을 중단하게 되었습니다. <a href='https://cafe.naver.com/leaven0402/2327' target='_blank'>관련 공지</a></AlertDescription>
      </Alert>
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
