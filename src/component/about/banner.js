import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H1_Desktop, Link_Desktop, Body_Text_Desktop, H1_Mobile, Body_Text_Mobile, Link_Mobile, Description_Text_Desktop } from '../../style/typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as color from '../../style/basic/color';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import TextEdit_Custom from '../../style/form';
import { Button_Contained } from '../../style/button';
import CheckBox_Circle from '../../style/checkbox';

function Banner() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            console.log('Navbar handleResize log - 1 : ', window.innerWidth);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{
            width: '100vw',
            height: 'calc(100vh - 100px)',
            backgroundColor: '#333333',
        }}>
            {
                windowWidth > SCREEN_SMALL_WIDTH &&
                <Box sx={{
                    position: 'relative',
                }}>
                    <img alt='' src='./images/banner1.png'
                        style={{
                            position: 'absolute',
                            width: '100vw',
                        }} />
                    <Box Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                        ...{
                            position: 'absolute',
                            width: '40vw',
                            height: '30vh',
                            paddingTop: '10vw',
                            marginLeft: '10vw',
                            justifyContent: 'space-between',
                        }
                    }}>
                        <H1_Desktop>Start Your Driving Journey With Us</H1_Desktop>
                        <Body_Text_Desktop>Get driving lessons in London with fully qualified instructors.</Body_Text_Desktop>
                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                alignItems: 'center',
                            }
                        }}>
                            <Link_Desktop style={{
                                color: color.accent,
                            }}>Read More</Link_Desktop>
                            <ExpandMoreIcon sx={{ color: color.accent }} />
                        </Box>
                    </Box>
                </Box>
            }
        </Box >
    );
}

export default Banner;