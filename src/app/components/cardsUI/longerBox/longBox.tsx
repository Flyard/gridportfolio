import {Card, CardBody} from "@nextui-org/card";
import classNames from "classnames";
import {useState} from "react";

export default function LongBox(props: any) {
    const [click, setClick] = useState<string>('')

    const classStr: string = classNames(
        `${props.col} ${props.row}`
    )

    return (
        <div className={classStr}>
            <Card className='h-full '>
                <CardBody className='flex items-center justify-center'>
                    <button onClick={() => setClick(props.clicked)}>
                        <h2 className='orange-to-purple-gradient text-xl font-bold'>
                            {props.description}
                        </h2>
                    </button>
                </CardBody>
            </Card>
        </div>
    )
}