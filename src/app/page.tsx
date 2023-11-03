"use client";
import Me from "@/app/components/cardsUI/me/me";
import TinyLogo from "@/app/components/cardsUI/tinyLogo/tinyLogo";
import LongBox from "@/app/components/cardsUI/longerBox/longBox";
import LongLogo from "@/app/components/cardsUI/longLogo/longLogo";
import ProjectBox from "@/app/components/projectBox";
import {urls} from "@/app/urls";
import AboutMe from "@/app/components/aboutme/about";
import {useState} from "react";
import MainGrid from "@/app/components/mainGrid";

export default function Home() {
    return (
        <>
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='flex flex-wrap justify-center items-center self-center'>
                    <MainGrid/>
                </div>
            </div>
        </>


    )
}
