import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Container,
  Input,
  Spinner,
  Box,
  Badge,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'
import { DatePicker } from '@orange_digital/chakra-datepicker';

export default function Content2 ({data}) {
  return (
    <>
      <Container my={10} maxW='1200px'>
        <Heading my={5} size='lg' style={{fontFamily: 'IBM Plex Sans KR'}}>레븐 뱅온/뱅종 기록</Heading>
        <Heading mb={2} size="xs" style={{fontFamily: 'IBM Plex Sans KR', fontWeight: 400}}>유의사항 : 실제 방송시간과 최대 10~20분 가량 오차가 있을 수 있습니다.</Heading>
        <Heading mb={5} size="xs" style={{fontFamily: 'IBM Plex Sans KR', fontWeight: 400}}>사용방법 : 시작일시/종료일시를 변경하면 자동으로 검색결과가 로딩됩니다.</Heading>
        <SimpleGrid columns={3} mb={3}>
          <FormControl p={3}>
            <FormLabel htmlFor='start-datetime'>시작일시</FormLabel>
            <Input id='start-datetime' type='date' value={data.startDate} onChange={(value) => {
              data.setStartDate(value.target.value);
            }} />
          </FormControl>
          <FormControl p={3}>
            <FormLabel htmlFor='end-datetime'>종료일시</FormLabel>
            <Input id='end-datetime' type='date' value={data.endDate} onChange={(value) => {
              data.setEndDate(value.target.value);
            }} />
          </FormControl>
          <FormControl p={3}>
            <FormLabel htmlFor='nickname'>닉네임</FormLabel>
            <Select id="nickname" value={data.nickname} onChange={(value) => {
              data.setNickname(value.target.value);
            }}>
              <option value='all'>전체</option>
              <option value='gamjagabee'>감자가비</option>
              <option value='gunaguna00'>구나구나</option>
              <option value='beadyo97'>구슬요</option>
              <option value='vnek1234'>노래하는도란</option>
              <option value='kbs9981'>김병살</option>
              <option value='adricham'>아드리챔</option>
              <option value='yudarlinn'>유달린</option>
              <option value='gofl2237'>전해리</option>
              <option value='jeeya0402'>지야</option>
              <option value='kimc6h12o6'>포도당</option>
            </Select>
          </FormControl>
        </SimpleGrid>
        {
          data.isLoading && (
            <Box style={{textAlign: 'center'}}>
              <Spinner color='red.500' />
            </Box>            
          )
        }
        <TableContainer>
          <Table variant='simple' mb={10}>
            <Thead>
              <Tr>
                <Th>닉네임</Th>
                <Th>방송 상태변경</Th>
                <Th>기록일시</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data.history.map(item => {
                  // console.log(typeof(item.on_broadcast_datetime));
                  return (
                    <Tr>
                      <Td>{item.streamer_name_ko}</Td>
                      <Td>{item.action_type === 'ON' ? <Badge colorScheme='green'>ON</Badge> : <Badge colorScheme='red'>OFF</Badge>}</Td>
                      <Td>{item.reg_datetime ? item.reg_datetime.replace('T', ' ') : ''}</Td>
                    </Tr>
                  )
                })
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  )
};