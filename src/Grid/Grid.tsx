import { Col, Row } from 'antd';
import React from 'react';
import '../App.css';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const Grid: React.FC = () => (
    <>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
                <div style={style}>col-6</div>
            </Col>
        </Row>
    </>
);

export default Grid;
