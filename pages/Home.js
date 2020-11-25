import React, {useState} from 'react'
import {
  Box,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton
} from "viviui"


function  Home(params) {
  const [isOpen, setOpen] = useState(false)

  function onOpen() {
    setOpen(true)
  }

  function onClose(params) {
    setOpen(false)
  }
  return (
   <>
   <Box w={1350} mx="auto" marginTop={50}>

    <Box d="flex" justifyContent="space-between" alignItems="center" w={970} h={112} mx="auto">
      <Button>首頁</Button>
      <Button>學校專頁</Button>
      <Button>搜索</Button>
    </Box>
    <Box textAlign="center" marginTop={60}>

      {/* 标题 */}
      <Text fontSize={{base: '24px', md: '28px' }}>輔導統計</Text>

      {/* 表格 */}
      <Tabs>
        <TabList>
          <Tab w={180} _selected={{ color: "white", bg: "#888" }} fontSize={{base: '16px', md: '22px' }}>班級</Tab>
          <Tab w={180} _selected={{ color: "white", bg: "#888" }} fontSize={{base: '16px', md: '22px' }}>輔導人員</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Table marginTop="60px">
              <TableHead fontSize={{ base: '12px', md: '18px' }}>
                <TableRow h={60} >
                  <TableCell border="2px solid #aaa">班级</TableCell>
                  <TableCell border="2px solid #aaa">人数</TableCell>
                  <TableCell border="2px solid #aaa">跟進中</TableCell>
                  <TableCell border="2px solid #aaa">已結案</TableCell>
                  <TableCell border="2px solid #aaa">操作</TableCell>
                </TableRow>
              </TableHead>
              <TableBody fontSize={{ base: '12px', md: '18px' }}>
                <TableRow h={60}>
                  <TableCell border="2px solid #aaa" textAlign='center'>K1A</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>15</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>10</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>5</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>
                    <Button onClick={onOpen} w={{base:80,md:100}}>查 看</Button>
                  </TableCell>
                </TableRow>
                <TableRow h={60}>
                  <TableCell border="2px solid #aaa" textAlign='center'>K1A</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>25</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>20</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>5</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>
                    <Button onClick={onOpen} w={{base:80,md:100}}>查 看</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel>
          <Table marginTop="60px">
            <TableHead fontSize={{ base: '18px', md: '20px' }}>
              <TableRow h={60} >
                <TableCell border="2px solid #aaa">姓名</TableCell>
                <TableCell border="2px solid #aaa">人数</TableCell>
                <TableCell border="2px solid #aaa">咨詢</TableCell>
                <TableCell border="2px solid #aaa">開案</TableCell>
                <TableCell border="2px solid #aaa">跟進中</TableCell>
                <TableCell border="2px solid #aaa">已結案</TableCell>
                <TableCell border="2px solid #aaa">操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody fontSize={{ base: '18px', md: '20px' }}>
              <TableRow h={60}>
                <TableCell border="2px solid #aaa" textAlign='center'>Amy</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>2</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>1</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>1</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>0</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>2</TableCell>
                <TableCell border="2px solid #aaa" textAlign='center'>
                  <Button onClick={onOpen} w={{base:80,md:100}}>查 看</Button>
                </TableCell>
              </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>

    {/* 模态弹出层 */}
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="1200px">
      <ModalOverlay />
      <ModalContent>
      <ModalHeader>辅导统计</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} >
          <Box>
      
            <Box d="flex"   justifyContent="space-around">
              <span>人数: 1</span>
              <span>咨询: 1</span>
              <span>開案: 1</span>
              <span>跟進中: 1</span>
              <span>已結案: 1</span>
            </Box>

            <Table marginTop="60px">
              <TableHead fontSize={{ base: '18px', md: '20px' }}>
                <TableRow h={60} >
                  <TableCell border="2px solid #aaa">姓名</TableCell>
                  <TableCell border="2px solid #aaa">班级</TableCell>
                  <TableCell border="2px solid #aaa">學號</TableCell>
                  <TableCell border="2px solid #aaa">轉介年份</TableCell>
                  <TableCell border="2px solid #aaa">結案日期</TableCell>
                  <TableCell border="2px solid #aaa">跟進輔導員</TableCell>
                  <TableCell border="2px solid #aaa">處理方式</TableCell>
                  <TableCell border="2px solid #aaa">跟進情況</TableCell>
                </TableRow>
              </TableHead>
              <TableBody fontSize={{ base: '18px', md: '20px' }}>
                <TableRow h={60}>
                  <TableCell border="2px solid #aaa" textAlign='center'>student01</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>K1A</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>01</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>2020-08</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>2020-09</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>Amy</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>開案</TableCell>
                  <TableCell border="2px solid #aaa" textAlign='center'>已結案</TableCell>
                
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
    </Box>
   </>
  )
}
export default Home
