/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import "@fontsource/montserrat";

import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'

import Abstract from './Abstract'

export default function App() {
    return <div css={css`height: 100%; margin: 0 auto; display: flex; flex-direction: column;`}>
        <div css={css`text-align: center; color: white; margin-top: 50px; font-size: 2rem; font-family: "Montserrat";`}>DARIA TSENTER</div>
        <div css={css`text-align: center; color: white; margin-top: 30px; font-family: "Montserrat";`}>currently building software in San Francisco</div>
        <Abstract css={css`cursor: pointer;`}/>
        {/* links */}
        <div css={css`color: red; margin: 0 auto; margin-bottom: 50px;`}>
            <a href="https://github.com/dariatsenter" target="_blank" rel="noopener noreferrer"><AiFillGithub color='white' style={{margin : '10px', height: '30px', width: '30px'}}/></a>
            <a href="https://www.linkedin.com/in/daria-tsenter/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin color='white' style={{margin : '10px', height: '30px', width: '30px'}}/></a>
            <a href="https://twitter.com/dasha_tsenter" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter color='white' style={{margin : '10px', height: '30px', width: '30px'}}/></a>
            <a href="https://www.instagram.com/dasha_tsenter/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram color='white' style={{margin : '10px', height: '30px', width: '30px'}}/></a>
            <a href="https://www.youtube.com/c/dashatsenter/" target="_blank" rel="noopener noreferrer"><AiFillYoutube color='white' style={{margin : '10px', height: '30px', width: '30px'}}/></a>
        </div>
    </div>
}