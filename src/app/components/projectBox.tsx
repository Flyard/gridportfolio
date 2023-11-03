import {Card, CardBody} from "@nextui-org/card";
import classNames from "classnames";

export default function ProjectBox(props: any) {
    const comingSoon = props.comingSoon ? 'grayscale' : '';
    const classStr = classNames(`${props.color} ${props.row} ${props.col} ${comingSoon}`)
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }
    return (
        <>
            <Card className={classStr}>
                <CardBody className='flex items-center justify-center'>
                    <a href={props.url} target={'_blank'} style={linkStyle}>
                        <h2 className='text-xl font-bold text-white purple-to-blue-gradient'>{props.description}</h2>
                    </a>

                </CardBody>

            </Card>


        </>
    )
}
