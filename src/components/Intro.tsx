import { Props } from '../helpers/types';

export default function Intro(props: Props) {
    const { children } = props;
    return (
        <>
        <section id='intro'>
            <h1>
            { children }
            </h1>    
        </section>
        </>
    )
}