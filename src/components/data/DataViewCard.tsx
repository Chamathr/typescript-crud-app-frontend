import { Card, Avatar, Row, Col } from 'antd';

const DataViewCard = (props: any) => {

  const dataById = props?.data

  return (
    <>
      <Card
        hoverable
        cover={<img alt="avatar" src="https://img.lovepik.com/element/40128/7461.png_1200.png" style={{ width: '100px', height: 'auto' }} />}
      >
        <Row>
          <Col span={24} style={{ fontSize: '30px', fontWeight: 'bold' }}>{dataById?.name}</Col>
          <Col span={3} style={{ fontSize: '20px' }}>Email</Col>
          <Col span={21} style={{ fontSize: '20px' }}>{dataById?.email}</Col>
          <Col span={3} style={{ fontSize: '20px' }}>Age</Col>
          <Col span={21} style={{ fontSize: '20px' }}>{dataById?.age}</Col>
        </Row>

      </Card>
    </>
  );
};

export default DataViewCard;