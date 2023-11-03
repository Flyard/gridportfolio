import {Card, CardBody} from "@nextui-org/card";
import Image from "next/image";
import classNames from "classnames";
import {useState} from "react";

/*row-span-3*/
export default function LongLogo(props: any):JSX.Element {
    const classStr = classNames(`${props.row} ${props.col}`) ;
    const [click, setClick] = useState<string>('');
    return (
        <div className={classStr}>
            <Card className='h-full'>
                <CardBody className='flex justify-center items-center'>
                    <button onClick={() => setClick(props.clicked)}>
                        <Image src={props.src} alt='ESILV' height={400} width={400}/>
                    </button>
                </CardBody>
            </Card>
        </div>
    )
}