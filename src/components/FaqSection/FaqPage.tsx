"use client"
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse, Col, Row, theme } from 'antd';
import type { CSSProperties } from 'react';
import image from "../../assets/Shrug-pana.png";
import Image from 'next/image';


const { Panel } = Collapse;

const FaqPage = async({faqData}:any) => {

    console.log(faqData);
    const { token } = theme.useToken();
  
    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: 'none',
    };
  
    const getItems = (panelStyle: CSSProperties) => {
      if (!faqData) return [];
  
      return faqData?.map((faq: any) => (
        <Panel
          key={faq.id}
          header={
            <Row justify="space-between" align="middle">
              <Col>
                <b>{faq.question}</b>
              </Col>
              <Col></Col>
            </Row>
          }
          style={panelStyle}
        >
          <p>{faq.answer}</p>
        </Panel>
      ));
    };
    return (
        
        <section className='' >
      <div className='container'>
        <Row gutter={16} justify="center">
      
          <Col xs={24} sm={24} md={20} lg={20}>
            <div className="right-content">
            
              <Collapse
                bordered={false}
                defaultActiveKey={[]}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
              >
                {getItems(panelStyle)}
              </Collapse>
            </div>
          </Col>
        </Row>
      </div>
    </section>
        
    );
};

export default FaqPage;