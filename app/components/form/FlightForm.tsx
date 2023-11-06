import { Col, Flex, Radio, Row } from "antd"
import type { RadioChangeEvent } from 'antd';
import { useState } from "react";

const FlightForm = () => {
    const [value, setValue] = useState("one-way");

    const tripChoice = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Flex vertical={true} className="w-full gap-4 pt-16 px-10">
            <Radio.Group onChange={tripChoice} value={value}>
                <Radio value="one-way">One Way</Radio>
                <Radio value="round-trip">Round Trip</Radio>
                <Radio value="multi-city">Multi City</Radio>
            </Radio.Group>

            <Flex>
                <Row className="w-full justify-between border border-black/10 rounded-lg divide-x-2 divide-black/10">
                    <Col className="flex-1 text-sm p-2">
                        <h6>From</h6>
                        <h2 className="font-bold">Bengaluru</h2>
                        <p>BLR, Bengaluru International Airport India</p>
                    </Col>
                    <Col className="flex-1 text-sm p-2">
                        To
                    </Col>
                    <Col className="flex-1 text-sm p-2">
                        Departure
                    </Col>
                    <Col className="flex-1 text-sm p-2">
                        Return
                    </Col>
                    <Col className="flex-1 text-sm p-2">
                        Travelers & Class
                    </Col>
                </Row>
            </Flex>

        </Flex>
    )
}

export default FlightForm