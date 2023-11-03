import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from "next/image";
import classNames from "classnames";

export default function Me(props: any) {
    const classStr: string = classNames(
        `${props.col} ${props.row}`
    )

    const divMe = () => {
        return (
            <div className='flex flex-col content-center items-center'>
                <Image src={"/me_mac.png"} alt="Me" height={150} width={150}/>
                <div className='p-2'>
                    <CardFooter>
                        <h2 className="text-2xl orange-to-purple-gradient font-bold">Florian RANAIVOSON</h2>
                    </CardFooter>
                </div>
            </div>
        )

    }
    const errorDiv = () => {
        return (
            <div className={'flex flex-col content-center justify-center items-center'}>
                <h1 className={'text-3xl font-bold'}>Error</h1>
            </div>
        )

    }

    const whichCard = () => {
        switch (props.card) {
            case 'dassault':
                return dassault()
            case 'me' :
                return divMe()
            case 'ccc' :
                return ccc()
            default:
                return errorDiv()
        }
    }


    const dassault = () => {
        return (
            <>
                <div className={'flex flex-col content-center items-center'}>
                    <h1 className={'text-2xl font-bold'}>Stage - Dassault Systèmes</h1>
                </div>
                <div>
                    <h3 className={'font-bold'}>Mes missions: </h3>
                    <ul>
                        <li>"What's new" - Scrapper (Vue.js, Node.js)</li>
                        <li>SIEM: Get location from IP (Vue.js, Node.js)</li>
                        <li>Cloud migration helper (Vue.js, Node.js)</li>
                    </ul>
                </div>

            </>

        )
    }

    const ccc = () => {
        return (
            <>
                <div className={'flex flex-col content-center items-center'}>
                    <h1 className={'text-2xl font-bold'}>Cybersécurité & Cloud Computing</h1>
                </div>
                <div>
                    <ul className={'list-inside'}>
                        <ul>
                            <p className={'font-bold'}>Cyber</p>
                            <li className={'indent-3'}>Cyber Risk Management</li>
                            <li className={'indent-3'}>Security Management</li>
                        </ul>
                        <ul >
                            <p className={'font-bold'}>Cloud</p>
                            <li className={'indent-3'}>Cloud Deployment</li>
                            <li className={'indent-3'}>Cloud Data Structure</li>
                            <li className={'indent-3'}>Cloud Orchestration</li>
                        </ul>
                        <ul>
                            <p className={'font-bold'}>Dev</p>
                            <li className={'indent-3'}>Software Engineering</li>
                            <li className={'indent-3'}>Secure Web Development</li>
                        </ul>
                    </ul>

                </div>
            </>
        )
    }


    return (
        <div className={classStr}>
            <Card className='h-full'>
                <CardBody>
                    {whichCard()}
                </CardBody>
            </Card>
        </div>
    )
}