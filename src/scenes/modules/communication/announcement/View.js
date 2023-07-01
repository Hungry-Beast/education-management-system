import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ImageContext } from "../../../../context/Context";
import NotificationTabs from "./NotificationTabs";
import {
  BsFillStarFill,
  BsFillBellFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Avatar from "./avatar.png";

const Component = styled.div`
  width: calc(100% - 30px);
  padding: 16px;
  background-color: #fff;
  margin: 15px auto;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 0.1rem solid lightgray;
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 8px;
  width: 16.67%; /* 6 equal columns */
`;

const TableCell = styled.td`
  padding: 8px;
  width: 16.67%; /* 6 equal columns */

  font-size: 1.3rem;

  img {
    width: 20%;
    border-radius: 50%;
  }
`;

const InfoIcon = styled(BsInfoCircleFill)`
  float: right;
  margin: 1rem;
  font-size: 1rem;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  padding: 4rem;
  border-radius: 10px;
  max-width: 400px;
  display: flex;
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1rem;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const GreenTick = styled.span`
  color: green;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px;
  border: none;
  background-color: ${(props) => (props.isActive ? "#f2f2f2" : "transparent")};
  cursor: pointer;
`;

export const View = () => {
  const [context, setContext] = useContext(ImageContext);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setContext("notification.svg");
  }, []);

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((item) => item !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleOptionClick = () => {
    // Perform action here when an option is selected
    setShowModal(false);
  };
  // Define your data array
  const data = [
    {
      id: 1,
      mobileNumber: "123-456-7890",
      time: "12:34 PM",
    },
    {
      id: 2,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 3,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 4,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 5,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 6,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 7,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 8,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 9,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
    {
      id: 10,
      mobileNumber: "987-654-3210",
      time: "01:23 PM",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* <Component> */}
      <InfoIcon onClick={handleInfoClick} />
      {showModal && (
        <Modal>
          <ModalContent>
            <CloseIcon onClick={handleModalClose} />
            <Option onClick={handleOptionClick}>
              SMS <GreenTick>&#10003;</GreenTick>
            </Option>
            <Option onClick={handleOptionClick}>
              Email <GreenTick>&#10003;</GreenTick>
            </Option>
            <Option onClick={handleOptionClick}>
              Push <GreenTick>&#10003;</GreenTick>
            </Option>
          </ModalContent>
        </Modal>
      )}
      <Table>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </TableCell>
              <TableCell>
                <BsFillStarFill />
              </TableCell>
              <TableCell>
                <img src={Avatar} alt="" />
              </TableCell>
              <TableCell>{item.mobileNumber}</TableCell>
              <TableCell>
                <BsFillBellFill />
              </TableCell>
              <TableCell>{item.time}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            isActive={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
      {/* </Component> */}
    </>
  );
};
