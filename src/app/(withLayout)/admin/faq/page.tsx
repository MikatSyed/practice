"use client"
import React, { useState } from 'react';
import { CaretRightOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Collapse, Col, Row, theme } from 'antd';
import type { CSSProperties } from 'react';
import BreadCrumb from '@/components/UI/BreadCrumb';
import ActionBar from '@/components/UI/ActionBar';
import Link from 'next/link';
import { useDeleteFaqMutation, useFaqsQuery } from '@/redux/api/faqApi';
import ConfirmationModal, { ConfirmationModalProps } from '@/components/ConfirmationModal/ConfirmationModal';
import toast, { Toaster } from 'react-hot-toast';

const { Panel } = Collapse;

const FaqPage = () => {
  const { data } = useFaqsQuery(undefined);
  const { token } = theme.useToken();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState<string>('');

  const [deleteFaq] = useDeleteFaqMutation();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  const handleOk = async () => {
    console.log(id);
    const res = await deleteFaq(id).unwrap();
    setIsModalVisible(false);
    toast(res?.message, {
      icon: <span style={{ color: 'green' }}>✔</span>,
      style: {
        borderRadius: '10px',
        background: '#FFBF00',
        color: '#fff',
      },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getItems = (panelStyle: CSSProperties) => {
    if (!data) return [];

    return data?.data?.map((faq: any) => (
      <Panel
        key={faq.id}
        header={
          <Row justify="space-between" align="middle">
            <Col>
              <span>{faq.question}</span>
            </Col>
            <Col>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Link href={`/admin/faq/edit/${faq.id}`}>
                  <Button type="primary">
                    <EditOutlined />
                  </Button>
                </Link>
                <Button
                  type="dashed"
                  danger
                  onClick={() => {
                    setIsModalVisible(true);
                    setId(faq.id);
                  }}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </Col>
          </Row>
        }
        style={panelStyle}
      >
        <p>{faq.answer}</p>
      </Panel>
    ));
  };

  const modalProps: ConfirmationModalProps = {
    title: 'Do you Want to delete these items?',
    content: "You won't be able to revert this!",
    onOk: handleOk,
    onCancel: handleCancel,
    visible: isModalVisible,
  };

  return (
    <>
      <BreadCrumb items={[{ label: 'admin', link: '/admin' }]} />
      <ActionBar title="FAQ List" />
      <Toaster position="top-right" reverseOrder={false} />
      <ConfirmationModal {...modalProps} />
      <div style={{ marginBottom: '1rem' }}>
        <Link href="/admin/faq/create">
          <button className='btn'>Add Faq</button>
        </Link>
      </div>
      <Collapse
        bordered={false}
        defaultActiveKey={data ? data?.data?.map((faq: any) => faq.id.toString()) : []}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        style={{ background: token.colorBgContainer }}
      >
        {getItems(panelStyle)}
      </Collapse>
    </>
  );
};

export default FaqPage;
