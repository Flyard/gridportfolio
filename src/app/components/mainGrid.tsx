import Me from "@/app/components/cardsUI/me/me";
import TinyLogo from "@/app/components/cardsUI/tinyLogo/tinyLogo";
import {urls} from "@/app/urls";
import LongBox from "@/app/components/cardsUI/longerBox/longBox";
import LongLogo from "@/app/components/cardsUI/longLogo/longLogo";
import ProjectBox from "@/app/components/projectBox";
import {useState} from "react";

export default function MainGrid() {
    const [clicked, setClicked] = useState<boolean>(false);
    const [card, setCard] = useState<String>('me');

    const handleClicked = (value: string) => {
        setCard(value);
    }
    return (
        <>
            <div className='grid grid-cols-10 grid-rows-4 gap-3'>
                <Me card={card} row='row-start-2 row-end-4' col='col-start-4 col-end-8'/>
                <TinyLogo src={'/esilv.png'} col='col-start-4 col-end-5' row='row-start-1'/>
                <TinyLogo src={'/linkedin.svg'} col='col-start-4 col-end-5' row='row-start-4' url={urls.linkedin}/>
                <TinyLogo src={'/github.svg'} col='col-start-5 col-end-6' row='row-start-4' url={urls.github}/>
                <TinyLogo src={'/instagram.svg'} col='col-start-6 col-end-7' row='row-start-4' url={urls.instagram}/>
                <TinyLogo src={'/mic.svg'} col='col-start-7 col-end-8' row='row-start-4' url={urls.musicinstagram}/>
                <LongBox description='Cybersécurité & Cloud Computing' row="row-start-1"
                         col='col-start-5 col-end-8' clicked={() => {
                    handleClicked('ccc')
                }}/>
                <LongLogo src={'/3ds.svg'} col='col-start-8 col-end-10' row='row-start-1' clicked={() => {
                    handleClicked('dassault')
                }}/>
                <TinyLogo src={'/vue.svg'} col='col-start-8' row='row-start-2'/>
                <TinyLogo src={'/gitlab.svg'} col='col-start-8' row='row-start-3'/>
                <TinyLogo src={'/ts.svg'} col='col-start-9' row='row-start-2'/>
                <TinyLogo src={'/docker.svg'} col='col-start-9' row='row-start-3'/>
                <ProjectBox col='col-start-2 col-end-4' row='row-start-1' description='Locations Projects'
                            url={urls.locationsProject}/>
                <ProjectBox col='col-start-2 col-end-4' row='row-start-2' description='Docker TODO'
                            url={urls.dockertodo}/>
                <ProjectBox col='col-start-2 col-end-4' row='row-start-3' description='mySZM' comingSoon={true}/>
                <ProjectBox col='col-start-2 col-end-4' row='row-start-4' description='BankApp' comingSoon={true}/>
                <LongBox col='col-start-8 col-end-10' row='row-start-4' description={card === 'me' ? 'déco' : 'retour'}
                         clicked={() => {
                             handleClicked('me')
                         }}/>
            </div>
        </>
    )
}