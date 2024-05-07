import React, { useState } from "react";
import {
    HeartOutlined,
    LikeOutlined,

} from "@ant-design/icons";
import { Card, Col, Row, Flex, Rate, Button } from "antd";
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function Activity() {
    const [value, setValue] = useState(3);

    return (
        <>
            <div className="container">
                <h2 className="center">Recent Activity</h2>
                <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <Link to='/user_details'> <img src="/images/banner1.webp" alt="" />
                                        </Link>
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <img src="/images/banner1.webp" alt="" />
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <img src="/images/banner1.webp" alt="" />
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <img src="/images/banner1.webp" alt="" />
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <img src="/images/banner1.webp" alt="" />
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            bordered={false}
                            title={
                                <div className="flexColumn">
                                    <div className="flexSpaceBetween">
                                        <img src="/images/banner1.webp" alt="" />
                                        <span style={{ marginTop: '5px' }}>Lily S. added a photo</span>
                                    </div>
                                    <div>
                                        <span style={{ color: 'grey', marginTop: '50px' }}>5 minutes ago</span>
                                    </div>
                                </div>
                            }
                            style={{ width: '100%' }}

                        >
                            <Meta
                                title="Sizzling Pot King"
                                description={
                                    <div>
                                        <Flex gap="middle" vertical>
                                            <Rate onChange={setValue} value={value} />
                                        </Flex>
                                        <p>Came here on a Sunday night after a day party in sf, and they are open pretty late. It was pretty bus...</p>
                                        <a type="link" href="">Read more</a>

                                    </div>
                                }
                            />
                            <Card
                                style={{ width: '100%', marginTop: '10px' }}
                                cover={
                                    <img
                                        alt="example"
                                        src="/images/banner1.webp"
                                    />
                                }
                                actions={[
                                    <HeartOutlined key="like" />,
                                    <LikeOutlined key="heart" />,

                                ]}
                            />

                        </Card>
                    </Col>

                </Row>
            </div>
        </>
    );
}
