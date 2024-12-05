import './App.css';
import {Container, Stack, Switch} from "@mui/material";
import {Article} from "./types/Article.ts";

import {useState} from "react";
import {CustomAccordion} from "./components/CustomAccordion.tsx";

function App() {
    const [isNight, setNight] = useState(false)

    const articles: Array<Article> = [
        new Article("Заголовок 1", "Содержимое статьи 1"),
        new Article("Заголовок 2", "Содержимое статьи 2"),
        new Article("Заголовок 3", "Содержимое статьи 3"),
        new Article("Заголовок 4", "Содержимое статьи 4")
    ]
    const color = isNight?'darkgray':'white';

    return (
        <div style={{backgroundColor: color , width: '100vw', height:'100vh'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p>Тема: {isNight?"Ночная":"Дневная"}</p>
                <Switch onChange={(sw)=> setNight(sw.target.checked)}></Switch>
            </div>
            <Container component="div" maxWidth="sm" style={{padding:'0'}}>
                <Stack direction="column" spacing={2}>
                    {articles.map((entry, id) => (
                        <CustomAccordion entry={entry} isOdd={id%2==1} />))}
                </Stack>
            </Container>
        </div>
    )
}

export default App
