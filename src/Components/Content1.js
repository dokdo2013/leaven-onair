import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  TableContainer,
  Heading,
  Container,
} from '@chakra-ui/react'

export default function Content1 ({data}) {
  return (
    <>
      <Container maxW='1200px'>
        <Heading my={5} size='lg' style={{fontFamily: 'IBM Plex Sans KR'}}>레븐 방송현황</Heading>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>닉네임</Th>
                <Th>현재 방송여부</Th>
                <Th>최근 방송시작 일시</Th>
                <Th>최근 방송종료 일시</Th>
                <Th>업데이트 일시</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                data.member.map(item => {
                  // console.log(typeof(item.on_broadcast_datetime));
                  return (
                    <Tr>
                      <Td>{item.streamer_name_ko}</Td>
                      <Td>{item.broadcast_status === 'ON' ? <Badge colorScheme='green'>ON</Badge> : <Badge colorScheme='red'>OFF</Badge>}</Td>
                      <Td>{item.on_broadcast_datetime ? item.on_broadcast_datetime.replace('T', ' ') : ''}</Td>
                      <Td>{item.off_broadcast_datetime ? item.off_broadcast_datetime.replace('T', ' ') : ''}</Td>
                      <Td>{item.update_datetime ? item.update_datetime.replace('T', ' ') : ''}</Td>
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