import {Card, CardBody} from "@nextui-org/card";
import Image from "next/image";
import classNames from "classnames";

/*row-span-3*/
export default function TinyLogo(props: any): JSX.Element {
    const classStr = classNames(`${props.row} ${props.col}`);
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

    return (
        <div className={classStr}>
            <a href={props.url} style={linkStyle} target={'_blank'}>
                <Card>
                    <CardBody className='flex justify-center items-center'>
                            <Image src={props.src} alt='ESILV' height={100} width={100} className={props.className}/>
                    </CardBody>
                </Card>
            </a>

        </div>


    )
}