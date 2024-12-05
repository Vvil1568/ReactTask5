import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {Article} from "../types/Article.ts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/styles.scss'
import '../styles/stylePseudo.css'

interface CustomAccordionProps {
    entry: Article,
    isOdd: boolean
}

export const CustomAccordion = (props: CustomAccordionProps) => {
    const color = props.isOdd ? 'black':'blue'
    return (
        <Accordion className="accordion" key={props.entry.title} style={{color: color}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {props.entry.title}
            </AccordionSummary>
            <AccordionDetails>
                {props.entry.content}
            </AccordionDetails>
        </Accordion>
    );
};