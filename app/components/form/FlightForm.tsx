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
                    <Col className="flex-1 space-y-1 text-sm p-2 hover:bg-sky-300 cursor-pointer">
                        <h6>From</h6>
                        <h2 className="text-2xl font-bold">Bengaluru</h2>
                        <p>BLR, Bengaluru International Airport India</p>
                    </Col>
                    <Col className="flex-1 space-y-1 text-sm p-2 hover:bg-sky-300 cursor-pointer">
                        <h6>To</h6>
                        <h2 className="text-2xl font-bold">Dubai</h2>
                        <p>DXB, Dubai International United Arab Emirates</p>
                    </Col>
                    <Col className="flex-1 space-y-1 text-sm p-2 hover:bg-sky-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <h6>Departure</h6>
                            <div className="border-l-2 border-b-2 border-sky-600 w-2 h-2 -rotate-[45deg]"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="space-x-1">
                                <span className="text-2xl font-extrabold">9</span>
                                <span className="font-semibold">Nov'23</span>
                            </div>

                            <div className="text-sm">Thursday</div>
                        </div>
                    </Col>
                    <Col className="flex-1 text-sm p-2 hover:bg-sky-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <h6>Return</h6>
                            <div className="border-l-2 border-b-2 border-sky-600 w-2 h-2 -rotate-[45deg]"></div>
                        </div>
                        <div className="space-x-1">
                            <span className="text-2xl font-extrabold">9</span>
                            <span className="font-semibold">Nov'23</span>
                        </div>

                        <div className="text-sm">Thursday</div>
                    </Col>
                    <Col className="flex-1 text-sm p-2 hover:bg-sky-300 cursor-pointer">
                        <div className="flex items-center gap-2">
                            <h6>Travelers & Class</h6>
                            <div className="border-l-2 border-b-2 border-sky-600 w-2 h-2 -rotate-[45deg]"></div>
                        </div>
                        <div className="space-x-1">
                            <span className="text-2xl font-extrabold">3</span>
                            <span className="font-semibold">Travelers</span>
                        </div>

                        <div className="text-sm">Economy/Premium Economy</div>
                    </Col>
                </Row>
            </Flex>

        </Flex >
    )
}

export default FlightForm